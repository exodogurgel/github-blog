import styled from 'styled-components'

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme['blue-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfileContent = styled.div`
  header {
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme['blue-50']};
      line-height: 1.3;
    }
  }

  p {
    color: ${(props) => props.theme['blue-200']};
    line-height: 1.6;
    margin: 0.5rem 0 1.5rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['blue-100']};

      svg {
        color: ${(props) => props.theme['blue-400']};
      }
    }

    @media (max-width: 768px) {
      justify-content: space-between;

      span {
        font-size: 0.875rem;
        gap: 0.3rem;
      }
    }
  }
`

export const GitLink = styled.div`
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
