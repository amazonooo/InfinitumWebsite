export interface IPosts {
	id: number
	createdAt: string
	theme: string
	tag: string | null
	previewImageUrl: string
  description: string
}

export interface IPost {
	id: number
	createdAt: string
	updatedAt: string
	theme: string
	tag: string | null
	previewImageUrl: string
	description: string
  content: string
}

export interface NewsResponse {
  data: IPosts[]
  pagination: {
    page: number
    limit: number
    totalCount: number
    totalPages: number
  }
}