import styled from 'styled-components'

export const PostCardContainer = styled.button`
  padding: 1.875rem;
  background: ${(props) => props.theme['blue-600']};
  border: none;
  border-radius: 10px;
  text-align: left;

  cursor: pointer;

  border: 2px solid transparent;
  transition: all 0.2s;

  &:hover {
    border: 2px solid ${(props) => props.theme['blue-400']};
    transform: scale(1.02);
    transition: border 0.2s;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    strong {
      display: block;
      font-size: 1.25rem;
      color: ${(props) => props.theme['blue-50']};
      flex: 1;
      line-height: 1.6;
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${(props) => props.theme['blue-300']};
      line-height: 2.3;
      margin-left: 1rem;
    }
  }

  p {
    margin-top: 1.25rem;
    line-height: 1.6;
    color: ${(props) => props.theme['blue-200']};
  }
`
