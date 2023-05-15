
import styled from "@emotion/styled";
import {
  Box,
  // Button,
  Grid,
  Typography
} from "@mui/material";



export const ContainerServices = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 70px)',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '70px',
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
  [theme.breakpoints.down('md')]: {
    padding: '0px 20px 0px 50px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 30px 0px 30px',
    alignItems: 'center'

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
  marginBottom: '60px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
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
  display: 'grid',
  placeContent: 'center',
  height: 'calc(100vh - 70px)',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
  },
}))

export const WrapperListServices = styled(Box)(({ theme }) => ({
  width: '40vw',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  borderRadius: '20px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    alignItems: 'center',
    paddingLeft: '60px'
  },
}))

export const WrapperItem = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  display: 'flex',
  color: '#787976',
  justifyContent: 'center',
  alignItems: 'start',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '0 30px',
    justifyContent: 'start',
  },
  '&:hover': {
    color: theme.palette.secondary.main
  },
}))

export const TextItem = styled(Typography)(({ theme }) => ({
  marginLeft: '10px',
  cursor: 'pointer',
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



