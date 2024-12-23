import { useEffect, useRef } from 'react'
import ReactSkinview3d from 'react-skinview3d'
import { IdleAnimation, WalkingAnimation, RunningAnimation } from 'skinview3d'

interface ISkinViewer {
	skinUrl: string
	animationState: 'idle' | 'walking' | 'running'
}

export default function SkinViewer({ skinUrl, animationState }: ISkinViewer) {
	const viewerRef = useRef<any>(null)

	useEffect(() => {
		if (viewerRef.current) {
			switch (animationState) {
				case 'walking':
					viewerRef.current.animation = new WalkingAnimation()
					break
				case 'running':
					viewerRef.current.animation = new RunningAnimation()
					break
				case 'idle':
				default:
					viewerRef.current.animation = new IdleAnimation()
					break
			}
		}
	}, [animationState])

	return (
		<ReactSkinview3d
			className='viewer'
			skinUrl={skinUrl}
			height={390}
			width={270}
			onReady={({ viewer }) => {
				viewerRef.current = viewer
				viewer.animation = new IdleAnimation()
			}}
		/>
	)
}
