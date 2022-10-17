import { HiExternalLink } from 'react-icons/hi'
import { GitLinkContainer } from './styles'

interface GitLinkProps {
  link: string
  title: string
}

export function GitLink({ link, title }: GitLinkProps) {
  return (
    <GitLinkContainer>
      <a href={link} target="blank">
        {title} <HiExternalLink />
      </a>
    </GitLinkContainer>
  )
}
