import { Button } from '@/components/ui/button'
import { IUser } from '@/types/user.types'

export default function Balance(balance: any) {
  return (
		<div className='bg-main-black border border-white/[0.2] rounded-lg mt-10 w-[310px] sm:w-[370px] md:w-[350px] lg:w-[440px]'>
			<div className='p-6 text-center'>
				<h2 className='Welcome-text text-lg md:text-xl lg:text-2xl mb-4'>
					Текущий баланс
				</h2>
				<h1 className='text-3xl md:text-4xl lg:text-5xl mb-10'>{balance}</h1>
				<Button>Пополнить</Button>
			</div>
		</div>
	)
}