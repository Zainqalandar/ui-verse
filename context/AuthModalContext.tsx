'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type AuthModalType = 'signup' | 'signin' | 'verify' | null

interface AuthModalContextValue {
  activeModal: AuthModalType
  openSignup: () => void
  openSignin: () => void
  openVerify: (email?: string) => void
  verifyEmail?: string | null
  closeModal: () => void
}

const AuthModalContext = createContext<AuthModalContextValue | undefined>(undefined)

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<AuthModalType>(null)
  const [verifyEmailState, setVerifyEmailState] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const storedEmail = localStorage.getItem('verifyEmail')
    if (storedEmail) {
      setVerifyEmailState(storedEmail)
    }
  }, [])

  return (
    <AuthModalContext.Provider
      value={{
        activeModal,
        openSignup: () => setActiveModal('signup'),
        openSignin: () => setActiveModal('signin'),
        openVerify: (email?: string) => {
          if (email) {
            setVerifyEmailState(email)
            localStorage.setItem('verifyEmail', email)
          }
          setActiveModal('verify')
        },
        verifyEmail: verifyEmailState,
        closeModal: () => {
          setActiveModal(null)
          setVerifyEmailState(null)
          if (typeof window !== 'undefined') {
            localStorage.removeItem('verifyEmail')
          }
        },
      }}
    >
      {children}
    </AuthModalContext.Provider>
  )
}

export function useAuthModal() {
  const context = useContext(AuthModalContext)
  if (!context) {
    throw new Error('useAuthModal must be used within AuthModalProvider')
  }
  return context
}
