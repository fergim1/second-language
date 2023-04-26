////////////////// CONTEXT ///////////////////////////////////////////
import { useContext } from "react"
import { AppContext } from "../../context"

////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
import {
  ContainerServices
} from "../../styles/Services"



////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function Services () {
  const { language } = useContext(AppContext)

  return (
    <ContainerServices id={language === 'en' ? 'Services' : 'Servicios'}>
      <h1>Services</h1>
    </ContainerServices>
  )
}

export default Services