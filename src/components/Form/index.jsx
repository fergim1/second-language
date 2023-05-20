import { useContext, useRef, useState } from "react";

///////////////////// Email JS ///////////////////////////////////
import emailjs from 'emailjs-com'

///////////////////// Components Styles ///////////////////////////////////
import {
  FormGroupContact,
  FormControlContact,
  InputLabelForm,
  OutlinedInputForm,
  TextAreaForm,
  ButtomContactForm,
  SpinnerInButton,
  ImageSent,
  WrapperImageSent,
  WrapperForm,
  TitleForm,
  TextHelper,
  TextError,
} from "../../styles/Form";

////////////// Icons ////////////////////////////////////////////////////////
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

////////////// Alert ////////////////////////////////////////////////////////
import { AlertForm } from "../AlertForm";

//////////////  Image Email: url Cloudinary  ///////////////////////////
import { LINKS_IMAGES } from '../../constant'

////////////////// Texts Book Now  ///////////////////////////////////∫
import { TEXT_FORM } from "../../constant";

//////////////  Context  ///////////////////////////
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";



////////////// MAIN COMPONENT - Form ///////////////////////////////////////////////////
////////////// MAIN COMPONENT - Form ///////////////////////////////////////////////////
const Form = ({ titleForm }) => {
  ///////  Context  //////////////////
  const { language } = useContext(AppContext)
  const text = useLanguage(language, TEXT_FORM)

  ///////  States  //////////////////
  const [alertOpen, setAlertOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState({
    email: false,
    mobile: false
  })
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    mobile: '',
    message: '',
  })
  const formElement = useRef();

  ///////  Functions  //////////////////
  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const ErrorHelper = () => {
    if (!error.mobile && !error.email) {
      return <TextHelper> {text.inputMessageTextHelp} </TextHelper>
    }
    if (error.email && !error.mobile) {
      return <TextError> {text.invalidEmail} </TextError>
    }
    if (error.mobile && !error.email) {
      return <TextError> {text.invalidMobile} </TextError>
    }
    if (error.email && error.mobile) {
      return (
        <>
          <TextError> {text.invalidEmail} </TextError>
          <TextError> {text.invalidMobile} </TextError>
        </>
      )
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, city, mobile, message } = form
    if (!name || !email || !city || !mobile || !message) {
      return setAlertOpen(true);
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && /^[0-9+]{3,}$/.test(mobile)) {
      return setError({ email: true, mobile: false })
    }
    if (!/^[0-9+]{3,}$/.test(mobile) && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return setError({ email: false, mobile: true })
    }
    if (!/^[0-9+]{3,}$/.test(mobile) && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return setError({ email: true, mobile: true })
    }
    setLoading(true)
    emailjs.sendForm('second-language-gmail', 'contact-form', formElement.current, 'vFm5rPd9Tiy3sZi6M')
      .then((result) => {
        console.log(result)
        if (result.text) {
          setLoading(false)
          setSent(true)
        }
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <>
      {
        alertOpen
        &&
        <AlertForm
          open={alertOpen}
          setOpen={setAlertOpen}
          form={form}
        />
      }
      {
        !sent
          ?
          <WrapperForm>
            <TitleForm>
              {titleForm}
            </TitleForm>

            <FormGroupContact ref={formElement} >
              <FormControlContact variant="outlined" size='small' >
                <InputLabelForm color='secondary' htmlFor="name"> {text.inputName} </InputLabelForm>
                <OutlinedInputForm
                  value={form.name}
                  name='name'
                  onChange={(e) => handleInputChange(e)}
                  label={text.inputName}
                  color='secondary'
                />
              </FormControlContact>

              <FormControlContact variant="outlined" sx={{ mb: '10px' }} size='small'>
                <InputLabelForm color='secondary' htmlFor="email" > {text.inputEmail} </InputLabelForm>
                <OutlinedInputForm
                  value={form.email}
                  name='email'
                  onChange={(e) => handleInputChange(e)}
                  label={text.inputEmail}
                  color='secondary'
                />
              </FormControlContact>

              <FormControlContact variant="outlined" sx={{ mb: '10px' }} size='small'>
                <InputLabelForm color='secondary' htmlFor="city" > {text.inputCity} </InputLabelForm>
                <OutlinedInputForm
                  value={form.city}
                  name='city'
                  onChange={(e) => handleInputChange(e)}
                  label={text.inputCity}
                  color='secondary'
                />
              </FormControlContact>

              <FormControlContact variant="outlined" sx={{ mb: '10px' }} size='small'>
                <InputLabelForm color='secondary' htmlFor="mobile" > {text.inputMobile} </InputLabelForm>
                <OutlinedInputForm
                  value={form.mobile}
                  name='mobile'
                  onChange={(e) => handleInputChange(e)}
                  label={text.inputMobile}
                  color='secondary'
                />
              </FormControlContact>

              <TextAreaForm
                size='small'
                value={form.message}
                name='message'
                onChange={(e) => handleInputChange(e)}
                color='secondary'
                id="outlined-multiline-static"
                label={text.inputMessage}
                multiline
                rows={2}
              />

              <ErrorHelper />

              <ButtomContactForm
                type="submit"
                endIcon={!loading ? <ArrowOutwardIcon /> : ''}
                onClick={sendEmail}
              >
                {
                  !loading
                    ? text.buttonText
                    : <SpinnerInButton size={'24px'} />}
              </ButtomContactForm>
            </FormGroupContact>
          </WrapperForm>
          :
          <WrapperImageSent>
            <ImageSent src={LINKS_IMAGES.emailSent} alt='email-sent' width='170px' height='150px' />
          </WrapperImageSent>
      }
    </>
  )

}

export { Form }