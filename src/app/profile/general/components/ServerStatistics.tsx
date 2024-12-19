import { IPlayerServerStats } from '@/types/user.types'

export default function ServerStatistics({ serverId, playtime, kills, deaths, killedMobs, messagesCount, lastLogin, money }: { money: number, lastLogin: string, serverId: string, playtime: string, kills: string, deaths: string, killedMobs: string, messagesCount: string } ) {
  return (
		<div className='bg-main-black border border-white/[0.2] rounded-lg mt-10 w-[310px] sm:w-[370px] md:w-[350px] lg:w-[440px]'>
			<div className='p-6'>
				<h2 className='text-center text-lg md:text-xl lg:text-2xl mb-4'>
					Текущий сервер
				</h2>
				<h1 className='text-center text-primary-pink text-3xl md:text-4xl lg:text-5xl mb-10'>
					{serverId}
				</h1>
				<div className='flex items-center justify-between'>
					<h2 className='text-base md:text-lg'>игровое время:</h2>
					<p className='text-base md:text-lg text-primary-pink'>
						{playtime}
					</p>
				</div>
				<div className='flex items-center justify-between'>
					<h2 className='text-base md:text-lg'>убийства</h2>
					<p className='text-base md:text-lg text-primary-pink'>
						{kills}
					</p>
				</div>
				<div className='flex items-center justify-between'>
					<h2 className='text-base md:text-lg'>твои смерти:</h2>
					<p className='text-base md:text-lg text-primary-pink'>
						{deaths}
					</p>
				</div>
				{money}
				<div className='flex items-center justify-between'>
					<h2 className='text-base md:text-lg text-primary-pink'>убитые мобы:</h2>
					<p className='text-base md:text-lg'>{killedMobs}</p>
				</div>
				<div className='flex items-center justify-between'>
					<h2 className='text-base md:text-lg text-primary-pink'>
						сломанные блоки:
					</h2>
					<p className='text-base md:text-lg'>209 529</p>
				</div>
				<div className='flex items-center justify-between'>
					<h2 className='text-base md:text-lg text-primary-pink'>твои блоки:</h2>
					<p className='text-base md:text-lg'>12 209 529</p>
				</div>
				<div className='flex items-center justify-between'>
					<h2 className='text-base md:text-lg text-primary-pink'>
						сообщения в чате:
					</h2>
					<p className='text-base md:text-lg'>
            {messagesCount}
          </p>
				</div>
			</div>
		</div>
	)
}