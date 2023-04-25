
////////////////// CONTEXT ////////////////////////////////////////////
import { AppProvider } from "./context"

////////////////// MATERIAL UI ////////////////////////////////////////////
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme.js'
import { Container } from "@mui/material"

////////////////// SECTIONS ////////////////////////////////////////////
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"




////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function App () {

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Container maxWidth='false'
          sx={{
            width: '100%',
            height: 'auto',
            margin: { xs: '0px auto' },
            padding: { xs: '0px' },
            boxSizing: 'border-box',
          }}
        >
          <Navbar />
          <Home />
          <AboutUs />
        </Container>
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
