'use client'

import { useState } from 'react'
import GameProcMain from './GameProcMain'
import CommunicationMain from './CommunicationMain'
import ConstructionMain from './ConstructionMain'
import ServerRulMain from './ServerRulMain'
import GeneralMain from './GeneralMain'
import RulesLinks from './RulesLinks'

export default function RulesMain() {
  const [currentType, setCurrentType] = useState('Общие правила')

  const currentContent = () => {
    switch (currentType) {
      case 'Игровой процесс':
        return <GameProcMain />
      case 'Общение':
        return <CommunicationMain />
      case 'Строительство в мире':
        return <ConstructionMain />
      case 'Правила серверов':
        return <ServerRulMain />
      default:
        return <GeneralMain />
    }
  }

  return (
		<>
      <RulesLinks currentType={currentType} setCurrentType={setCurrentType} />
			<div className='pt-16'>{currentContent()}</div>
		</>
	)
}