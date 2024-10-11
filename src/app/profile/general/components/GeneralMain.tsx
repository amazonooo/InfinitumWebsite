import PlayerInfo from './PlayerInfo'
import { Button } from '@/components/ui/button'
import Transactions from './Transactions'
import { Charts } from './Charts'
import PrivilegeMain from '../../privilege/components/PrivilegeMain'
import ServerStatistics from './ServerStatistics'
import { GetStaticProps } from 'next'
import { userService } from '@/services/user.service'
import { IPlayerServerStats } from '@/types/user.types'
import LastSession from './LastSession'

export async function getStaticProps() {
	const playerStats = await userService.getUserProfile()

	return {
		props: {
			playerStats
		},
		revalidate: 30
	}
}

export async function getStaticPaths() {
	const playerPaths = await userService.getUserProfile()

	const paths = playerPaths.map(path => ({
		params: { id: path.id },
	}))

	return { paths, fallback: 'blocking' }
}

export default function GeneralMain(playerStats: IPlayerServerStats) {
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
								{playerStats.money}
							</h1>
							<Button>Пополнить</Button>
						</div>
					</div>

					<ServerStatistics lastLogin={playerStats.lastLogin} playtime={playerStats.playtime} kills={playerStats.kills} killedMobs={playerStats.killedMobs} deaths={playerStats.deaths} messagesCount={playerStats.messagesCount} nickname={''} muted={false} mutedAt={''} muteEnds={''} muteReason={''} donateRole={''} role={''} money={0} serverId={''} clientId={''} clientTitle={''} />
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

					<LastSession lastLogin={playerStats.lastLogin} />

					{/* <PrivilegeMain /> */}
				</div>
			</div>
		</section>
	)
}