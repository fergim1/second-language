import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ContainerModal = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
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

export const WrapperInfo = styled(Box)(() => ({
  width: '90%',
  height: '90vh',
  backgroundColor: 'white',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
}))

export const WrapperImage = styled(Box)(({ src }) => ({
  width: '100%',
  height: '40%',
  borderTopRightRadius: '12px',
  borderTopLeftRadius: '12px',
  backgroundImage: `url(${src})`,
  backgroundPosition: 'center',
  overflow: 'hidden',
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '26px',
  fontWeight: '800',
  fontFamily: "'Encode Sans Expanded',sans-serif",
  textAlign: 'center',
  margin: '10px',
  borderBottom: `2px solid ${theme.palette.secondary.main}`,
}))

export const WrapperText = styled(Box)(() => ({
  width: '100%',
  height: '50%',
  overflowY: 'scroll',
  // padding: '20px',
}))

export const Description = styled(Typography)(() => ({
  fontSize: '12px',
  fontFamily: "'Encode Sans Expanded',sans-serif",
  padding: '20px',
}))

export const WrapperButton = styled(Box)(() => ({
  width: '100%',
  height: '10%',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  paddingRight: '24px',
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