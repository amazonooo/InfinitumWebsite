import { Atom, Diamond, Flame, LucideIcon } from 'lucide-react'

export interface IDonateData {
  id?: string
  Icon: LucideIcon
  title: string
  count: string
  border: string
}

export const donateData = [
	{
		id: '1',
		Icon: Atom,
		title: 'Pro',
		count: '99',
		border: '#f5d0fe',
	},
	{
		id: '2',
		Icon: Flame,
		title: 'Vip',
		count: '249',
		border: '#a78bfa',
	},
	{
		id: '3',
		Icon: Diamond,
		title: 'Premium',
		count: '629',
		border: '#fca5a5',
	},
	{
		id: '4',
		Icon: Atom,
		title: 'Pro',
		count: '99',
		border: '#a7f3d0',
	},
	{
		id: '5',
		Icon: Flame,
		title: 'Vip',
		count: '249',
		border: '#a5b4fc',
	},
	{
		id: '6',
		Icon: Diamond,
		title: 'Premium',
		count: '629',
		border: '#f9a8d4',
	},
]