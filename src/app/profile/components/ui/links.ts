import { CirclePlay, Gamepad2, Handshake, LucideIcon, Newspaper, Pickaxe } from 'lucide-react'

export interface ILinks {
  id: string
  name: string
  link: string
	icon: LucideIcon
}

export const rules = [
	{
		id: '1',
		name: 'Общие правила',
		link: '/rules',
		icon: Newspaper,
	},
	{
		id: '2',
		name: 'Игровой процесс',
		link: '/rules/gameproc',
		icon: Gamepad2,
	},
	{
		id: '3',
		name: 'Общение',
		link: '/rules/communication',
		icon: Handshake,
	},
	{
		id: '4',
		name: 'Строительство в мире',
		link: '/rules/construction',
		icon: Pickaxe,
	},
	{
		id: '5',
		name: 'Правила серверов',
		link: '/rules/serverrul',
		icon: CirclePlay,
	},
]