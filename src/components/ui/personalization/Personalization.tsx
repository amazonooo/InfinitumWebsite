'use client'

import { FC, Suspense, useEffect, useState } from 'react'
import { GrInstallOption } from 'react-icons/gr'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Steve from '../../../../public/Steve'
import Model from '../../../../public/Steve'
import { Footprints, Upload, User } from 'lucide-react'
import { FaRunning } from 'react-icons/fa'
import { Button } from '../button'
import Modal from '../modal/Modal'
import { IoBodySharp } from 'react-icons/io5'
import { FaUserAstronaut } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const Personalization: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const [skinUrl, setSkinUrl] = useState<string>('')
	const [animation, setAnimation] = useState<string>('')

	useEffect(() => {
		const savedSkin = localStorage.getItem('skinUrl')
		if(savedSkin) {
			setSkinUrl(savedSkin)
		}
	}, [])

	const handleSkinChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				const base64 = reader.result as string
				setSkinUrl(base64)
				localStorage.setItem('skinUrl', base64)
			}
			reader.readAsDataURL(file)
		}
	}

	useEffect(() => {
		const savedSkin = localStorage.getItem('skinUrl')
		if (savedSkin) {
			setSkinUrl(savedSkin)
		}
	}, [])

	
  return (
		<>
			<div className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090b]'>
				<div className='py-7 px-3 md:px-5 lg:px-7 xl:px-8'>
					<div className='text-center'>
						<h1 className='Welcome-text text-3xl xl:text-4xl'>
							Персонализация
						</h1>
						<div className='mt-6 mb-9'>
							<Button className='w-full' onClick={() => setIsOpen(true)}>
								<Upload />
							</Button>
						</div>
						{/* <div className='flex flex-col gap-y-4 mt-9 mb-6'>
						<div className='flex w-full gap-x-4 items-center justify-center'>
							<input
								type='file'
								accept='image'
								onChange={handleSkinChange}
								id='skin'
								name='skin'
								className='hidden'
							/>
							<label
								htmlFor='skin'
								className='bg-primary-purple rounded-lg transition-colors duration-300 py-2 px-5 hover:bg-dark-purple cursor-pointer w-full'
							>
								<span>Загрузить скин</span>
							</label>
							<button>
								<GrInstallOption className='text-2xl hover:text-[#cbacf9] transition-colors duration-300' />
							</button>
						</div>
						<div className='flex w-full gap-x-4 items-center justify-center'>
							<input type='file' id='skin' name='skin' className='hidden' />
							<label
								htmlFor='skin'
								className='bg-primary-purple rounded-lg transition-colors duration-300 py-2 px-5 hover:bg-dark-purple cursor-pointer w-full'
							>
								<span>Загрузить плащ</span>
							</label>
							<button>
								<GrInstallOption className='text-2xl hover:text-[#cbacf9] transition-colors duration-300' />
							</button>
						</div>
					</div> */}
						<Canvas camera={{ position: [1, 3, 40], fov: 50 }}>
							<OrbitControls />
							<Suspense fallback={null}>
								<Model skinUrl={skinUrl} animation={animation} />
							</Suspense>
							<Environment preset='sunset' />
						</Canvas>
					</div>
				</div>
			</div>
			{isOpen && (
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					header={'Скин и аватарка'}
					icon={<User className='text-primary-pink' />}
				>
					<div className='px-3 py-6'>
						<div className='flex flex-col sm:flex-row justify-between items-center gap-x-3 gap-y-10'>
							<div className='flex flex-col items-center sm:border-r-2 sm:border-white/20 sm:pr-[24.8px] gap-y-4'>
								<div className='Welcome-box p-4'>
									<IoBodySharp size={22} />
								</div>
								<input
									type='file'
									accept='image'
									onChange={handleSkinChange}
									id='skin'
									name='skin'
									className='hidden'
								/>
								<label
									htmlFor='skin'
									className='border border-white/[0.2] bg-[#09090B] hover:border-primary-pink h-10 px-8 py-5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all duration-500 focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-neutral-300 cursor-pointer'
								>
									<span>Поменять скин</span>
								</label>
							</div>
							<div className='flex flex-col items-center gap-y-4'>
								<div className='Welcome-box p-4'>
									<FaUserAstronaut size={22} />
								</div>
								<Button>Поменять аву</Button>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</>
	)
}

export default Personalization