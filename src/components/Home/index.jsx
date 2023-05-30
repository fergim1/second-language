////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
import { useContext } from "react"
import { AppContext } from "../../context"
import {
  ButtonHome,
  ContainerHome,
  TextCaption,
  TextTitle,
} from "../../styles/Home"

////////////////// TEXT SECTION //////////////////////////////////////
import { TEXT_HOME as textSection } from "../../constant"
import { getText } from "../../utils"



////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function Home () {
  const { language } = useContext(AppContext)
  const text = getText({ language, textSection })

  const strollToAboutUs = ({ language }) => {
    const aboutUs = language === 'en' ? 'About Us' : 'Nosotros'
    const aboutUsSection = document.getElementById(aboutUs)
    aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <ContainerHome id='Home'>
      {
        language === 'en'
          ?
          <>
            <TextCaption>{text.caption}</TextCaption>
            <TextTitle> {text.title}</TextTitle>
          </>
          :
          <>
            <TextTitle> {text.title}</TextTitle>
            <TextCaption>{text.caption}</TextCaption>
          </>
      }

      <ButtonHome
        onClick={() => strollToAboutUs({ language })}
        language={language}
      >
        {text.button}
      </ButtonHome>
    </ContainerHome>
  )
}

export default Home