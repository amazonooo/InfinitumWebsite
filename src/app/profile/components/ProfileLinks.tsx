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
		<div className='relative'>
			<ul className='flex space-x-4'>
				{links.map(card => (
					<li className='relative' key={card.id}>
						<Link href={card.link} legacyBehavior>
							<a
								className={`${
									active === card.link ? 'bg-neutral-700' : ''
								} p-2 rounded`}
								onClick={() => handleClick(card.link)}
							>
								{card.name}
							</a>
						</Link>
            {active === card.link && (
              <div className='absolute inset-0 bg-neutral-700 transition-all duration-300 rounded-lg' />
            )}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProfileLinks