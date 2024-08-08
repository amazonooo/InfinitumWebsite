'use client'

import { FC, useState } from 'react'
import { ILinks, links } from './links'
import Link from 'next/link'

interface IProfile {
  card?: ILinks
  currentPath?: string
}

const ProfileLinks: FC<IProfile> = ({ currentPath }) => {
  const [active, setActive] = useState(currentPath)

  const handleClick = (href: string) => {
    setActive(href)
  }

  return (
		<div className='relative mt-12 rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] px-4 py-3'>
			<ul className='flex space-x-6'>
				{links.map(card => (
					<li className='relative' key={card.id}>
						<Link href={card.link} legacyBehavior>
							<a
								className={`${
									active === card.link ? 'bg-neutral-800' : ''
								} p-2 rounded hover:bg-neutral-800 transition-colors duration-300`}
								onClick={() => handleClick(card.link)}
							>
								{card.name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProfileLinks