import { Award, Gamepad } from 'lucide-react'
import { useProfileData } from '@/hooks/useProfileData'
import StatsInfo from './StatsInfo'
import Personalization from '../../personalization/Personalization'
import ServerSelect from './ServerSelect'
export default function Statistics() {
	const { userProfile } = useProfileData()

	return (
		<>
			<div className='block lg:hidden mb-16'>
				<Personalization />
			</div>
			<div className='w-full flex flex-col items-center justify-between'>
				<div className='flex items-center justify-between w-full'>
					<Gamepad size={30} />
					<ServerSelect />
					<Award size={30} />
				</div>
				<div className='mt-12 Welcome-box flex flex-col w-[290px] md:w-[420px] px-6 py-4 '>
					<div className='text-center'>
						<h2 className='text-xl mb-2'>Текущий сервер</h2>
						<h1 className='text-3xl font-bold Welcome-text'>
							{userProfile?.stats.clientTitle || ''}
						</h1>
					</div>
					<StatsInfo />
				</div>
			</div>
		</>
	)
}
