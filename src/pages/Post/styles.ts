import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin-top: -5.5rem;
  position: relative;
  z-index: 1;
  margin-inline: auto;

  @media (max-width: 767px) {
    padding-inline: 1.5rem;
  }
`

export const PostHeading = styled.section`
  background: ${(props) => props.theme['blue-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['blue-50']};
    margin: 1.25rem 0 0.5rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['blue-300']};

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

export const ReturnToHome = styled.div`
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

export const PostContent = styled.article`
  padding: 2.5rem 2rem;
  max-width: 864px;
  width: 100%;

  img {
    width: 100%;
  }

  li {
    list-style-position: inside;
  }

  p {
    line-height: 1.6;
    color: ${(props) => props.theme['blue-200']};

    &:first-child {
      margin-bottom: 2rem;
    }
  }

  strong:nth-child(2) {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }
`
