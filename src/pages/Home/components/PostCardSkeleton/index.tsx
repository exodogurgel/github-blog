import Skeleton from 'react-loading-skeleton'
import { PostCardContainer } from './styles'

export function PostCardSkeleton() {
  return (
    <PostCardContainer>
      <div>
        <strong>
          {
            <Skeleton
              count={3}
              style={{ height: '1.4rem', marginBottom: '0.5rem' }}
            />
          }
        </strong>
        <span>{<Skeleton />}</span>
      </div>
      <p>{<Skeleton count={4} style={{ marginBottom: '0.5rem' }} />}</p>
    </PostCardContainer>
  )
}
