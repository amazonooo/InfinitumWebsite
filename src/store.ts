import { atom } from 'jotai'

export const isCollapsedAtom = atom(true)
export const isOpen = atom(false)
export const isClose = atom(false)
export const onClose = atom(true)