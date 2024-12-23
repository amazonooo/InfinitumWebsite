import { IPlayerServerStats } from '@/types/user.types'

export default function LastSession({ lastLogin }: any) {
	return (
		<div className='bg-main-black border border-white/[0.2] rounded-lg my-10'>
			<div className='py-6 px-12'>
				<h1 className='Welcome-text text-3xl md:text-4xl lg:text-5xl text-center mb-10'>
					Входы в профиль
				</h1>
				<h2 className='ml-6 mb-3'>Дата и время</h2>
				<div className='flex flex-col gap-y-5'>
					<div className='p-4 border border-primary-pink/60 rounded-lg flex justify-between items-center relative'>
						<p>{lastLogin}</p>
					</div>
					<div className='p-4 border border-primary-pink/60 rounded-lg flex justify-between items-center relative'>
						<p>{lastLogin}</p>
					</div>
				</div>
			</div>
		</div>
	)
}