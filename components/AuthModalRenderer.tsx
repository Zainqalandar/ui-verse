'use client'

import SignupModal from '@/components/SignupModal'
import { useAuthModal } from '@/context/AuthModalContext'

export default function AuthModalRenderer() {
  const { activeModal, closeModal, openSignup, openSignin } = useAuthModal()

  return (
    <>
      <SignupModal
        isOpen={activeModal === 'signup'}
        mode="signup"
        onClose={closeModal}
        onSwitchMode={openSignin}
      />
      <SignupModal
        isOpen={activeModal === 'signin'}
        mode="signin"
        onClose={closeModal}
        onSwitchMode={openSignup}
      />
    </>
  )
}
