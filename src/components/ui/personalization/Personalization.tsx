'use client';

import { FC, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import Modal from '../modal/Modal';
import { Button } from '../button';
import { Upload, User } from 'lucide-react';
import { IoBodySharp } from 'react-icons/io5';
import { FaUserAstronaut } from 'react-icons/fa6';
import { toast } from 'react-toastify'

const Personalization: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skinUrl, setSkinUrl] = useState<string>('/steve.png');
  const [modelUrl, setModelUrl] = useState<string>('/models/steve.glb');

  useEffect(() => {
    const savedSkin = localStorage.getItem('skinUrl');
    const savedModel = localStorage.getItem('modelUrl');
    if (savedSkin) setSkinUrl(savedSkin);
    if (savedModel) setModelUrl(savedModel);
  }, []);

  const handleSkinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const image = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        const base64 = reader.result as string;
        image.src = base64;

        image.onload = () => {
          if ((image.width === 64 || image.width === 128) && image.height === image.width) {
            setSkinUrl(base64);
            localStorage.setItem('skinUrl', base64);
          } else {
            toast.error('Некорректный данные')
          }
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const Model: FC<{ skinUrl: string }> = ({ skinUrl }) => {
		const { scene, animations } = useGLTF(modelUrl)
		const { actions, names } = useAnimations(animations, scene)

		useEffect(() => {
			if (skinUrl && scene) {
				const texture = new THREE.TextureLoader().load(skinUrl)
				scene.traverse(child => {
					if (child instanceof THREE.Mesh) {
						child.material = new THREE.MeshBasicMaterial({
							map: texture,
							transparent: true,
						})
					}
				})
			}

			if (actions) {
				actions[names[0]]?.reset().fadeIn(0.5).play()
			}

			return () => {
				if (actions) {
					actions[names[0]]?.fadeOut(0.5).stop()
				}
			}
		}, [skinUrl, scene, actions, names])

		return <primitive object={scene} />
	}
  return (
		<>
			<div className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090b]'>
				<div className='py-7 px-3 md:px-5 lg:px-7 xl:px-8'>
					<div className='text-center'>
						<h1 className='Welcome-text text-3xl xl:text-4xl'>
							Персонализация
						</h1>
						<div className='mt-6 mb-9'>
							<Button className='w-full' onClick={() => setIsOpen(true)}>
								<Upload />
							</Button>
						</div>
						<div className='w-full'>
							<Canvas camera={{ position: [1, 3, 40], fov: 50 }}>
								<OrbitControls />
								<Suspense fallback={null}>
									<Model skinUrl={skinUrl} />
								</Suspense>
								<Environment preset='sunset' />
							</Canvas>
						</div>
					</div>
				</div>
			</div>

			{isOpen && (
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					header={'Скин и аватарка'}
					icon={<User className='text-primary-pink' />}
				>
					<div className='px-3 py-6'>
						<div className='flex flex-col sm:flex-row justify-between items-center gap-x-3 gap-y-10'>
							<div className='flex flex-col items-center sm:border-r-2 sm:border-white/20 sm:pr-[24.8px] gap-y-4'>
								<div className='Welcome-box p-4'>
									<IoBodySharp size={22} />
								</div>
								<input
									type='file'
									accept='image'
									onChange={handleSkinChange}
									id='skin'
									name='skin'
									className='hidden'
								/>
								<label
									htmlFor='skin'
									className='border border-white/[0.2] bg-[#09090B] hover:border-primary-pink h-10 px-8 py-5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all duration-500 focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-neutral-300 cursor-pointer'
								>
									<span>Поменять скин</span>
								</label>
							</div>
							<div className='flex flex-col items-center gap-y-4'>
								<div className='Welcome-box p-4'>
									<FaUserAstronaut size={22} />
								</div>
								<Button>Поменять аву</Button>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</>
	)
};

export default Personalization;
