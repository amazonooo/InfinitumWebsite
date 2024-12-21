import { Auth } from '@/components/ui/auth/Auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Регистрация'
}

export default function RegisterPage() {
	return (
		<Auth type='Создать аккаунт' />
  )
}
