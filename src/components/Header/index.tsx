import {
  BottomEffect,
  HeaderContainer,
  HeaderLogo,
  LeftEffect,
  RightEffect,
} from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <LeftEffect />
      <HeaderLogo>
        <img src={logoImg} alt="" />
        <BottomEffect />
      </HeaderLogo>
      <RightEffect />
    </HeaderContainer>
  )
}
