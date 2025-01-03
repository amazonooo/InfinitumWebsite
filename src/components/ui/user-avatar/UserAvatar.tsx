'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import { toast } from 'react-toastify'
import { FaEdit } from 'react-icons/fa'
import { Skeleton } from '../skeleton'
import { useProfileData } from '@/hooks/useProfileData'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface UserAvatarProps {
	defaultAvatar?: string
}

const UserAvatar: React.FC<UserAvatarProps> = ({
	defaultAvatar = '/default-avatar.png',
}) => {
	const { userProfile, isLoading } = useProfileData()
	const queryClient = useQueryClient()
	const [newAvatar, setNewAvatar] = useState<File | null>(null)

	const mutation = useMutation({
		mutationKey: ['updateAvatar'],
		mutationFn: async (avatarUrl: string) => {
			if(!userProfile) return
			const updatedProfile = {...userProfile, avatar: avatarUrl}
			await queryClient.setQueryData(['userProfile'], updatedProfile)
			return updatedProfile
		}
	})

	const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
		if(event.target.files && event.target.files[0]) {
			const file = event.target.files[0]
			setNewAvatar(file)

			const formData = new FormData()
			formData.append('avatar', file)

			try {
				const avatarUrl = URL.createObjectURL(file)
				mutation.mutate(avatarUrl)
			} catch (error) {
				toast.error('Ошибка при загрузке аватара')
			}
		}
	}

	return (
		<div className='relative user-avatar text-center group'>
			<div className='absolute top-0 left-0 w-full h-full transition-all duration-300 opacity-0 bg-black/50 group-hover:opacity-100' />
			{isLoading || !userProfile ? (
				<Skeleton className='rounded-lg w-28 h-28' />
			) : (
				<img
					src={userProfile?.user.avatarUrl || defaultAvatar}
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
