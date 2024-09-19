'use client'

import Image from 'next/image'
import { FC, useState } from 'react'
import Period from './Period'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/Select"
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import { Gem, Rocket } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const PrivilegeMain: FC = () => {
	const isDesktop = useMediaQuery({ minWidth: 1280 })
	const [value, setValue] = useState('99')

  return (
		<LazyMotion features={domAnimation}>
			<m.section initial='hidden' animate='visible'>
				<m.div
					variants={slideInFromLeft(0.3)}
					className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'
				>
					<div className='hidden md:block absolute md:left-8 lg:left-10 xl:left-20 2xl:left-32 top-28'>
						<Rocket size={isDesktop ? 70 : 50} className='text-[#cbacf9]' />
					</div>
					<div className='hidden md:block absolute md:right-8 lg:right-10 xl:right-20 2xl:right-32 bottom-32'>
						<Gem size={isDesktop ? 65 : 45} className='text-emerald-300' />
					</div>
					<div className='p-6'>
						<h1 className='text-center text-2xl sm:text-3xl lg:text-4xl'>
							Приобрести привилегию
						</h1>
						<div className='mt-8 flex flex-col items-center justify-center gap-y-4'>
							<h2 className='text-lg text-center'>
								Выбери сервер, где хотите приобрести{' '}
								<span className='text-[#cbacf9]'>привилегию</span>
							</h2>
							<Select>
								<SelectTrigger className='w-[180px]'>
									<SelectValue placeholder='Выберите сервер' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Выберите сервер</SelectLabel>
										<SelectItem value='server1'>server1</SelectItem>
										<SelectItem value='server2'>server2</SelectItem>
										<SelectItem value='server3'>server3</SelectItem>
										<SelectItem value='server4'>server4</SelectItem>
										<SelectItem value='server5'>server5</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
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
					</div>
				</m.div>
			</m.section>
		</LazyMotion>
	)
}

export default PrivilegeMain