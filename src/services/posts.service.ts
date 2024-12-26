import { axiosClassic } from '@/api/interceptors'
import { API_URL } from '@/constants/api.constants'
import { IPost, IPosts, NewsResponse } from '@/types/posts.types'

class PostsService {
  private BASE_URL = `${API_URL}/posts`

  async getPosts(page: number): Promise<IPosts[]> {
    const response = await axiosClassic.get(`${this.BASE_URL}?page=${page}&limit=8`)

    return response.data
  }

  async getPostById(id: number): Promise<IPost> {
    const response = await axiosClassic.get(`${this.BASE_URL}/${id}`)

    return response.data
  }
}

export const postsService = new PostsService()