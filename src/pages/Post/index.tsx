import { FaGithub, FaCalendarDay, FaComment } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { GitLink } from '../../components/GitLink'
import {
  PostContainer,
  PostHeading,
  PostContent,
  ReturnToHome,
  CodeExample,
} from './styles'

import codeImg from '../../assets/code.png'

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
      <PostContent>
        <p>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>
        <strong>Dynamic typing</strong>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
        <CodeExample>
          <img src={codeImg} alt="" />
        </CodeExample>
      </PostContent>
    </PostContainer>
  )
}
