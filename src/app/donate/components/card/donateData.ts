import { Atom, Diamond, Flame, LucideIcon } from 'lucide-react'

export interface IDonateData {
  id?: string
  Icon: LucideIcon
  title: string
  count: string
}

export const donateData = [
  {
    id: '1',
    Icon: Atom,
    title: 'Pro',
    count: '99'
  },
  {
    id: '2',
    Icon: Flame,
    title: 'Vip',
    count: '249'
  },
  {
    id: '3',
    Icon: Diamond,
    title: 'Premium',
    count: '629'
  },
  {
    id: '4',
    Icon: Atom,
    title: 'Pro',
    count: '99'
  },
  {
    id: '5',
    Icon: Flame,
    title: 'Vip',
    count: '249'
  },
  {
    id: '6',
    Icon: Diamond,
    title: 'Premium',
    count: '629'
  },

]