import styled from "@emotion/styled";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography
} from "@mui/material";




export const ContainerFreeTrial = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 0px 0px 0px',
  marginBottom: '70px',
  [theme.breakpoints.down('sm')]: {
    minHeight: '100vh',
    height: 'auto',
    marginBottom: '0px',
  }
}))

export const GridContainer = styled(Grid)(() => ({
  height: '100%',
  margin: '0',
  padding: '0',
}))

//////////////  GRID LEFT TOP //////////////////////////////
//////////////  GRID LEFT TOP //////////////////////////////
export const GridItemLeftTop = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  height: 'calc(100vh - 70px)',
  lineHeight: '0',
  padding: '0',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    alignItems: 'center',
  },
}))

export const WrapperInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  padding: '0px 70px 0px 90px',
  [theme.breakpoints.down('lg')]: {
    padding: '0px 40px 0px 40px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0px 10px 0px 40px',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    padding: '30px 30px 0px 30px',
  },
}))

export const TitleSection = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: '600',
  margin: '0 0 4px 0',
  letterSpacing: '-0.06em',
  color: theme.palette.secondary.main,
  fontFamily: "'Inter', sans-serif",
  lineHeight: '1',
  padding: '0',
  textAlign: 'start',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '32px',
    textAlign: 'center',
  },
}))

export const Caption = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#de6c93',
  textTransform: 'uppercase',
  marginBottom: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px'
  },
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: '600',
  color: '#fff',
  lineHeight: '1.1',
  marginBottom: '20px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  textAlign: 'start',
  [theme.breakpoints.down('md')]: {
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    fontSize: '24px',
  },
}))

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: '#fff',
  fontWeight: '400',
  lineHeight: '20px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  textAlign: 'start',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}))


//////////////  GRID RIGHT BOTTOM //////////////////////////////
//////////////  GRID RIGHT BOTTOM //////////////////////////////
export const GridItemRightBottom = styled(Grid)(({ theme }) => ({
  width: '100vw',
  display: 'grid',
  placeContent: 'center',
  height: 'calc(100vh - 70px)',
  padding: '0px',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'start',
  },
}))

export const WrapperForm = styled(Box)(({ theme }) => ({
  width: '40vw',
  height: 'auto',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
  [theme.breakpoints.down('sm')]: {
    width: '90vw',
    marginTop: '40px',
    marginBottom: '40px',
  },
}))



export const FormGroupContact = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  width: '90%',
}))

export const FormControlContact = styled(FormControl)(() => ({
  marginBottom: '14px',
  width: '100%',
  '.MuiOutlinedInput-root': {
    height: '32px',
  },
  '.MuiInputBase-input': {
    color: 'white',
    fontWeight: '200',

    '&:focus': {
      color: 'white'
    }
  }
}))

export const InputLabelForm = styled(InputLabel)(() => ({
  fontSize: '12px',
  color: '#b5b5b5',

}))

export const OutlinedInputForm = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: '20px',
  height: '46px',
  backgroundColor: '#392092',
  '.MuiOutlinedInput-notchedOutline': {
    border: '1px solid #5b4999',
  },
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main
    }
  },

}))

export const TextHelper = styled('span')(() => ({
  color: '#b5b5b5',
  fontSize: '10px',
  marginLeft: '12px',
  marginBottom: '6px',
  // fontFamily: 'Inter',
  fontWeight: '400',
}))

export const ButtomContactForm = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: '#fff',
  borderRadius: '20px',
  fontWeight: 'bold',
  width: '100%',
  height: '34px',
  margin: '14px 0px',
  border: '1px solid transparent',
  '&:hover': {
    border: '1px solid white',
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

}))