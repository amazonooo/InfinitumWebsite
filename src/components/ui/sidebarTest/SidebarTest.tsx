'use client'

import { useState } from 'react'
import Menu from './menu/Menu'
import styles from './Sidebar.module.scss'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { useAtom } from 'jotai'
import { isCollapsedAtom } from '@/store'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import cn from 'clsx'

export default function SidebarTest() {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
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
	)
}