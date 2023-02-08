import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(233, 26%, 24%)',
    },
    secondary: {
      main: 'hsl(136, 65%, 51%)',
    },
    common: {
      dark_blue: 'hsl(233, 26%, 24%)',
      lime_green: 'hsl(136, 65%, 51%)',
      bright_cyan: 'hsl(192, 70%, 51%)',
      grayish_blue: 'hsl(233, 8%, 62%)',
      light_grayish_blue: 'hsl(220, 16%, 96%)',
      very_light_gray: 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    fontFamily: '"Public Sans", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 700,
    },
    body: {
      fontSize: '0.9rem',
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
});

export default theme;
