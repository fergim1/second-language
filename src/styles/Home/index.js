
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { LINKS_IMAGES } from "../../constant";

export const ContainerHome = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 70px)',
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${LINKS_IMAGES.homeBackground})`,
  backgroundPosition: 'center',
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 50px)',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${LINKS_IMAGES.homeBackgroundMobile})`,
  }
}))

export const TextCaption = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '20px',
  lineHeight: '0px',
  fontWeight: '700',
  letterSpacing: '1.4px',
  textTransform: 'uppercase',
}))

export const TextTitle = styled(Typography)(({ theme }) => ({
  margin: '0',
  padding: '0',
  color: '#fff',
  fontSize: '70px',
  textAlign: 'center',
  fontFamily: 'Passion One',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '50px',
  }
}))

export const ButtonHome = styled('button')(({ theme }) => ({
  borderRadius: '50px',
  backgroundColor: theme.palette.secondary.main,
  padding: '12px 40px',
  color: 'white',
  fontSize: '18px',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background-color .3s ease-in-out',
  '&:hover': {
    backgroundColor: '#1B0071',
    color: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px',
    fontSize: '16px',
  }
}))