import api from '@/lib/axios'
import { toast } from 'sonner'

type SignupPayload = {
  fullName: string
  email: string
  phone: string
  countryCode: string
  password: string
}

type SigninPayload = {
  email: string
  password: string
}

export async function signup(payload: SignupPayload) {
  try {
    const body = {
      name: payload.fullName,
      email: payload.email,
      phone: `${payload.countryCode}${payload.phone}`,
      password: payload.password,
    }
    const res = await api.post('/patient/register', body)
    toast.success('Signup successful — verification code sent')
    return res.data
  } catch (err: any) {
    const message = err?.response?.data?.message || err.message || 'Signup failed'
    toast.error(message)
    throw err
  }
}

export async function signin(payload: SigninPayload) {
  try {
    const res = await api.post('/user/login', payload)
    // try to persist token if returned
    const token = res?.data?.token || res?.data?.accessToken
    if (typeof window !== 'undefined' && token) {
      localStorage.setItem('token', token)
    }
    toast.success('Signed in successfully')
    return res.data
  } catch (err: any) {
    const message = err?.response?.data?.message || err.message || 'Sign in failed'
    toast.error(message)
    throw err
  }
}

export async function verifyEmail(payload: { email: string; code: string }) {
  try {
    const res = await api.post('/verifyEmail', payload)
    toast.success('Email verified successfully')
    return res.data
  } catch (err: any) {
    const message = err?.response?.data?.message || err.message || 'Verification failed'
    toast.error(message)
    throw err
  }
}
