import styled from "@emotion/styled";
import { Box, keyframes, Typography } from "@mui/material";

const flipInHorBottom = keyframes`
0% {
  -webkit-transform: rotateX(80deg);
          transform: rotateX(80deg);
  opacity: 0;
}
100% {
  -webkit-transform: rotateX(0);
          transform: rotateX(0);
  opacity: 1;
`

export const ContainerModal = styled(Box)(() => ({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#1414147a',
  display: 'grid',
  placeItems: 'center',
  position: 'fixed',
  zIndex: '100',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  overflowY: 'auto',
}))

export const WrapperInfo = styled(Box)(({ theme }) => ({
  width: '70%',
  height: '90vh',
  backgroundColor: 'white',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  animation: `${flipInHorBottom} 0.8s both`,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100vh',
    borderRadius: '0'
  }
}))

export const WrapperImage = styled(Box)(({ theme, srcsmall, srcbig }) => ({
  width: '100%',
  height: '40%',
  borderTopRightRadius: '12px',
  borderTopLeftRadius: '12px',
  backgroundImage: `url(${srcbig})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url(${srcsmall})`,
    borderRadius: '0',

  }
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '26px',
  fontFamily: "'Encode Sans Expanded',sans-serif",
  textAlign: 'center',
  margin: '12px',
  padding: '12px 0px 12px 0px',
  fontWeight: '600',
  color: '#484a46',
  lineHeight: '1.1',
  borderBottom: `2px solid ${theme.palette.secondary.main}`,
  display: 'inline-block',
}))

export const WrapperText = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '50%',
  overflowY: 'scroll',
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '54%',
  }
}))

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontFamily: "'Encode Sans Expanded',sans-serif",
  padding: '8px 60px',
  textAlign: 'center',
  color: '#787976',
  fontWeight: '400',
  lineHeight: '20px',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 40px',
  }
}))

export const WrapperButton = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '10%',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  paddingRight: '24px',
  borderTop: '1px solid #dfdfdf',
  [theme.breakpoints.down('sm')]: {
    padding: '4px 20px 4px 0px',
    height: '6%',
  }
}))

export const ButtonCloseModal = styled('button')(({ theme }) => ({
  background: 'transparent',
  border: `2px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  padding: '4px',
  borderRadius: '4px',
  fontSize: '14px',
  cursor: 'pointer',
}))