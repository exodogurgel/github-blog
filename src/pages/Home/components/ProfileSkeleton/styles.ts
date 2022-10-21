import styled from 'styled-components'

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme['blue-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: grid;
  grid-template-columns: 9.25rem 1fr;
  gap: 2rem;

  div:last-child {
    width: 100%;
  }

  .img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  footer {
    width: 70%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .img {
      justify-self: center;
    }
  }
`
