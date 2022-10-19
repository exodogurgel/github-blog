import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { HomeContainer, Publications, SearchSection } from './styles'
import React, { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCardSkeleton } from './components/PostCardSkeleton'

const searchInputSchema = z.object({
  query: z.string(),
})

type SearchInput = z.infer<typeof searchInputSchema>

export interface PostsProps {
  number: number
  title: string
  body: string
  created_at: string
}

interface SearchPostsProps {
  items: PostsProps[]
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([])

  const { register, watch } = useForm<SearchInput>({
    resolver: zodResolver(searchInputSchema),
  })

  async function fetchPosts(query?: string) {
    const response = await api.get<SearchPostsProps>(
      `search/issues?q=${query ? query + '%20' : ''}repo:exodogurgel/github-blog
      `,
    )

    setPosts(response.data.items)
  }

  async function handleOnKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    const setSearch = watch('query')
    if (event.key === 'Enter') fetchPosts(setSearch)
  }

  const publicationsAmount = posts.length

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <SearchSection>
        <div>
          <h2>Publicações</h2>
          <span>
            {publicationsAmount}{' '}
            {publicationsAmount > 1 ? 'publicações' : 'publicação'}
          </span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          onKeyUp={handleOnKeyUp}
        />
      </SearchSection>
      <Publications>
        {posts.length > 0 ? (
          posts.map((post) => {
            return <PostCard key={post.number} data={post} />
          })
        ) : (
          <>
            <PostCardSkeleton />
            <PostCardSkeleton />
          </>
        )}
      </Publications>
    </HomeContainer>
  )
}
