import Card from '@/components/ui/main-info/news/Card'
import { FC } from 'react'

const NewsDetail = ({ params }: {
  params: {
    newsId: string
  }
}) => {
  return (
		<div className='h-screen w-full flex flex-col justify-center overflow-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[50]'
				style={{
          backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
        >
        {params.newsId}
				<Card
					desc='Присоединяйтесь к сообществу геймеров, которые уже оценили наш лаунчер. Скачайте его бесплатно сегодня и откройте для себя новый уровень комфорта и удовольствия от игр.'
					image='/news-1.png'
					link=''
					title='Новый сервер'
				/>
			</div>
		</div>
	)
}

export default NewsDetail