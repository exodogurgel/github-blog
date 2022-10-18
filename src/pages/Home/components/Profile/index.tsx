import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { ProfileContainer, ProfileContent } from './styles'

import profileImg from '../../../../assets/profile.jpeg'
import { GitLink } from '../../../../components/GitLink'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface ProfileProps {
  avatarURL: string
  bio: string
  htmlURL: string
  followers: number
  login: string
  name: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({
    avatarURL: '',
    bio: '',
    htmlURL: '',
    followers: 1,
    login: '',
    name: '',
  })

  async function fetchProfile() {
    const response = await api.get('/users/exodogurgel')

    const {
      avatar_url: avatarURL,
      bio,
      html_url: htmlURL,
      followers,
      login,
      name,
    } = response.data

    const filteredData = {
      avatarURL,
      bio,
      htmlURL,
      followers,
      login,
      name,
    }

    setProfile(filteredData)
  }

  useEffect(() => {
    fetchProfile()
  }, [])
  return (
    <ProfileContainer>
      <img src={profileImg} alt="" />
      <ProfileContent>
        <header>
          <h2>{profile.name}</h2>
          <GitLink link={profile.htmlURL} title="Github" />
        </header>
        <p>{profile.bio}</p>
        <footer>
          <span>
            <FaGithub />
            {profile.login}
          </span>
          <span>
            <FaBuilding />
            Rocketseat
          </span>
          <span>
            <FaUserFriends />
            {profile.followers} seguidores
          </span>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  )
}
