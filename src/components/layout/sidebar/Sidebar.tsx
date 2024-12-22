'use client'

import Menu from './menu/Menu'
import styles from './Sidebar.module.scss'
import { useAtom } from 'jotai'
import { isCollapsedAtom } from '@/store/sidebar-store'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import cn from 'clsx'
import { useMediaQuery } from 'react-responsive'
import { SidebarDemo } from '@/components/ui/sidebarTest/SidebarTest'
import { usePathname } from 'next/navigation'
import { Dot } from 'lucide-react'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

	const isDesktop = useMediaQuery({ minWidth: 951 })

	const pathname = usePathname()

  return (
		<>
			{pathname === '/' ? (
				<>
					{isDesktop && (
						<LazyMotion features={domAnimation}>
							<m.aside
								className={cn(styles.sidebar, {
									[styles.collapsed]: isCollapsed,
								})}
								animate={{ width: isCollapsed ? 60 : 320 }}
								transition={{ type: 'spring', stiffness: 200, damping: 21 }}
								onMouseEnter={toggleSidebar}
								onMouseLeave={toggleSidebar}
							>
								<h2 className={`${styles.toggle} flex items-center`}>
									1200
									{isCollapsed ? '' : <Dot size={30} className='text-primary-pink animate-pulse' />}
								</h2>
								<Menu />
							</m.aside>
						</LazyMotion>
					)}
					{!isDesktop && (
						<LazyMotion features={domAnimation}>
							<SidebarDemo />
						</LazyMotion>
					)}
				</>
			) : (
				''
			)}
		</>
	)
}