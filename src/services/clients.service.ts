import { axiosWithAuth } from '@/api/interceptors'
import { API_URL } from '@/constants/api.constants'
import { ClientObject } from '@/types/client.types'

interface ClientOnlineResponse {
	id: number
	online: number
}
  
class ClientsService {
	private BASE_URL = `${API_URL}/clients`

	async getClients() {
		const response = await axiosWithAuth.get<ClientObject[]>(this.BASE_URL)
		return response.data
	}
	
	async getClient(id: string) {
		const response = await axiosWithAuth.get<ClientObject>(`${this.BASE_URL}/${id}`)
		return response.data
	}
	
	async getOnline() {
		const response = await axiosWithAuth.get<ClientOnlineResponse[]>(`${this.BASE_URL}/online`)
		return response.data
	}
	
	async getServerOnline(id: number) {
		const response = await axiosWithAuth.get<ClientOnlineResponse>(`${this.BASE_URL}/online/${id}`)
		return response.data
	}
}

export const clientsService = new ClientsService()
  