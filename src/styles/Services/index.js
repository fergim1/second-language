
import styled from "@emotion/styled";
import {
  Box,
  // Button,
  Grid,
  Typography
} from "@mui/material";



export const ContainerServices = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 50px)',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 0px 0px 0px',
  marginBottom: '70px',
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 50px)',
    height: 'auto',
    paddingTop: '50px',
  }
}))

export const GridContainer = styled(Grid)(() => ({
  height: '100%',
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
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    marginBottom: '40px',
    alignItems: 'center',
    justifyContent: 'start',
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
  margin: '30px 0 4px 0',
  letterSpacing: '-0.06em',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundImage: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitFontSmoothing: 'antialiased',
  fontFamily: "'Inter', sans-serif",
  lineHeight: '1',
  padding: '0',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 0 40px 0',
    textAlign: 'center',
  },
}))


export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: '600',
  color: '#484a46',
  lineHeight: '1.1',
  marginBottom: '20px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  [theme.breakpoints.down('md')]: {
    marginBottom: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    fontSize: '24px',
  },
}))

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: '#787976',
  fontWeight: '400',
  lineHeight: '20px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}))





//////////////  GRID RIGHT BOTTOM //////////////////////////////
//////////////  GRID RIGHT BOTTOM //////////////////////////////
export const GridItemRightBottom = styled(Grid)(({ theme }) => ({
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'calc(100vh - 70px)',
  padding: '0',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
  },
}))

export const WrapperListServices = styled(Box)(({ theme }) => ({
  // width: '40vw',
  width: '40vw',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  borderRadius: '20px',
  padding: '0 30px',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    padding: '0',
  },
}))

export const WrapperItem = styled(Box)(({ theme }) => ({
  marginTop: '18px',
  display: 'flex',
  color: '#787976',
  justifyContent: 'center',
  alignItems: 'start',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    padding: '0 40px',
    justifyContent: 'start',
  },
  '&:hover': {
    color: theme.palette.secondary.main
  },
}))

export const WrapperTextCaption = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  display: 'flex',
  color: '#787976',
  justifyContent: 'center',
  alignItems: 'start',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    justifyContent: 'start',
  },
}))



export const TextItem = styled(Typography)(({ theme }) => ({
  marginLeft: '10px',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#787976',
  fontWeight: '400',
  lineHeight: '18px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  [theme.breakpoints.down('sm')]: {
    textAlign: 'start',
  },
  '&:hover': {
    color: theme.palette.secondary.main
  },
}))


export const TextCaption = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  marginTop: '10px',
  color: '#b7b7b7',
  fontWeight: '400',
  lineHeight: '18px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    marginTop: '12px',
    padding: '0 20px',
  },
}))


