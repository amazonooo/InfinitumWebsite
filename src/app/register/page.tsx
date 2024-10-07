'use client'

import { Auth } from '@/components/ui/auth/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function RegisterPage() {
	const queryClient = new QueryClient

	return (
		<QueryClientProvider client={queryClient}>
			<Auth type='Создать аккаунт' />
		</QueryClientProvider>
  )
}
