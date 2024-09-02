'use client'

import Menu from './menu/Menu'
import styles from './Sidebar.module.scss'
import { PanelLeftClose, PanelLeftOpen, PanelTopClose, PanelTopOpen } from 'lucide-react'
import { useAtom } from 'jotai'
import { isCollapsedAtom } from '@/store'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import cn from 'clsx'
import { useMediaQuery } from 'react-responsive'
import { SidebarDemo } from '@/components/ui/sidebarTest/SidebarTest'
import { usePathname } from 'next/navigation'

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
								<button
									className={styles.toggle}
									// onClick={toggleSidebar}
								>
									{isCollapsed ? <PanelLeftClose /> : <PanelLeftOpen />}
								</button>
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
			) : ''}
		</>
	)
}