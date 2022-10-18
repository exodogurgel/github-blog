import { useParams, NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { FaGithub, FaCalendarDay, FaComment } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { GitLink } from '../../components/GitLink'
import { PostContainer, PostHeading, PostContent, ReturnToHome } from './styles'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

// import codeImg from '../../assets/code.png'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface User {
  login: string
}

interface PostProps {
  number: number
  html_url: string
  title: string
  body: string
  comments: number
  created_at: string
  user: User
}

export function Post() {
  const [post, setPost] = useState<PostProps>({} as PostProps)
  const params = useParams()

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get<PostProps>(
        `/repos/exodogurgel/github-blog/issues/${params.issueNumber}`,
      )

      setPost(response.data)
    }
    fetchPost()
  }, [params])
  return (
    <PostContainer>
      <PostHeading>
        <header>
          <ReturnToHome>
            <NavLink to="/">
              <FiChevronLeft /> Voltar
            </NavLink>
          </ReturnToHome>
          <GitLink link={post.html_url} title="Ver no Github" />
        </header>
        <h1>{post.title}</h1>
        <footer>
          <span>
            <FaGithub />
            {post.user?.login}
          </span>
          <span>
            <FaCalendarDay />
            {post.created_at &&
              formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>
          <span>
            <FaComment /> {post.comments} comentários
          </span>
        </footer>
      </PostHeading>
      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
