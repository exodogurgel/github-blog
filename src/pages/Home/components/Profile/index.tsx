import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { ProfileContainer, ProfileContent } from './styles'

import { GitLink } from '../../../../components/GitLink'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { ProfileSkeleton } from '../ProfileSkeleton'

interface ProfileProps {
  avatar_url: string
  bio: string
  html_url: string
  followers: number
  login: string
  name: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)

  const fetchProfile = useCallback(async () => {
    const { data } = await api.get<ProfileProps>('/users/exodogurgel')
    setProfile(data)
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])
  return (
    <>
      {profile.avatar_url ? (
        <ProfileContainer>
          <img src={profile.avatar_url} alt="" />
          <ProfileContent>
            <header>
              <h2>{profile.name}</h2>
              <GitLink link={profile.html_url} title="Github" />
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
      ) : (
        <ProfileSkeleton />
      )}
    </>
  )
}
