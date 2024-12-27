import type { Metadata } from 'next'
import Confirm from './components/Confirm'

export const metadata: Metadata = {
  title: 'Новый пароль',
}

export default function Page() {
  return <Confirm />
}
