import styled from "@emotion/styled";
import { Box, Button, CircularProgress, FormControl, FormGroup, IconButton, InputLabel, OutlinedInput, TextField, Typography, } from "@mui/material";

// /////// Animation
// import { bounceInTop } from "../animation";




export const WrapperForm = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const TitleForm = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  margin: '20px',
  color: '#b7b7b7',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  }
}))

export const FormGroupContact = styled(FormGroup)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  width: '90%',
}))

export const FormControlContact = styled(FormControl)(() => ({
  marginBottom: '10px',
  width: '100%',
  '.MuiOutlinedInput-root': {
    height: '32px',
  }
}))

export const InputLabelForm = styled(InputLabel)(() => ({
  fontSize: '12px',
  color: '#b5b5b5',
}))

export const OutlinedInputForm = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: '20px',
  height: '46px',
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: '#d6d6d6'
  },
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main
    }
  }
}))

export const IconWrapper = styled(IconButton)(() => ({
  color: '#c6c6c6',
}))


export const TextAreaForm = styled(TextField)(({ theme }) => ({
  width: '100%',
  borderRadius: '20px',
  borderColor: '#d6d6d6',
  '.MuiInputBase-root': { borderRadius: '20px', fontSize: '12px', },
  '.MuiFormLabel-root': { fontSize: '12px', color: '#b5b5b5' },
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main
    }
  }
}))

export const TextError = styled('span')(() => ({
  color: 'red',
  fontSize: '14px',
  marginLeft: '12px',
  marginTop: '5px',
}))

export const TextHelper = styled('span')(() => ({
  color: '#b5b5b5',
  fontSize: '10px',
  marginLeft: '12px',
  marginTop: '5px',
  // fontFamily: 'Inter',
  fontWeight: '400',
}))

export const ButtomContactForm = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: '#fff',
  borderRadius: '20px',
  fontWeight: 'bold',
  width: '100%',
  height: '40px',
  margin: '20px 0px',
  '&:hover': {
    background: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
  }
}))

export const SpinnerInButton = styled(CircularProgress)(() => ({
  color: 'white'
}))

export const WrapperImageSent = styled(Box)(() => ({
  width: '260px',
  height: '260px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const ImageSent = styled('img')(() => ({
  width: '170px',
  height: '150px',
  // animation: `${bounceInTop} 1.1s both`
}))