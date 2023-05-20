
////////////////// CONTEXT ////////////////////////////////////////////
import { AppProvider } from "./context"

////////////////// MATERIAL UI ////////////////////////////////////////////
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme.js'
import {
  // Box, 
  Container,
  // Container
} from "@mui/material"

////////////////// SECTIONS ////////////////////////////////////////////
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Experiences from "./components/Experiences"
import Services from "./components/Services"
import FreeTrial from "./components/FreeTrial"
import Contact from "./components/Contact"
import { useEffect } from "react"
import { Footer } from "./components/Footer"



////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function App () {

  const scrollToTop = () => {
    document.getElementById('Home').scrollIntoView({ behavior: "smooth", block: "end" })
  }

  useEffect(() => {
    scrollToTop()
  }, [])


  return (
    <AppProvider>
      <ThemeProvider theme={theme}>

        <Container maxWidth='false'
          sx={{
            maxWidth: '100vw',
            height: 'auto',
            // margin: { xs: '0px' },
            margin: '0px',
            padding: { xs: '0px' },
            // border: '2px solid red',
            boxSizing: 'border-box',
            fontFamily: "'Encode Sans Expanded', sans-serif",
          }}
        >
          <Navbar scrollToTop={scrollToTop} />
          <Home />
          <AboutUs />
          <Experiences />
          <Services />
          <FreeTrial />
          <Contact />
          <Footer />
        </Container>

      </ThemeProvider>
    </AppProvider>
  )
}

export default App
