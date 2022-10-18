import styled from 'styled-components'

export const BannerSkeletonContainer = styled.div`
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
    margin: 1.25rem 0 0.5rem;
  }

  .footer {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
