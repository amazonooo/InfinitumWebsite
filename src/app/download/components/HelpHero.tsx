'use client'

import Heading from '@/components/ui/Heading'
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa6'
import Faq from './Faq'
import { Button } from '@/components/ui/button'

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
			<div className='hidden bg-main-black h-[920px] xl:block bg-[url(/download-hero.jpg)] bg-no-repeat bg-cover bg-center w-full relative'>
				<div className='absolute bottom-[313px] px-[360px]'>
					<Heading
						title={'Установить лаунчер'}
						className='text-6xl font-bold'
					/>
					<div className='flex flex-col md:flex-row gap-6 items-center mt-8'>
						<Button
							className='py-10 flex items-center gap-x-1.5'
							size={'lg'}
							onClick={() => handleScrollToSec('macOS')}
						>
							MacOS
							<FaApple size={20} className='mb-1' />
						</Button>
						<Button
							className='py-10 flex items-center gap-x-1.5'
							size={'lg'}
							onClick={() => handleScrollToSec('macOS')}
						>
							Windows
							<FaWindows size={20} />
						</Button>
						<Button
							className='py-10 flex items-center gap-x-1.5'
							size={'lg'}
							onClick={() => handleScrollToSec('macOS')}
						>
							Linux
							<FaLinux size={20} />
						</Button>
					</div>
				</div>

				<div className='absolute bottom-12 left-1/2 -translate-x-1/2'>
					<Heading
						title={'Инструкция по установке'}
						className='text-6xl font-bold'
					/>
				</div>
			</div>

			<div className='max-w-[1440px] mx-auto px-5 sm:px-10 xl:block items-center justify-center flex flex-col'>
				<Heading
					title={'Инструкция по установке'}
					className='block xl:hidden text-4xl md:text-6xl font-semibold mt-16'
				/>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-x-7 gap-y-6 pt-8'>
					<div
						id='macOS'
						className='bg-main-black border border-white/20 px-7 py-10 max-w-[396px] flex flex-col rounded-lg'
					>
						<h2 className='flex items-center gap-x-2.5 Welcome-text text-center text-2xl mb-10'>
							MacOS
							<FaApple size={27} className='text-primary-pink mb-1.5' />
						</h2>
						<ul className='flex flex-col gap-y-4'>
							<li>
								1. <span>Скачай образ, нажав на кнопку “скачать на macOS”</span>
							</li>
							<li>
								2.{' '}
								<span>
									Запустите его и установите лаунчер как любое другое
									приложение.
								</span>
							</li>
						</ul>
					</div>
					<div
						id='windows'
						className='bg-main-black border border-white/20 px-7 py-10 max-w-[396px] flex flex-col rounded-lg'
					>
						<h2 className='flex items-center gap-x-2.5 Welcome-text text-center text-2xl mb-10'>
							Windows
							<FaWindows size={27} className='text-primary-pink mb-1' />
						</h2>
						<ul className='flex flex-col gap-y-4'>
							<li>1. Скачай установщик для Windows</li>
							<li>2. Запустите и следуйте инструкциям</li>
						</ul>
					</div>
					<div
						id='linux'
						className='bg-main-black border border-white/20 px-7 py-10 max-w-[396px] flex flex-col rounded-lg'
					>
						<h2 className='flex items-center gap-x-2.5 Welcome-text text-center text-2xl mb-10'>
							Linux
							<FaLinux size={27} className='text-primary-pink mb-1' />
						</h2>
						<ul className='flex flex-col gap-y-4'>
							<li>1. Откройте терминал и скачайте образ</li>
							<li>2. Установите, следуя инструкции на экране</li>
						</ul>
					</div>
				</div>

				<Faq />
			</div>
		</div>
	)
}
