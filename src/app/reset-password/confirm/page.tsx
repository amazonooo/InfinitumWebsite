import Confirm from '@/app/reset-password/confirm/components/Confirm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Новый пароль',
}

export default function Page() {
  return <Confirm />
}
