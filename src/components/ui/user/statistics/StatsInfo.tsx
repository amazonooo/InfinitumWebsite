import { useProfileData } from '@/hooks/useProfileData'
import { Skeleton } from '../../skeleton'

export default function StatsInfo() {
  const { userProfile, isLoading } = useProfileData()

  return (
		<>
			<div className='mt-8 border-b border-b-white/20 py-3'>
				<div className='flex items-center justify-between w-full'>
					<h2>Игровое время:</h2>
					{isLoading ? (
						<Skeleton className='h-2 w-12 rounded-lg' />
					) : (
						<h2 className='Welcome-text font-bold'>
							{userProfile?.stats[0].playtime || '0'}
						</h2>
					)}
				</div>
			</div>
			<div className='mt-2 border-b border-b-white/20 py-3'>
				<div className='flex items-center justify-between w-full'>
					<h2>Убийства:</h2>
					{isLoading ? (
						<Skeleton className='h-2 w-12 rounded-lg' />
					) : (
						<h2 className='Welcome-text font-bold'>
							{userProfile?.stats[0].kills || '0'}
						</h2>
					)}
				</div>
			</div>
			<div className='mt-2 border-b border-b-white/20 py-3'>
				<div className='flex items-center justify-between w-full'>
					<h2>Твои смерти:</h2>
					{isLoading ? (
						<Skeleton className='h-2 w-12 rounded-lg' />
					) : (
						<h2 className='Welcome-text font-bold'>
							{userProfile?.stats[0].deaths || '0'}
						</h2>
					)}
				</div>
			</div>
			<div className='mt-2 border-b border-b-white/20 py-3'>
				<div className='flex items-center justify-between w-full'>
					<h2>Убитые мобы:</h2>
					{isLoading ? (
						<Skeleton className='h-2 w-12 rounded-lg' />
					) : (
						<h2 className='Welcome-text font-bold'>
							{userProfile?.stats[0].killedMobs || '0'}
						</h2>
					)}
				</div>
			</div>
			<div className='mt-2 border-b border-b-white/20 py-3'>
				<div className='flex items-center justify-between w-full'>
					<h2>Сообщени в чате:</h2>
					{isLoading ? (
						<Skeleton className='h-2 w-12 rounded-lg' />
					) : (
						<h2 className='Welcome-text font-bold'>
							{userProfile?.stats[0].messagesCount || '0'}
						</h2>
					)}
				</div>
			</div>
		</>
	)
}