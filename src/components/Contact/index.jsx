////////////////// CONTEXT ///////////////////////////////////////////
import { useContext } from "react"
import { AppContext } from "../../context"

////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
import {
  ContainerContact
} from "../../styles/Contact"



////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function Contact () {
  const { language } = useContext(AppContext)

  return (
    <ContainerContact id={language === 'en' ? 'Contact' : 'Contacto'}>
      <h1>Contact</h1>
    </ContainerContact>
  )
}

export default Contact