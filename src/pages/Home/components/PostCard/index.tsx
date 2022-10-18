import { PostsProps } from '../..'
import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'

interface PostCardProps {
  data: PostsProps
}

export function PostCard({ data }: PostCardProps) {
  let description = data.body

  const maximumCharacters = description.length > 181
  if (maximumCharacters) {
    description = description.substring(0, 181) + '...'
  }

  const navigate = useNavigate()

  function handlePost() {
    navigate(`/post/${data.number}`)
  }

  return (
    <PostCardContainer onClick={handlePost}>
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
