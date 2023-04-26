////////////////// CONTEXT ///////////////////////////////////////////
import { useContext } from "react"
import { AppContext } from "../../context"

////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
import {
  ContainerExperiences
} from "../../styles/Experiences"



////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function Experiences () {
  const { language } = useContext(AppContext)

  return (
    <ContainerExperiences id={language === 'en' ? 'Experiences' : 'Experiencias'}>
      <h1>Experiences</h1>
    </ContainerExperiences>
  )
}

export default Experiences