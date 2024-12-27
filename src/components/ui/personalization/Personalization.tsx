'use client';

import { FC, Suspense, useEffect, useState } from 'react'
import Modal from '../modal/Modal';
import { Button } from '../button';
import { Upload, User } from 'lucide-react';
import { IoBodySharp } from 'react-icons/io5';
import { FaUserAstronaut } from 'react-icons/fa6';
import { toast } from 'react-toastify'
import SkinViewer from '../model/SkinViewer'
import { FaRunning, FaWalking } from 'react-icons/fa'
import { IoIosMan } from 'react-icons/io'
import UserAvatar from '../user-avatar/UserAvatar'
import Username from './Username'

const Personalization: FC = () => {
	const [skinUrl, setSkinUrl] = useState<string>('/steve.png')
	const [animation, setAnimation] = useState<
		'idle' | 'walking' | 'running'
	>('idle')

  useEffect(() => {
		const savedSkin = localStorage.getItem('skinUrl')
		if (savedSkin) setSkinUrl(savedSkin)
	}, [])

	const handleSkinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const image = new Image()
			const reader = new FileReader()

			reader.onload = () => {
				const base64 = reader.result as string
				image.src = base64

				image.onload = () => {
					if (
						(image.width === 64 || image.width === 128) &&
						image.height === image.width
					) {
						setSkinUrl(base64)
						localStorage.setItem('skinUrl', base64)
					} else {
						toast.error('Некорректный размер скина')
					}
				}
			}

			reader.readAsDataURL(file)
		}
	}

  return (
		<>
			<div className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090b]'>
				<div className='py-7 px-3 md:px-5 lg:px-7 xl:px-8'>
					<div className='absolute left-1/2 -translate-x-1/2 -top-10'>
						<UserAvatar />
					</div>
					<div className='text-center mt-20'>
						<Username />
						<div className='mb-4 flex items-center gap-5 justify-center'>
							<Button
								className={
									animation === 'idle' ? 'border border-primary-pink' : ''
								}
								size={'icon'}
								onClick={() => setAnimation('idle')}
							>
								<IoIosMan size={25} />
							</Button>
							<Button
								className={
									animation === 'walking' ? 'border border-primary-pink' : ''
								}
								size={'icon'}
								onClick={() => setAnimation('walking')}
							>
								<FaWalking size={25} />
							</Button>
							<Button
								className={
									animation === 'running' ? 'border border-primary-pink' : ''
								}
								size={'icon'}
								onClick={() => setAnimation('running')}
							>
								<FaRunning size={25} />
							</Button>
						</div>
						<div className='w-full flex items-center justify-center'>
							<SkinViewer animationState={animation} skinUrl={skinUrl} />
						</div>
						<div className='mt-4'>
							<input
								type='file'
								accept='image/*'
								onChange={handleSkinChange}
								id='skin'
								name='skin'
								className='hidden'
							/>
							<label
								htmlFor='skin'
								className='border border-white/[0.2] bg-[#09090B] hover:border-primary-pink h-10 px-8 py-5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all duration-500 focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-neutral-300 cursor-pointer'
							>
								<span>Изменить скин</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

export default Personalization;
