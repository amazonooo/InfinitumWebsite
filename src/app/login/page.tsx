import Login from '@/components/ui/login/Login'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Вход'
}

export default function LoginPage() {
  return (
    <Login />
  )
}