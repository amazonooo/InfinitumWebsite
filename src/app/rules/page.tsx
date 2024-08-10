import { RulesHero } from './components/RulesHero'
import RulesMain from './components/RulesMain'

export default function RulesPage() {
  return (
		<div className='h-full w-full flex flex-col overflow-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[50]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
        <RulesHero />
        <RulesMain />
			</div>
		</div>
	)
}