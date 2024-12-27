import { axiosClassic } from '@/api/interceptors';
import { API_URL } from '@/constants/api.constants'

class RecoveryPassword {
  private BASE_URL = `${API_URL}/user/settings/change-password`

  async RecoveryPassword(
    newPassword: string,
    confirmPassword: string
  ) {
    const response = await axiosClassic.patch(this.BASE_URL, {
      newPassword,
      confirmPassword
    })

    return response.data
  }
}

export const recoveryPassword = new RecoveryPassword()