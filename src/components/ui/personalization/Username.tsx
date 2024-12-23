import { useProfileData } from '@/hooks/useProfileData'
import { fetchUserDatas } from '@/utils/fetchUserDatas'

export default function Username() {
  const { userProfile } = useProfileData()

  return (
    <h1 className='text-2xl font-bold text-white mb-6'>{userProfile?.user.username || 'Гость'}</h1>
  )
}