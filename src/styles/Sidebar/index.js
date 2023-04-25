////////////////// MATERIAL UI ////////////////////////////////////////////
import styled from "@emotion/styled";
import {
  Box,
  Container
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
export const WrapperSideBar = styled(Container)(({ theme }) => ({
  position: 'absolute',
  top: '50px',
  width: '100%',
  height: 'calc(100vh - 50px)',
  backgroundColor: theme.palette.primary.main,
  paddingTop: '40px',
  animation: `${slideInLeft} 0.6s both`

}))

export const WrapperItemSidebar = styled(Box)(() => ({
  width: '100%',
  height: '60px',
  marginTop: '6px',
  // border: '2px solid red',
  display: 'flex',
  placeItems: 'center',
  flexDirection: 'column'
}))

export const ItemSidebar = styled('button')(({ theme }) => ({
  background: 'transparent',
  fontFamily: theme.typography.fontFamily,
  padding: '16px',
  color: 'white',
  fontSize: '14px',
  boxShadow: 'none',
  textTransform: 'uppercase',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  borderColor: 'transparent',
  '&:hover': {
    color: theme.palette.secondary.main
  },
}))

