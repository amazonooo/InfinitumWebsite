import { FC } from 'react'
import ProjectRules from './ProjectRules'
import ServerRules from './ServerRules'

const RulesMain: FC = () => {
  return (
		<section className='pt-16 h-full w-full'>
			<div className='px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
				<div className='flex flex-col gap-y-12'>
					<ProjectRules />
					<ServerRules />
				</div>
			</div>
		</section>
	)
}

export default RulesMain