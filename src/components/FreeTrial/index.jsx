////////////////// CONTEXT ///////////////////////////////////////////
import { useContext } from "react"
import { AppContext } from "../../context"

////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
import {
  ContainerFreeTrial
} from "../../styles/FreeTrial"



////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function FreeTrial () {
  const { language } = useContext(AppContext)

  return (
    <ContainerFreeTrial id={language === 'en' ? 'Free Trial' : 'Prueba Gratis'}>
      <h1>Free Trial</h1>
    </ContainerFreeTrial>
  )
}

export default FreeTrial