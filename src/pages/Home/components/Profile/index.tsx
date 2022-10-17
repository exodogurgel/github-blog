import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import { GitLink, ProfileContainer, ProfileContent } from './styles'

import profileImg from '../../../../assets/profile.jpeg'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={profileImg} alt="" />
      <ProfileContent>
        <header>
          <h2>Êxodo Gurgel</h2>
          <GitLink>
            <a href="https://www.github.com/exodogurgel" target="blank">
              Github <HiExternalLink />
            </a>
          </GitLink>
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
