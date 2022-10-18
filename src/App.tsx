import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { SkeletonTheme } from 'react-loading-skeleton'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SkeletonTheme baseColor="#112131" highlightColor="#3A536B">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SkeletonTheme>

      <GlobalStyle />
    </ThemeProvider>
  )
}
