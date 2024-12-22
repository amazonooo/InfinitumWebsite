// import { NextApiRequest, NextApiResponse } from 'next'

// let userSkins: Record<string, string> = {}

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     const { userId } = req.query
//     if (!userId || typeof userId !== 'string') {
//       return res.status(400).json({ message: 'Invalid userId' })
//     }
//     return res.status(200).json({ skin: userSkins[userId] || '/steve.png' })
//   }

//   if (req.method === 'POST') {
//     const { userId, skin } = req.body

//     if(!userId || !skin) {
//       return res.status(400).json({ message: 'Missing userId or skin' })
//     }

//     userSkins[userId] = skin
//     return res.status(200).json({ message: 'Skin updated successfully' })
//   }

//   return res.status(405).json({ message: 'Method not allowed' })
// }

import { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const file = req.body
		const savePath = path.join(
			process.cwd(),
			'public',
			'skins',
			'user-skin.png'
		)

		await fs.writeFile(savePath, file)
		return res.status(200).json({ message: 'Skin uploaded successfully!' })
	}

	res.status(405).json({ message: 'Method not allowed' })
}
