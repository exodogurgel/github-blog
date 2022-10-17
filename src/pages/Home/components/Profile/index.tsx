import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { ProfileContainer, ProfileContent } from './styles'

import profileImg from '../../../../assets/profile.jpeg'
import { GitLink } from '../../../../components/GitLink'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={profileImg} alt="" />
      <ProfileContent>
        <header>
          <h2>Êxodo Gurgel</h2>
          <GitLink link="https://www.github.com/exodogurgel" title="Github" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <footer>
          <span>
            <FaGithub />
            exodogurgel
          </span>
          <span>
            <FaBuilding />
            Rocketseat
          </span>
          <span>
            <FaUserFriends />
            32 seguidores
          </span>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  )
}
