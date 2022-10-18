import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { HomeContainer, Publications, SearchSection } from './styles'

const searchInputSchema = z.object({
  query: z.string(),
})

type SearchInput = z.infer<typeof searchInputSchema>

export function Home() {
  const { register, watch } = useForm<SearchInput>({
    resolver: zodResolver(searchInputSchema),
  })

  console.log(watch('query'))

  return (
    <HomeContainer>
      <Profile />
      <SearchSection>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchSection>
      <Publications>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Publications>
    </HomeContainer>
  )
}
