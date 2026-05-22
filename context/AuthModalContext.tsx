'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type AuthModalType = 'signup' | 'signin' | null

interface AuthModalContextValue {
  activeModal: AuthModalType
  openSignup: () => void
  openSignin: () => void
  closeModal: () => void
}

const AuthModalContext = createContext<AuthModalContextValue | undefined>(undefined)

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<AuthModalType>(null)

  return (
    <AuthModalContext.Provider
      value={{
        activeModal,
        openSignup: () => setActiveModal('signup'),
        openSignin: () => setActiveModal('signin'),
        closeModal: () => setActiveModal(null),
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
