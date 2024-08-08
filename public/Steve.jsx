/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 steve.gltf 
Author: Vincent Yanez (https://sketchfab.com/vinceyanez)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/minecraft-steve-cb228dcc137042cc9a3dc588758cc6e9
Title: Minecraft - Steve
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/steve.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Steve_02_-_Default_0'].geometry} material={materials['02_-_Default']} position={[0, 0, -4.5]} />
      </group>
    </group>
  )
}

useGLTF.preload('/steve.gltf')
