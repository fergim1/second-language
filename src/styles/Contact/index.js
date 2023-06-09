
import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Link,
  Paper,
  Typography
} from "@mui/material";


export const ContainerContact = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundColor: '',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '30px',
  paddingBottom: '30px',
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 50px)',
    height: 'auto',
    paddingTop: '0px',
    paddingBottom: '10px',


  }
}))

export const GridContainer = styled(Grid)(() => ({
  height: '100%',
}))

//////////////  GRID LEFT TOP //////////////////////////////
//////////////  GRID LEFT TOP //////////////////////////////
export const GridItemLeftTop = styled(Grid)(({ theme }) => ({
  display: 'grid',
  placeContent: 'center',
  height: '100vh',
  lineHeight: '0',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    minHeight: '40vh',
    marginTop: '40px',
  },
}))

export const TitleSection = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: '800',
  letterSpacing: '-0.06em',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundImage: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  fontFamily: "'Inter', sans-serif",
  WebkitFontSmoothing: 'antialiased',
  lineHeight: '1',
  margin: '0px 32px 12px 32px',
  padding: '0',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}))

export const WrapperTitle = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '0px 30px',
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: '600',
  color: '#484a46',
  lineHeight: '1.1',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    fontSize: '24px',
  },

}))


export const WrapperInfoContact = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '0px 30px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '10px',
  },
}))

export const WrapperDetail = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  display: 'flex',
  color: '#787976',
  justifyContent: 'start',
  alignItems: 'center',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
  '&:hover': {
    color: theme.palette.secondary.main
  },
}))

export const TextWhatsapp = styled(Link)(({ theme }) => ({
  marginLeft: '10px',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '14px',
  color: '#787976',
  fontWeight: '400',
  lineHeight: '24px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
  '&:hover': {
    color: theme.palette.secondary.main
  },
}))

export const TextEmail = styled(Typography)(({ theme }) => ({
  marginLeft: '10px',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '14px',
  color: '#787976',
  fontWeight: '400',
  lineHeight: '24px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
  '&:hover': {
    color: theme.palette.secondary.main
  },
}))



//////////////  GRID RIGHT BOTTOM //////////////////////////////
//////////////  GRID RIGHT BOTTOM //////////////////////////////
export const GridItemRightBottom = styled(Grid)(({ theme }) => ({
  width: '100vw',
  display: 'grid',
  placeContent: 'center',
  height: '100vh',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    minHeight: '60vh',
    marginBottom: '20px'
  },
}))

export const WrapperForm = styled(Paper)(({ theme }) => ({
  width: '40vw',
  height: 'auto',
  backgroundColor: '#f7f7f7',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
  [theme.breakpoints.down('sm')]: {
    width: '90vw',
    marginBottom: '20px',
  },

}))
