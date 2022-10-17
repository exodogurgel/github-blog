import styled from 'styled-components'

export const GitLinkContainer = styled.div`
  height: 1.25rem;

  &::after {
    content: '';
    width: 0;
    height: 2px;

    background-color: ${(props) => props.theme.blue};

    position: relative;
    display: block;

    transition: width 0.2s;
  }

  &:hover::after {
    width: 100%;
  }

  a {
    display: flex;
    align-items: stretch;
    height: 1.2rem;
    gap: 0.5rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 0.75rem;

    svg {
      font-size: 1rem;
    }
  }
`
