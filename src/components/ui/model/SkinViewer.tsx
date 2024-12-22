import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'
import * as THREE from 'three'

type SkinViewerProps = {
	skinUrl: string
}

const SkinViewer: React.FC<SkinViewerProps> = ({ skinUrl }) => {
	const [texture, setTexture] = useState<THREE.Texture | null>(null)

	const loadTexture = (url: string) => {
		const loader = new THREE.TextureLoader()
		loader.load(url, tex => setTexture(tex))
	}

	if (!texture) {
		loadTexture(skinUrl)
		return <div>Loading...</div>
	}

	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<mesh>
				<boxGeometry args={[1, 2, 0.5]} />
				<meshBasicMaterial map={texture} />
			</mesh>
			<OrbitControls />
		</Canvas>
	)
}

export default SkinViewer
