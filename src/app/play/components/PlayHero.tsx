'use client'

import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'
import Heading from '@/components/ui/Heading'
import Image from 'next/image'
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa6'
import Faq from './Faq'

export default function PlayHero() {
	const handleScrollToSec = (sec: any) => {
		const section = document.getElementById(sec)

		if(section) {
			window.scrollTo({
				top: section.offsetTop,
				behavior: 'smooth'
			})
		}
	}

	return (
		<div className='w-full h-full'>
			<div className='bg-main-black h-[920px] w-full relative px-[100px]'>
				<div className='absolute bottom-[313px]'>
					<Heading
						title={'Установить лаунчер'}
						className='text-6xl font-bold'
					/>
					<div className='flex flex-col md:flex-row gap-6 items-center mt-8'>
						<button
							onClick={() => handleScrollToSec('macOS')}
							className='bg-primary-purple rounded-lg flex items-center py-5 px-9 gap-x-2.5 cursor-pointer hover:scale-105 transition-transform duration-300'
						>
							MacOS
							<FaApple size={20} />
						</button>
						<button
							onClick={() => handleScrollToSec('macOS')}
							className='bg-primary-purple rounded-lg flex items-center py-5 px-9 gap-x-2.5 cursor-pointer hover:scale-105 transition-transform duration-300'
						>
							Windows
							<FaWindows size={20} />
						</button>
						<button
							onClick={() => handleScrollToSec('macOS')}
							className='bg-primary-purple rounded-lg flex items-center py-5 px-9 gap-x-2.5 cursor-pointer hover:scale-105 transition-transform duration-300'
						>
							Linux
							<FaLinux size={20} />
						</button>
					</div>
				</div>

				<div className='absolute bottom-12 left-1/2 -translate-x-1/2'>
					<Heading
						title={'Инструкция по установке'}
						className='text-6xl font-bold'
					/>
				</div>
			</div>

			<div className='flex items-center justify-center gap-x-7'>
				<div
					id='macOS'
					className='bg-main-black border border-white/20 px-7 py-10 max-w-[396px] flex flex-col items-center justify-center rounded-lg'
				>
					<h2 className='flex items-center gap-x-2.5 Welcome-text text-center text-2xl mb-10'>
						MacOS
						<FaApple size={27} className='text-primary-pink' />
					</h2>
					<ul className='flex flex-col gap-y-4'>
						<li>
							1. <span>Скачай образ, нажав на кнопку “скачать на macOS”</span>
						</li>
						<li>
							2.{' '}
							<span>
								Запустите его и установите лаунчер как любое другое приложение.
							</span>
						</li>
					</ul>
				</div>
				<div
					id='windows'
					className='bg-main-black border border-white/20 px-7 py-10 max-w-[396px] flex flex-col items-center justify-center rounded-lg'
				>
					<h2 className='flex items-center gap-x-2.5 Welcome-text text-center text-2xl mb-10'>
						Windows
						<FaWindows size={27} className='text-primary-pink' />
					</h2>
					<ul className='flex flex-col gap-y-4'>
						<li>1. Скачай установщик для Windows</li>
						<li>2. Запустите и следуйте инструкциям</li>
					</ul>
				</div>
				<div
					id='linux'
					className='bg-main-black border border-white/20 px-7 py-10 max-w-[396px] flex flex-col items-center justify-center rounded-lg'
				>
					<h2 className='flex items-center gap-x-2.5 Welcome-text text-center text-2xl mb-10'>
						Linux
						<FaLinux size={27} className='text-primary-pink' />
					</h2>
					<ul className='flex flex-col gap-y-4'>
						<li>1. Откройте терминал и скачайте образ</li>
						<li>2. Установите, следуя инструкции на экране</li>
					</ul>
				</div>
			</div>

			<Faq />
		</div>
	)
}
