
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";


export const ContainerExperiences = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: 'calc(100vh - 70px)',
  height: 'auto',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '70px',
  [theme.breakpoints.down('md')]: {
    paddingTop: '70px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '50px',
  }
}))
export const WrapperInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 70px 0px 90px',
  width: '100%',
  marginBottom: '30px',
  [theme.breakpoints.down('md')]: {
    padding: '0px 20px 0px 50px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px',
    alignItems: 'center'
  },
}))

export const TitleSection = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: '600',
  margin: '30px 0 4px 0',
  letterSpacing: '-0.06em',
  color: theme.palette.secondary.main,
  fontFamily: "'Inter', sans-serif",
  lineHeight: '1',
  padding: '0',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0px 0 4px 0',
    textAlign: 'center',
  },
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: '600',
  color: '#fff',
  lineHeight: '1.1',
  marginBottom: '60px',
  fontFamily: "'Encode Sans Expanded', sans-serif",
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
}))

export const TableResponsive = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  width: '100%',
  borderRadius: '2px solid red',
  gap: '20px',
}))

export const WrapperItem = styled(Box)(({ src }) => ({
  width: '100%',
  minHeight: '200px',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: '.3s ease',
  backgroundImage: `url(${src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: 'cover',
  position: 'relative',
  cursor: 'pointer',
  '&:hover': {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${src})`,
    transform: 'scale(1.02)',
  },

}))

export const TextItem = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '16px',
  textShadow: '1px 1px black',
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  fontFamily: "'Encode Sans Expanded',sans-serif",
  transition: '.3s ease',
  '&:hover': {
    borderBottom: `4px solid ${theme.palette.secondary.main}`,
  }
}))