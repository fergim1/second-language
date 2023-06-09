///////////////////// CUSTOM STYLES COMPONENTS ////////////////////////////
import {
  ContainerContact,
  GridContainer,
  GridItemLeftTop,
  TitleSection,
  WrapperTitle,
  Title,
  GridItemRightBottom,
  WrapperForm,
  WrapperInfoContact,
  WrapperDetail,
  TextWhatsapp,
  TextEmail,
} from "../../styles/Contact"

////////////////// CONTEXT ///////////////////////////////////////////
import { useContext } from "react"
import { AppContext } from "../../context"

////////////// FORM ////////////////////////////////////////////////
import { Form } from "../Form";

////////////// ICONS ///////////////////////////////////////////////
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

////////////// TEXT ///////////////////////////////////////////////
import { TEXT_CONTACT as textSection } from "../../constant"
import { getText } from "../../utils"




////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function Contact () {
  const { language } = useContext(AppContext)
  const text = getText({ language, textSection })


  return (
    <ContainerContact id={language === 'en' ? 'Contact' : 'Contacto'}>
      <GridContainer container spacing={2} >

        {/* ////////////////////////////////////  GRID LEFT TOP ////////////////////////////// */}
        <GridItemLeftTop item xs={12} sm={6} >
          <TitleSection > {text.titleSection} </TitleSection>
          <WrapperTitle>
            <Title> {text.subtitleOne} 👋</Title><br></br>
          </WrapperTitle>

          <WrapperInfoContact>
            <WrapperDetail >
              <WhatsAppIcon />
              <TextWhatsapp
                href='https://wa.me/34687489741' target="_blank" rel="noreferrer" aria-label="Whatsapp"
              >
                +34 687 48 97 41
              </TextWhatsapp>
            </WrapperDetail>

            <WrapperDetail>
              <MailOutlineIcon />
              <TextEmail>secondlanguagemodeon@gmail.com</TextEmail>
            </WrapperDetail>
          </WrapperInfoContact>

        </GridItemLeftTop>

        {/* ////////////////////////////////////  GRID RIGHT BOTTOM  ////////////////////////////// */}
        <GridItemRightBottom item xs={12} sm={6} >
          <WrapperForm elevation={2} >
            <Form titleForm={text.titleForm} />
          </WrapperForm>
        </GridItemRightBottom>

      </GridContainer>
    </ContainerContact>
  )
}

export default Contact