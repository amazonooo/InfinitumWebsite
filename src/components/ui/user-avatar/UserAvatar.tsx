'use client'

import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { FaEdit } from 'react-icons/fa'
import { Skeleton } from '../skeleton'
import { useProfileData } from '@/hooks/useProfileData'

interface UserAvatarProps {
	defaultAvatar?: string
}

const UserAvatar: React.FC<UserAvatarProps> = ({
	defaultAvatar = '/default-ava.jpg',
}) => {
	const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const savedAvatar = localStorage.getItem('avatarUrl')
		setAvatarUrl(savedAvatar || defaultAvatar)
		setIsLoading(false)
	}, [defaultAvatar])

	const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()

			reader.onload = () => {
				const base64 = reader.result as string
				const image = new Image()

				image.src = base64
				image.onload = () => {
					if (image.width === image.height && image.width <= 512) {
						setAvatarUrl(base64)
						localStorage.setItem('avatarUrl', base64)
					} else {
						toast.error('Некорректное разрешение')
					}
				}
			}

			reader.readAsDataURL(file)
		}
	}

	const { userProfile } = useProfileData()

	return (
		<div className='relative user-avatar text-center group'>
			<div className='absolute top-0 left-0 w-full h-full transition-all duration-300 opacity-0 bg-black/50 group-hover:opacity-100' />
			{isLoading ? (
				<Skeleton className='rounded-lg w-28 h-28' />
			) : (
				<img
					src={userProfile?.user.avatarUrl || 'default-ava.jpg'}
					alt='user-avatar'
					className='rounded-lg w-28 h-28 border-2 border-primary-pink shadow-md'
				/>
			)}
			<div>
				<input
					type='file'
					accept='image/*,image/gif'
					id='avatar-upload'
					onChange={handleAvatarChange}
					className='hidden'
				/>
				<label
					htmlFor='avatar-upload'
					className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 cursor-pointer bg-[#09090B] border border-white/20 px-2 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300'
				>
					<FaEdit />
				</label>
			</div>
		</div>
	)
}

export default UserAvatar
