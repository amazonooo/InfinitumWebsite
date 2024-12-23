import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { userService } from '@/services/user.service'
import { IPlayerServerStats } from '@/types/user.types'

export const metadata: Metadata = {
  title: 'Profile',
  ...NO_INDEX_PAGE
}

async function getServerSideProps() {
	try {
		const playerStats = await userService.getUserProfile()

		return {
			props: { playerStats }
		}
	} catch (error) {
		console.log('Ошибка загрузки профиля', error)

		return {
			props: { playerStats: null }
		}
	}
}

export default function ProfilePage({ playerStats }: { playerStats: IPlayerServerStats }) {
  return (
		<section className='h-full w-full pt-24 flex items-center justify-center'>
			<div className='flex flex-col isolate z-[10] ml-auto mr-auto'>
				{/* <GeneralMain playerStats={playerStats} /> */}
			</div>
		</section>
	)
}