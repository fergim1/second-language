import {
  ///////////////////// CUSTOM STYLES COMPONENTS ////////////////////////////
  ContainerFreeTrial,
  GridContainer,
  GridItemLeftTop,
  WrapperInfo,
  TitleSection,
  Title,
  Caption,
  Text,
  GridItemRightBottom,
  WrapperForm,
  OutlinedInputForm,
  FormControlContact,
  InputLabelForm,
  FormGroupContact,
  ButtomContactForm,
  SpinnerInButton,
  TextHelper,
  WrapperImageSent,
  ImageSent,
} from "../../styles/FreeTrial"

////////////////// CONTEXT ///////////////////////////////////////////
import { useContext, useRef, useState } from "react"
import { AppContext } from "../../context"

///////////////////// Email JS ///////////////////////////////////
import emailjs from 'emailjs-com'

//////////////  Image Email: url Cloudinary  ///////////////////////////
import { LINKS_IMAGES } from '../../constant'

////////////// ICONS ///////////////////////////////////////////////
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

////////////// TEXT ///////////////////////////////////////////////
import { TEXT_FREE_TRIAL as textSection } from "../../constant"
import { getText } from "../../utils"





////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function FreeTrial () {
  const { language } = useContext(AppContext)
  const text = getText({ language, textSection })
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
  })
  const [loading, setLoading] = useState(false)
  const formElement = useRef();
  const [sent, setSent] = useState(false)




  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    // const { name, email, city, mobile, message } = form
    // if (!name || !email || !city || !mobile || !message) {
    //   return setAlertOpen(true);
    // }
    // if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && /^[0-9+]{3,}$/.test(mobile)) {
    //   return setError({ email: true, mobile: false })
    // }
    // if (!/^[0-9+]{3,}$/.test(mobile) && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    //   return setError({ email: false, mobile: true })
    // }
    // if (!/^[0-9+]{3,}$/.test(mobile) && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    //   return setError({ email: true, mobile: true })
    // }
    setLoading(true)
    emailjs.sendForm('second-language-gmail', 'free-trial', formElement.current, 'vFm5rPd9Tiy3sZi6M')
      .then((result) => {
        console.log(result)
        if (result.text) {
          setLoading(false)
          setSent(true)
        }
      }, (error) => {
        console.log(error.text);
      });
    formElement.current.reset()
  }

  return (
    <ContainerFreeTrial id={language === 'en' ? 'Free Trial' : 'Prueba Gratis'}>

      <GridContainer container spacing={{ xs: 0, md: 2 }} >

        {/* ////////////////////////////////////  GRID LEFT TOP ////////////////////////////// */}
        <GridItemLeftTop item xs={12} sm={6} >
          <WrapperInfo>
            <TitleSection > {text.titleSection} </TitleSection>
            <Caption > {text.caption}  </Caption>
            <Title> {text.title}</Title><br></br>
            <Text> {text.text} </Text>
          </WrapperInfo>
        </GridItemLeftTop>

        {/* ////////////////////////////////////  GRID RIGHT BOTTOM  ////////////////////////////// */}
        <GridItemRightBottom item xs={12} sm={6} >

          {
            !sent
              ? <WrapperForm>
                <FormGroupContact ref={formElement} >

                  <FormControlContact variant="outlined" size='small' required>
                    <InputLabelForm color='secondary' htmlFor="name" >{text.inputName}</InputLabelForm>
                    <OutlinedInputForm
                      value={form.name}
                      name='name'
                      onChange={(e) => handleInputChange(e)}
                      label={text.inputName}
                      color='secondary'
                    />
                  </FormControlContact>

                  <FormControlContact variant="outlined" size='small' required>
                    <InputLabelForm color='secondary' htmlFor="email" >{text.inputEmail}</InputLabelForm>
                    <OutlinedInputForm
                      value={form.email}
                      name='email'
                      onChange={(e) => handleInputChange(e)}
                      label={text.inputEmail}
                      color='secondary'
                    />
                  </FormControlContact>

                  <FormControlContact variant="outlined" size='small' required>
                    <InputLabelForm color='secondary' htmlFor="city" >{text.inputCity}</InputLabelForm>
                    <OutlinedInputForm
                      value={form.city}
                      name='city'
                      onChange={(e) => handleInputChange(e)}
                      label={text.inputCity}
                      color='secondary'
                    />
                  </FormControlContact>

                  <FormControlContact variant="outlined" size='small'>
                    <InputLabelForm color='secondary' htmlFor="mobile" >{text.inputMobile}</InputLabelForm>
                    <OutlinedInputForm
                      value={form.mobile}
                      name='mobile'
                      onChange={(e) => handleInputChange(e)}
                      label={text.inputMobile}
                      color='secondary'
                    />
                  </FormControlContact>

                  <TextHelper >
                    {text.fieldsRequerid}
                  </TextHelper>

                  <ButtomContactForm
                    type="submit"
                    endIcon={!loading ? <ArrowOutwardIcon /> : ''}
                    onClick={sendEmail}
                  >
                    {
                      !loading
                        ? text.buttonText
                        : <SpinnerInButton size={'24px'} />
                    }
                  </ButtomContactForm>

                </FormGroupContact>
              </WrapperForm>

              : <WrapperImageSent>
                <ImageSent src={LINKS_IMAGES.emailSent} alt='image-of-email-sent' width='170px' height='150px' />
              </WrapperImageSent>
          }


        </GridItemRightBottom>

      </GridContainer>


    </ContainerFreeTrial>
  )
}

export default FreeTrial