import { useParams, NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { FaGithub, FaCalendarDay, FaComment } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { GitLink } from '../../components/GitLink'
import { PostContainer, PostHeading, PostContent, ReturnToHome } from './styles'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

// import codeImg from '../../assets/code.png'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { BannerSkeleton } from './components/BannerSkeleton'

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
      {post.title ? (
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
              <FaComment /> {post.comments} Comentários
            </span>
          </footer>
        </PostHeading>
      ) : (
        <BannerSkeleton />
      )}

      {post.body ? (
        <PostContent>{<ReactMarkdown>{post.body}</ReactMarkdown>}</PostContent>
      ) : (
        <PostContent>
          <Skeleton
            count={10}
            style={{ height: '1.3rem', marginBottom: '1rem' }}
          />
        </PostContent>
      )}
    </PostContainer>
  )
}
