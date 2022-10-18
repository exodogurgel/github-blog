import { PostsProps } from '../..'
import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  data: PostsProps
}

export function PostCard({ data }: PostCardProps) {
  let description = data.body

  const maximumCharacters = description.length > 181
  if (maximumCharacters) {
    description = description.substring(0, 181) + '...'
  }

  return (
    <PostCardContainer>
      <div>
        <strong>{data.title}</strong>
        <span>
          {formatDistanceToNow(new Date(data.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{description}</p>
    </PostCardContainer>
  )
}
