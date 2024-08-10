import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Profile',
	...NO_INDEX_PAGE,
}

export default function ProfilePage() {
	return <div></div>
}
