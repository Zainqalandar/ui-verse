'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

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

  return (
    <AuthModalContext.Provider
      value={{
        activeModal,
        openSignup: () => setActiveModal('signup'),
        openSignin: () => setActiveModal('signin'),
        openVerify: (email?: string) => {
          if (email) setVerifyEmailState(email)
          setActiveModal('verify')
        },
        verifyEmail: verifyEmailState,
        closeModal: () => {
          setActiveModal(null)
          setVerifyEmailState(null)
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
