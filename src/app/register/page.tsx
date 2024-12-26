import Register from '@/components/ui/register/Register'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Регистрация'
}

export default function RegisterPage() {
	return (
		<Register />
  )
}
