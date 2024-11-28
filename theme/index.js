import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: 'Playfair_Display',
    h1: {
      "@media (max-width: 500px)": {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      "@media (max-width: 500px)": {
        fontSize: '1.5rem',
      },
    },
    text: {
      fontSize: '1rem',
      color: '#000000',
      "@media (max-width: 500px)": {
        fontSize: '0.8rem',
        maxHeight: '200px',
        overflow: 'auto'
      },
    }
  },
});

export default theme;