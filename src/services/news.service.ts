import { API_URL } from '@/constants/api.constants'
import axios from 'axios'

class NewsService {
  private BASE_URL = `${API_URL}/news`

  async getNews() {
    const response = await axios.get(this.BASE_URL)

    return response.data
  }
}

export const newsService = new NewsService()