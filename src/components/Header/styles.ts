import styled from 'styled-components'

import leftEfFectImg from '../../assets/left-bg-effect.svg'
import rightEfFectImg from '../../assets/right-bg-effect.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  //background: '#0B1B2B'; //${(props) => props.theme['blue-700']};
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    background-image: url(${leftEfFectImg});
    position: absolute;
    top: 70px;
    left: 0;
    max-width: 409px;
    width: 100%;
    max-height: 188px;
    height: 100%;
  }

  &::after {
    content: '';
    background-image: url(${rightEfFectImg});
    position: absolute;
    top: 30px;
    right: 0;
    max-width: 371px;
    width: 100%;
    max-height: 235px;
    height: 100%;
  }
`

export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-top: 4rem;
`

export const LeftEffect = styled.div`
  position: absolute;
  width: 236px;
  height: 236px;
  left: -130px;
  top: -96px;
  background: ${(props) => props.theme.blue};
  filter: blur(200px);
`

export const RightEffect = styled.div`
  position: absolute;
  width: 155px;
  height: 155px;
  right: -15px;
  top: -52px;
  background: ${(props) => props.theme.blue};
  filter: blur(184px);
  transform: rotate(15deg);
`

export const BottomEffect = styled.div`
  position: absolute;
  left: calc(50% - 891px / 2 - 2.5px);
  top: 235px;
  width: 891px;
  height: 52px;
  background: ${(props) => props.theme.blue};
  filter: blur(106px);
`
