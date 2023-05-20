////////////////// CONTEXT ///////////////////////////////////////////
import { useContext } from "react";
import { AppContext } from "../../context";

///////////////////// CUSTOM STYLES COMPONENTS ////////////////////////////
import {
  ContainerAboutUs,
  GridContainer,
  GridItemLeftTop,
  WrapperInfo,
  TitleSection,
  Title,
  Text,
  GridItemRightBottom,
  WrapperVideo,
} from "../../styles/AboutUs"

////////////// TEXT ///////////////////////////////////////////////
import { TEXT_ABOUT_US as textSection } from "../../constant"
import { getText } from "../../utils"

////////////// LINK VIDEO ///////////////////////////////////////////////
const URL_VIDEO = import.meta.env.VITE_URL_VIDEO_ABOUT_US


////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function AboutUs () {
  const { language } = useContext(AppContext)
  const text = getText({ language, textSection })

  return (
    <ContainerAboutUs id={language === 'en' ? 'About Us' : 'Nosotros'}>

      <GridContainer container spacing={{ xs: 0, md: 2 }} >

        {/* ////////////////////////////////////  GRID LEFT TOP ////////////////////////////// */}
        <GridItemLeftTop item xs={12} md={6} >
          <WrapperInfo>
            <TitleSection > {text.titleSection} </TitleSection>
            <Title> {text.title}</Title><br />
            <Text> {text.text1} </Text>
            <Text> {text.text2} </Text>
          </WrapperInfo>
        </GridItemLeftTop>

        {/* ////////////////////////////////////  GRID RIGHT BOTTOM  ////////////////////////////// */}
        <GridItemRightBottom item xs={12} md={6} >
          <WrapperVideo >
            <iframe
              src={URL_VIDEO}
              width="90%"
              height="90%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            >
            </iframe>

          </WrapperVideo>
        </GridItemRightBottom>

      </GridContainer>

    </ContainerAboutUs>
  )
}

export default AboutUs