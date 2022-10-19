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
  width: 100%;

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
