
import styled from "@emotion/styled";
import { Box } from "@mui/material";


export const ContainerContact = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 70px)',
  border: '2px solid red',
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 50px)',
  }
}))