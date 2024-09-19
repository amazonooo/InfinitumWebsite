'use client'

import { FC, Suspense, useEffect, useState } from 'react'
import { GrInstallOption } from 'react-icons/gr'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Steve from '../../../../public/Steve'
import Model from '../../../../public/Steve'
import { Footprints } from 'lucide-react'
import { FaRunning } from 'react-icons/fa'

const Personalization: FC = () => {
	const [skinUrl, setSkinUrl] = useState<string>('')
	const [animation, setAnimation] = useState<string>('')

	useEffect(() => {
		const savedSkin = localStorage.getItem('skinUrl')
		if(savedSkin) {
			setSkinUrl(savedSkin)
		}
	}, [])

	const handleSkinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if(file) {
			const url = URL.createObjectURL(file)
			setSkinUrl(url)
			localStorage.setItem('skinUrl', url)
		}
	}	

	const handleAnimationChange = (anim:string) => {
		setAnimation(anim)
	}
	
  return (
		<div className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'>
			<div className='py-7 px-3 md:px-5 lg:px-7 xl:px-8'>
				<div className='text-center'>
					<h1 className='Welcome-text text-3xl xl:text-4xl'>Персонализация</h1>
					<div className='flex flex-col gap-y-4 mt-9 mb-6'>
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
					</div>
					<div className='flex justify-center gap-x-4 mb-12'>
						<button
							onClick={() => handleAnimationChange('Walk')}
							className='group px-5 py-2 rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'
						>
							<Footprints className='transition-all group-hover:text-[#cbacf9] group-hover:-translate-y-0.5 duration-300' />
						</button>
						<button
							onClick={() => handleAnimationChange('Run')}
							className='group px-5 py-2 rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'
						>
							<FaRunning
								className='transition-all group-hover:text-[#cbacf9] group-hover:translate-x-0.5 duration-300'
								size={20}
							/>
						</button>
					</div>
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
	)
}

export default Personalization