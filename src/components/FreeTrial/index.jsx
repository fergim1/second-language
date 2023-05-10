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
} from "../../styles/FreeTrial"

////////////////// CONTEXT ///////////////////////////////////////////
import { useContext, useState } from "react"
import { AppContext } from "../../context"


////////////// ICONS ///////////////////////////////////////////////
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

////////////// TEXT ///////////////////////////////////////////////
import { TEXT_FREE_TRIAL as textSection } from "../../constant"
import { getText } from "../../utils"

// const url = import.meta.env.VITE_URL_FREE_TRIAL_FORM





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


  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(form)
    setLoading(false)

  }

  return (
    <ContainerFreeTrial id={language === 'en' ? 'Free Trial' : 'Prueba Gratis'}>

      <GridContainer container spacing={{ sm: 4, md: 2 }} >

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

          <WrapperForm>

            <FormGroupContact >

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

              <TextHelper >
                {text.fieldsRequerid}
              </TextHelper>

              <ButtomContactForm
                type="submit"
                endIcon={!loading ? <ArrowOutwardIcon /> : ''}
                onClick={handleSubmit}
              >
                {
                  !loading
                    ? text.buttonText
                    : <SpinnerInButton size={'24px'} />
                }
              </ButtomContactForm>

            </FormGroupContact>
          </WrapperForm>

        </GridItemRightBottom>

      </GridContainer>


    </ContainerFreeTrial>
  )
}

export default FreeTrial