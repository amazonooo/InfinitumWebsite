'use client'

import { FC, Suspense } from 'react'
import { Button } from '../button/Button'
import { GrInstallOption } from 'react-icons/gr'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Steve from '../../../../public/Steve'

const Personalization: FC = () => {
  return (
		<div className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'>
			<div className='py-7 px-3 md:px-5 lg:px-7 xl:px-8'>
				<div className='text-center'>
					<h1 className='Welcome-text text-3xl xl:text-4xl'>Персонализация</h1>
					<div className='flex flex-col gap-y-4 my-9'>
						<div className='flex w-full gap-x-4 items-center justify-center'>
							<Button
								type='file'
								className='text-base md:text-lg w-full whitespace-nowrap'
							>
								Загрузить скин
							</Button>
							<button>
								<GrInstallOption className='text-2xl hover:text-[#cbacf9] transition-colors duration-300' />
							</button>
						</div>
						<div className='flex w-full gap-x-4 items-center justify-center'>
							<Button
								type='file'
								className='text-base md:text-lg w-full whitespace-nowrap'
							>
								Загрузить плащ
							</Button>
							<button>
								<GrInstallOption className='text-2xl hover:text-[#cbacf9] transition-colors duration-300' />
							</button>
						</div>
					</div>
					<Canvas>
						<ambientLight />
						<OrbitControls />
						<Suspense fallback={null}>
							<Steve />
						</Suspense>
						<Environment preset='sunset' />
					</Canvas>
				</div>
			</div>
		</div>
	)
}

export default Personalization