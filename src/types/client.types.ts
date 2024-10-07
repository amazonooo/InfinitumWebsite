export interface ClientObject {
	id: string
	title: string
	description: string
	minecraftVersion: string
	imageUrl: string
	recommendedMemory: number
  }
  
  export type ClientObjectWithOnline = ClientObject & { online: number }