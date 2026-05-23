"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signup, signin } from '@/lib/api/auth'
import { useAuthModal } from '@/context/AuthModalContext'

interface SignupModalProps {
  mode: 'signup' | 'signin'
  isOpen: boolean
  onClose: () => void
  onSwitchMode?: () => void
}

type FormValues = {
  fullName: string
  email: string
  phone: string
  password: string
}

export default function SignupModal({ mode, isOpen, onClose, onSwitchMode }: SignupModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const { openVerify } = useAuthModal()
  const isSignup = mode === 'signup'
  const title = isSignup ? 'Create an account' : 'Welcome back'
  const subtitle = isSignup ? "Let's get your account set up" : 'Sign in to continue'
  const submitLabel = isSignup ? 'Continue' : 'Sign In'
  const switchText = isSignup ? 'Already have an account?' : "Don't have an account?"
  const switchActionText = isSignup ? 'Log in' : 'Create one'

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { fullName: '', email: '', phone: '', password: '' },
    mode: 'onTouched',
  })

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const onSubmit = async (data: FormValues) => {
    try {
      if (isSignup) {
        await signup({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          password: data.password,
        })
        // open verification modal with email
        openVerify(data.email)
        // keep modal open to show verification, or close signup as desired
      } else {
        await signin({ email: data.email, password: data.password })
        onClose()
      }
    } catch (err: unknown) {
      // try to map server validation errors to fields
      const resp = err as { response?: { data?: { errors?: Record<string, string>; message?: string } } }
      if (resp?.response?.data?.errors && typeof resp.response.data.errors === 'object') {
        for (const key of Object.keys(resp.response.data.errors)) {
          setError(key as keyof FormValues, { type: 'server', message: String(resp.response.data.errors[key]) })
        }
      } else if (resp?.response?.data?.message) {
        setError('email', { type: 'server', message: resp.response.data.message })
      }
    }
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-215 bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-130 max-h-[95vh]">

        {/* LEFT SIDE — Hero Image */}
        <div className="relative w-full md:w-[40%] min-h-55 md:min-h-full shrink-0 overflow-hidden">
          {/* Gradient overlay image with family */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              // backgroundImage: `url('/images/register-side-img.png')`,
              backgroundImage: `${isSignup ? "url('/images/register-side-img.png')" : "url('/images/login-img.png')"}`,
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

          {/* Bottom caption */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 px-6">
            <p className="text-white text-center text-sm font-medium leading-snug drop-shadow">
              Welcome to the Expat Cares
              <br />
              Create Account to explore
            </p>
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-6 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-5 pb-2 border-b border-gray-100">
            {/* Close button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <span className="text-[#1D6FD8] font-semibold text-sm">{title}</span>
            {/* spacer */}
            <span className="w-8" />
          </div>

          {/* Form body */}
          <div className="flex-1 px-6 md:px-8 py-6">
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-6 leading-tight">
              {subtitle}
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              {isSignup && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register('fullName', { required: 'Full name is required' })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#1D6FD8] focus:ring-2 focus:ring-[#1D6FD8]/10 transition-all"
                  />
                  {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' } })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#1D6FD8] focus:ring-2 focus:ring-[#1D6FD8]/10 transition-all"
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              {isSignup && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Phone No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    {...register('phone', { required: 'Phone is required', pattern: { value: /^[0-9]{6,15}$/, message: 'Enter a valid phone number' } })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#1D6FD8] focus:ring-2 focus:ring-[#1D6FD8]/10 transition-all"
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pr-11 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#1D6FD8] focus:ring-2 focus:ring-[#1D6FD8]/10 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#1D6FD8] hover:bg-[#1559b8] active:bg-[#1045a0] text-white font-semibold text-sm py-3 rounded-full cursor-pointer transition-colors duration-200 mt-1 disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Please wait...' : submitLabel}
              </button>
            </form>

            {/* Sign in with */}
            <div className="mt-5">
              <p className="text-center text-sm text-gray-500 mb-3">
                {isSignup ? 'Sign in With' : 'Continue with'}
              </p>
              <div className="flex items-center justify-center gap-5">
                {/* Facebook */}
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </button>
                {/* Google */}
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </button>
                {/* Apple */}
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <svg width="18" height="22" viewBox="0 0 814 1000" fill="#000">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-194.3 127.4-297.5 252.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
                  </svg>
                </button>
              </div>

              {/* Terms */}
              <p className="text-center text-[11px] text-gray-400 mt-4 leading-relaxed px-4">
                {isSignup
                  ? 'By creating an account using email, Google or Apple, I agree to the '
                  : 'By signing in using email, Google or Apple, I agree to the '}
                <a href="#" className="text-[#1D6FD8] cursor-pointer hover:underline">Terms & Conditions</a>{' '}
                and acknowledge the{' '}
                <a href="#" className="text-[#1D6FD8] cursor-pointer hover:underline">Privacy Policy</a>.
              </p>

              {/* Login link */}
              <p className="text-center text-sm text-gray-500 mt-3">
                {switchText}{' '}
                <button
                  type="button"
                  onClick={onSwitchMode}
                  className="text-[#1D6FD8] font-semibold cursor-pointer hover:underline"
                >
                  {switchActionText}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
