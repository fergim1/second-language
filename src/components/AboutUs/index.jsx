////////////////// CONTEXT ///////////////////////////////////////////
import { useContext } from "react";
import { AppContext } from "../../context";

////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
import {
  ContainerAboutUs
} from "../../styles/AboutUs";

////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function AboutUs () {
  const { language } = useContext(AppContext)
  return (
    <ContainerAboutUs id={language === 'en' ? 'About Us' : 'Nosotros'}>
      <h1>
        About Us
      </h1>
    </ContainerAboutUs>
  )
}

export default AboutUs