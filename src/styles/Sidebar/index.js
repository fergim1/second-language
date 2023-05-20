////////////////// MATERIAL UI ////////////////////////////////////////////
import styled from "@emotion/styled";
import {
  Box,
} from "@mui/material";

////////////////// ANIMATION ////////////////////////////////////////////
import { keyframes } from "@mui/material/styles";

const slideInLeft = keyframes`
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`

////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
export const WrapperSideBar = styled(Box)(({ theme }) => ({
  position: 'fixed',
  width: '100vw',
  top: '50px',
  bottom: '0',
  backgroundColor: theme.palette.primary.main,
  paddingTop: '40px',
  animation: `${slideInLeft} 0.6s both`,
  zIndex: '2'

}))

export const WrapperItemSidebar = styled(Box)(() => ({
  width: '100%',
  height: '60px',
  marginTop: '18px',
  display: 'flex',
  placeItems: 'center',
  flexDirection: 'column'
}))

export const ItemSidebar = styled('button')(({ theme }) => ({
  background: 'transparent',
  fontFamily: theme.typography.fontFamily,
  padding: '20px',
  color: 'white',
  fontSize: '18px',
  boxShadow: 'none',
  textTransform: 'uppercase',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  borderColor: 'transparent',
  '&:hover': {
    color: theme.palette.secondary.main
  },
}))

