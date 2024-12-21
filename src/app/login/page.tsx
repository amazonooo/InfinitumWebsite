import { Auth } from '@/components/ui/auth/Auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Вход'
}

export default function LoginPage() {
  return (
    <Auth type='Войти' />
  )
}