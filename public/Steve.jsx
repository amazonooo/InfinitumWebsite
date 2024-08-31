import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export default function Model({ skinUrl, animation }) {
	const { nodes, materials, animations } = useGLTF('/steve.gltf')
	const { actions } = useAnimations(
		animations,
		nodes['Steve_02_-_Default_0'].scene
	)
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

	useEffect(() => {
		if (actions[animation]) {
			actions[animation].reset().play()
		} else {
			console.warn(`Animation "${animation}" not found.`)
		}
	}, [animation, actions])

	useFrame((state, delta) => {
		actions[animation]?.update(delta)
	})

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
