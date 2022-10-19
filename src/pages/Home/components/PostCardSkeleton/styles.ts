import styled from 'styled-components'

export const PostCardContainer = styled.button`
  padding: 1.875rem;
  background: ${(props) => props.theme['blue-600']};
  border: none;
  border-radius: 10px;
  text-align: left;

  border: 2px solid transparent;
  transition: all 0.2s;

  > div {
    display: grid;
    grid-template-columns: 1fr 100px;
  }

  p {
    margin-top: 1.25rem;
    line-height: 1.6;
  }
`
