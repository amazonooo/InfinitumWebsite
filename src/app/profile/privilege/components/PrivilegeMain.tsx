import { Button } from '@/components/ui/button/Button'
import Image from 'next/image'
import { FC } from 'react'
import Period from './Period'
import SelectServer from '@/components/ui/select/SelectServer'

const PrivilegeMain: FC = () => {
  return (
		<section className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'>
			<div className='p-6'>
				<h1 className='text-center text-2xl sm:text-3xl lg:text-4xl'>
					Приобрести привилегию
				</h1>
				<div className='mt-8 flex flex-col items-center justify-center gap-y-4'>
					<h2 className='text-lg text-center'>
						Выбери сервер, где хотите приобрести{' '}
						<span className='text-[#cbacf9]'>привилегию</span>
					</h2>
					<SelectServer />
				</div>
				<div className='mt-12 flex justify-center'>
					<ul className='grid grid-cols-2 sm:flex gap-x-8'>
						<li className='flex flex-col items-center gap-y-1.5 cursor-pointer group'>
							<Image
								src={'/server-1.svg'}
								alt='donate'
								width={30}
								height={30}
								className='group-hover:-translate-y-1.5 transition-transform duration-300'
							/>
							<span>ВИП</span>
						</li>
						<li className='flex flex-col items-center gap-y-1.5 cursor-pointer group'>
							<Image
								src={'/server-2.svg'}
								alt='donate'
								width={30}
								height={30}
								className='group-hover:-translate-y-1.5 transition-transform duration-300'
							/>
							<span>Премиум</span>
						</li>
						<li className='flex flex-col items-center gap-y-1.5 cursor-pointer group'>
							<Image
								src={'/server-1.svg'}
								alt='donate'
								width={30}
								height={30}
								className='group-hover:-translate-y-1.5 transition-transform duration-300'
							/>
							<span>Делюкс</span>
						</li>
						<li className='flex flex-col items-center gap-y-1.5 cursor-pointer group'>
							<Image
								src={'/server-2.svg'}
								alt='donate'
								width={30}
								height={30}
								className='group-hover:-translate-y-1.5 transition-transform duration-300'
							/>
							<span>Легенда</span>
						</li>
					</ul>
				</div>

				<div className='flex justify-center mt-10'>
					<Period />
				</div>
				<div className='text-center mt-6'>
					<Button>Приобрести за 99 руб.</Button>
				</div>
			</div>
		</section>
	)
}

export default PrivilegeMain