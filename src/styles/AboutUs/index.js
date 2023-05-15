import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Typography
} from "@mui/material";


export const ContainerAboutUs = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 70px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '70px',
  [theme.breakpoints.down('md')]: {
    minHeight: 'calc(100vh - 50px)',
    height: 'auto',
    paddingTop: '30px',
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
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    marginTop: '60px',
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
    padding: '0px 60px 10px 60px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 30px 0px 30px',
    alignItems: 'center'

  },
}))


export const TitleSection = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: '600',
  margin: '0 0 4px 0',
  letterSpacing: '-0.06em',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitFontSmoothing: 'antialiased',
  backgroundImage: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  fontFamily: "'Inter', sans-serif",
  lineHeight: '1',
  padding: '0',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '32px',
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
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
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
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    // maxHeight: '60vh',
  },
}))

export const WrapperVideo = styled(Box)(({ theme }) => ({
  width: '50vw',
  maxWidth: "640px",
  height: "360px",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
  [theme.breakpoints.down('md')]: {
    width: '70vw',
  },
  [theme.breakpoints.down('sm')]: {
    height: "40vh",
    // alignItems: 'start',
    width: '90vw',
    marginBottom: '32px',
  },
}))

