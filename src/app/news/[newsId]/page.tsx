import { FC } from 'react'

const NewsDetail = ({ params }: {
  params: {
    newsId: string
  }
}) => {
  return (
    <h1>
      News {params.newsId}
    </h1>
  )
}

export default NewsDetail