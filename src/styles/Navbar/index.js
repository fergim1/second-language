////////////////// MATERIAL UI ////////////////////////////////////////////
import styled from "@emotion/styled";
import {
  Box,
  Stack,
} from "@mui/material";

////////////////// ICONS //////////////////////////////////////////////
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
export const WrapperNavbar = styled(Stack)(({ theme }) => ({
  position: 'sticky',
  top: '0',
  left: '0',
  right: '0',
  // width: '100%',
  height: '70px',
  flexDirection: 'row',
  background: theme.palette.primary.main,
  padding: '0 0 0 16px',
  margin: '0',
  zIndex: '10',
  [theme.breakpoints.down('sm')]: {
    height: '50px',
    padding: '0'
  },
}))

export const WrapperMenu = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75px',
    cursor: 'pointer',
  }
}))

export const IconMenu = styled(MenuIcon)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    color: theme.palette.secondary.main
  }
}))

export const IconClose = styled(CloseIcon)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    color: theme.palette.secondary.main
  }
}))

export const WrapperLogo = styled(Box)(({ theme }) => ({
  flexGrow: '1',
  display: 'flex',
  placeItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

export const Logo = styled('img')(() => ({
  width: '60px',
  cursor: 'pointer',
}))

export const WrapperItems = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }

}))

export const ItemNav = styled('button')(({ theme }) => ({
  background: 'transparent',
  fontFamily: theme.typography.fontFamily,
  padding: '16px',
  color: 'white',
  fontSize: '16px',
  boxShadow: 'none',
  textTransform: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  borderColor: 'transparent',
  '&:hover': {
    color: theme.palette.secondary.main
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  }
}))

export const WrapperLanguage = styled(Box)(({ theme }) => ({
  display: 'flex',
  placeItems: 'center',
  width: '10%',
  minWidth: '75px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    placeItems: 'center',
    width: '75px',
  }

}))
