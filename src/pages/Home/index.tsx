import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { HomeContainer, Publications, SearchSection } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchSection>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
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
