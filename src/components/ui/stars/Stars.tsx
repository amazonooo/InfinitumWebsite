'use client'

import { FC, Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

const Stars: FC = (props: any) => {
  const ref: any = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }))
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10
    ref.current.rotation.y -= delta/15
  })

  return (
    <group rotation={[0,0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial 
          transparent
          color='#cbacf9'
          size={0.0015}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => (
  <div className='w-full h-full fixed inset-0'>
    <Canvas camera={{position: [0,0,1]}}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  </div>
)

export default StarsCanvas