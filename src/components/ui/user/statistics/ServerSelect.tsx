import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useProfileData } from '@/hooks/useProfileData'

export default function ServerSelect() {
  const { userProfile } = useProfileData()

	return (
		<Select>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Сервер 1' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='1'>Сервер 1</SelectItem>
				<SelectItem value='2'>Сервер 2</SelectItem>
				<SelectItem value='3'>Сервер 3</SelectItem>
				<SelectItem value='4'>Сервер 4</SelectItem>
			</SelectContent>
		</Select>
	)
}
