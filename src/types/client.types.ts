export interface ClientObject {
	id: string
	title: string
	description: string
	imageUrl: string
	minecraftVersion: string
	recommendedMemory: number
}
  
  export type ClientObjectWithOnline = ClientObject & { online: number }