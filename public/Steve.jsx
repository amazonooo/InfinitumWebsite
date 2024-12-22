import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Model({ skinUrl }) {
	const { nodes, materials } = useGLTF('/steve.gltf')
	const textureLoader = new THREE.TextureLoader()
	
	const customMaterial = skinUrl
		? new THREE.MeshBasicMaterial({
				map: textureLoader.load(
					skinUrl,
					texture => {
						texture.minFilter = THREE.NearestFilter
						texture.magFilter = THREE.NearestFilter
						texture.generateMipmaps = false
						texture.wrapS = THREE.RepeatWrapping
						texture.wrapT = THREE.RepeatWrapping
					},
					undefined,
					error => {
						console.error('Error loading texture:', error)
					}
				),
		  })
		: materials['02_-_Default']


	return (
		<group dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					geometry={nodes['Steve_02_-_Default_0']?.geometry}
					material={customMaterial}
					position={[0, 0, -4.5]}
				/>
			</group>
		</group>
	)
}
