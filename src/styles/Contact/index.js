
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
  height: 'calc(100vh - 70px)',
  backgroundColor: '#eeeeee',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '40px',
  // [theme.breakpoints.down('md')]: {
  // paddingTop: '40px',
  // },
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 50px)',
    height: 'auto',

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
  margin: '32px',
  padding: '0',
  [theme.breakpoints.down('md')]: {
    // fontSize: '36px',
    textAlign: 'center',
  },
}))

export const SubtitleOne = styled(Typography)(({ theme }) => ({
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

export const SubtitleTwo = styled(Typography)(({ theme }) => ({
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
    // fontSize: '14px',
    textAlign: 'center',
  },
  '&:hover': {
    color: theme.palette.primary.main
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
    // fontSize: '14px',
    textAlign: 'center',
  },
  '&:hover': {
    color: theme.palette.primary.main
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
