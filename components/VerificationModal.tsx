'use client'

import { useEffect, useRef, useState, type KeyboardEvent, type ClipboardEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthModal } from '@/context/AuthModalContext'
import { verifyEmail as verifyEmailApi } from '@/lib/api/auth'

interface VerifyForm {
  code: string
}

export default function VerificationModal() {
  const { activeModal, closeModal, verifyEmail: email, openSignin } = useAuthModal()
  const [storedEmail, setStoredEmail] = useState<string | null>(null)
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''))
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('verifyEmail')
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved) setStoredEmail(saved)
    }
  }, [])

  const currentEmail = email || storedEmail

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<VerifyForm>({ mode: 'onTouched' })

  useEffect(() => {
    register('code', {
      required: 'Code is required',
      pattern: { value: /^[0-9]{6}$/, message: 'Enter a valid 6-digit code' },
    })
  }, [register])

  const focusInput = (index: number) => {
    const next = inputsRef.current[index]
    if (next) next.focus()
  }

  const updateDigit = (index: number, value: string) => {
    const normalized = value.replace(/\D/g, '')
    if (normalized.length > 1) return
    const nextDigits = [...digits]
    nextDigits[index] = normalized
    setDigits(nextDigits)
    setValue('code', nextDigits.join(''))

    if (normalized && index < 5) {
      focusInput(index + 1)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      focusInput(index - 1)
    }
    if (event.key === 'ArrowLeft' && index > 0) {
      focusInput(index - 1)
    }
    if (event.key === 'ArrowRight' && index < 5) {
      focusInput(index + 1)
    }
  }

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (!pasted) return
    const nextDigits = Array(6).fill('')
    pasted.split('').forEach((digit, index) => {
      nextDigits[index] = digit
    })
    setDigits(nextDigits)
    setValue('code', nextDigits.join(''))
    const nextIndex = Math.min(pasted.length, 5)
    focusInput(nextIndex)
  }

  const onSubmit = async () => {
    if (!currentEmail) {
      setError('code', { type: 'manual', message: 'Email is required for verification' })
      return
    }

    const codeValue = digits.join('')
    setValue('code', codeValue)

    if (codeValue.length !== 6) {
      setError('code', { type: 'manual', message: 'Enter the 6-digit code' })
      return
    }

    try {
      await verifyEmailApi({ email: currentEmail, otp: codeValue })
      closeModal()
    } catch (error: unknown) {
      const resp = error as { response?: { data?: { message?: string } } }
      const message = resp?.response?.data?.message || 'Verification failed'
      setError('code', { type: 'server', message })
    }
  }

  const handleBackToLogin = () => {
    closeModal()
    openSignin()
  }

  if (activeModal !== 'verify') return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-215 bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-130 max-h-[95vh]">
        <div className="relative w-full md:w-[40%] min-h-55 md:min-h-full shrink-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/register-side-img.png')" }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 px-6">
            <p className="text-white text-center text-sm font-medium leading-snug drop-shadow">
              Verification code has been sent
              <br /> to your email address.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-6 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 pt-5 pb-2 border-b border-gray-100">
            <button
              onClick={closeModal}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <span className="text-[#1D6FD8] font-semibold text-sm">Verification Code</span>
            <span className="w-8" />
          </div>

          <div className="flex-1 px-6 md:px-8 py-6">
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-4 leading-tight">
              We’ve Sent A 6-Digit Verification Code To Your Email
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Please enter the code below to continue securely.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <input type="hidden" {...register('code')} />
              <div className="grid grid-cols-6 gap-3">
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { inputsRef.current[index] = el }}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(event) => updateDigit(index, event.target.value)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    onPaste={handlePaste}
                    className="h-14 w-full rounded-xl border border-gray-200 text-center text-xl font-semibold text-gray-900 outline-none focus:border-[#1D6FD8] focus:ring-2 focus:ring-[#1D6FD8]/10"
                  />
                ))}
              </div>
              {errors.code && <p className="text-xs text-red-500">{errors.code.message}</p>}

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Expire in 1:00</span>
                <button type="button" className="text-[#1D6FD8] font-semibold">
                  Resend
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1D6FD8] hover:bg-[#1559b8] active:bg-[#1045a0] text-white font-semibold text-sm py-3 rounded-full transition-colors duration-200 disabled:opacity-60"
              >
                {isSubmitting ? 'Please wait...' : 'Continue'}
              </button>

              <button
                type="button"
                onClick={handleBackToLogin}
                className="text-center text-sm text-[#1D6FD8] font-semibold hover:underline"
              >
                Back to login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
