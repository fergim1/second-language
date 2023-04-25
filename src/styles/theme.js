import { createTheme } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: { main: '#1b007b' },
    secondary: { main: '#fc0071' },
    // background: {
    //   default: '#bdbdbd'
    // }
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontSize: '24px' },
  },
},
)

export { theme }