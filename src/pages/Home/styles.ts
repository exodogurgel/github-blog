import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin-top: -5.5rem;
  position: relative;
  z-index: 1;
  margin-inline: auto;

  @media (max-width: 768px) {
    padding-inline: 1.5rem;
  }
`

export const SearchSection = styled.section`
  margin-top: 4.375rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h2 {
      font-size: 1.125rem;
      line-height: 1.6;
      color: ${(props) => props.theme['blue-100']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['blue-300']};
    }
  }

  input {
    width: 100%;
    height: 3.125rem;
    border: 1px solid ${(props) => props.theme['blue-500']};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme['blue-900']};
    color: ${(props) => props.theme['blue-200']};

    &::placeholder {
      color: ${(props) => props.theme['blue-400']};
    }
  }
`

export const Publications = styled.section`
  margin-block: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
