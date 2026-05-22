'use client'

import { useForm } from 'react-hook-form'
import { useAuthModal } from '@/context/AuthModalContext'
import { verifyEmail } from '@/lib/api/auth'

interface VerifyForm {
  code: string
}

export default function VerificationModal() {
  const { activeModal, closeModal, verifyEmail: email } = useAuthModal()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyForm>({ mode: 'onTouched' })

  const onSubmit = async (data: VerifyForm) => {
    if (!email) return
    try {
      await verifyEmail({ email, code: data.code })
      closeModal()
    } catch (err: any) {
      const msg = err?.response?.data?.errors || err?.response?.data?.message || 'Verification failed'
      // set simple field error via alert under code — use browser alert fallback
      // For now, we rely on form validation and toast in helpers for success
      // If backend returns field errors, they can be handled here later.
      console.error(msg)
    }
  }

  if (activeModal !== 'verify') return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Verification Code</h3>
          <button onClick={closeModal} className="text-gray-500">Close</button>
        </div>
        <p className="text-sm text-gray-600 mb-4">Enter the 6-digit code sent to <strong>{email}</strong></p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input
            {...register('code', { required: 'Code is required', pattern: { value: /^[0-9]{6}$/, message: 'Enter a valid 6-digit code' } })}
            maxLength={6}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-[#1D6FD8]"
            placeholder="123456"
          />
          {errors.code && <p className="text-xs text-red-500">{errors.code.message}</p>}

          <button type="submit" disabled={isSubmitting} className="w-full bg-[#1D6FD8] text-white py-2 rounded-full">
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </button>
        </form>
      </div>
    </div>
  )
}
