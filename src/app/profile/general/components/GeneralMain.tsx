import PlayerInfo from './PlayerInfo'
import { Button } from '@/components/ui/button'
import Transactions from './Transactions'
import ServerStatistics from './ServerStatistics'
import { IPlayerServerStats } from '@/types/user.types'
import LastSession from './LastSession'
import { userService } from '@/services/user.service'

interface IGeneralMain {
	playerStats: IPlayerServerStats
}

export default function GeneralMain({ playerStats }: IGeneralMain) {
	return (
		<section>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-y-20 lg:gap-x-10'>
				<div className='lg:col-span-1 flex items-center flex-col'>
					<PlayerInfo />

					<div className='bg-main-black border border-white/[0.2] rounded-lg mt-10 w-[310px] sm:w-[370px] md:w-[350px] lg:w-[440px]'>
						<div className='p-6 text-center'>
							<h2 className='Welcome-text text-lg md:text-xl lg:text-2xl mb-4'>
								Текущий баланс
							</h2>
							<h1 className='text-3xl md:text-4xl lg:text-5xl mb-10'>
								{playerStats?.money || ''}
							</h1>
							<Button>Пополнить</Button>
						</div>
					</div>

					<ServerStatistics {...playerStats} />
				</div>

				<div className='col-span-1 sm:col-span-2'>
					<div className='bg-main-black border border-white/[0.2] rounded-lg'>
						<div className='py-6 px-12'>
							<h1 className='Welcome-text text-3xl md:text-4xl lg:text-5xl text-center mb-10'>
								История пополнений
							</h1>
							<ul className='px-6 flex items-center justify-between mb-6'>
								<li>Дата и время</li>
								<li>Способ пополнения</li>
								<li>Внесено</li>
							</ul>
							<Transactions />
						</div>
					</div>

					<LastSession lastLogin={playerStats?.lastLogin || ''} />
				</div>
			</div>
		</section>
	)
}