import { FaGithub, FaCalendarDay, FaComment } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { GitLink } from '../../components/GitLink'
import { PostContainer, PostHeading, ReturnToHome } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostHeading>
        <header>
          <ReturnToHome>
            <a href="/">
              <FiChevronLeft /> Voltar
            </a>
          </ReturnToHome>
          <GitLink
            link="https://www.github.com/exodogurgel"
            title="Ver no Github"
          />
        </header>
        <h1>JavaScript data types and data structures</h1>
        <footer>
          <span>
            <FaGithub />
            exodogurgel
          </span>
          <span>
            <FaCalendarDay />
            Há 1 dia
          </span>
          <span>
            <FaComment /> 5 comentários
          </span>
        </footer>
      </PostHeading>
    </PostContainer>
  )
}
