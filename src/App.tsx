import './styles.css'

import { ThemeProvider } from '@mui/material'
import theme from '../Themes'

import Page from './Component/pages'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Page></Page>
    </ThemeProvider>
  )
}
