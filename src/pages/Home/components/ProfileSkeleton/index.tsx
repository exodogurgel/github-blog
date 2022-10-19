import { ProfileContainer } from './styles'
import Skeleton from 'react-loading-skeleton'

export function ProfileSkeleton() {
  return (
    <ProfileContainer>
      <div className="img">
        <Skeleton style={{ height: '9.25rem', borderRadius: '8px' }} />
      </div>
      <div>
        <h2>{<Skeleton style={{ marginTop: '1.2rem' }} />}</h2>
        <p>{<Skeleton style={{ marginTop: '1rem' }} />}</p>
        <footer>{<Skeleton style={{ marginTop: '2rem' }} />}</footer>
      </div>
    </ProfileContainer>
  )
}
