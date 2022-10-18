import { FiChevronLeft } from 'react-icons/fi'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import { GitLink } from '../../../../components/GitLink'
import { ReturnToHome } from '../../styles'
// import 'react-loading-skeleton/dist/skeleton.css'
import { BannerSkeletonContainer } from './styles'

export function BannerSkeleton() {
  return (
    <BannerSkeletonContainer>
      <header>
        <ReturnToHome>
          <NavLink to="/">
            <FiChevronLeft /> Voltar
          </NavLink>
        </ReturnToHome>
        <GitLink link="" title="Ver no Github" />
      </header>
      <h1>{<Skeleton />}</h1>
      <div className="footer">
        <span className="teste">
          {<Skeleton style={{ height: '1.2rem' }} />}
        </span>
      </div>
    </BannerSkeletonContainer>
  )
}
