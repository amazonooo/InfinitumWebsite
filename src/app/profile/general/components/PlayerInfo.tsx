'use client'

import { FC, Suspense, useEffect, useState } from 'react'
import Steve from '../../../../../public/Steve'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Image from 'next/image'

export default function PlayerInfo() {
  return (
		<div className='bg-main-black rounded-lg border border-white/[0.2] relative w-[310px] sm:w-[370px] md:w-[350px] lg:w-[440px]'>
			<div className='absolute -top-14 left-1/2 -translate-x-1/2 rounded-md'>
				<Image
					src={'/ava.jpg'}
					alt='ava'
					width={150}
					height={150}
					className='rounded-md'
				/>
			</div>
			<div className='absolute right-8 top-7 sm:right-14'>
				<Image src={'/server-1.svg'} alt='achive' width={30} height={30} />
			</div>
			<div className='text-center mt-36'>
				<p className='Welcome-text text-2xl md:text-3xl lg:text-4xl'>player</p>
			</div>
			<div className='mt-8 mb-12'>
				<Canvas camera={{ position: [1, 3, 40], fov: 50 }}>
					<OrbitControls />
					<Suspense fallback={null}>
						<Steve skinUrl={''} animation={''} />
					</Suspense>
					<Environment preset='sunset' />
				</Canvas>
			</div>
		</div>
	)
}