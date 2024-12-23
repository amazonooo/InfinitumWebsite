import { useState, useEffect } from 'react'
import { userService } from '@/services/user.service'
import { IUserProfile, IPlayerServerStats } from '@/types/user.types'

interface IFetchUserDataResponse {
  userProfile: IUserProfile | null
  userStats: IPlayerServerStats | null
  error: string | null
}

export function useProfileData() {
  const [profileData, setProfileData] = useState<IFetchUserDataResponse>({
    userProfile: null,
    userStats: null,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Проверка, чтобы избежать лишних запросов
        if (profileData.userProfile) return // Если профиль уже загружен, не делаем запрос

        const userProfile = await userService.getUserProfile()
        const userStats = userProfile?.stats?.[0] || null

        setProfileData({
          userProfile,
          userStats,
          error: null,
        })
      } catch (error) {
        console.error('Failed to fetch user profile:', error)

        setProfileData({
          userProfile: null,
          userStats: null,
          error: error instanceof Error ? error.message : 'Unknown error',
        })
      }
    }

    fetchData()
  }, [profileData.userProfile]) // useEffect с зависимостью от userProfile

  return profileData
}
