import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0a0a0a',
    },
    secondary: {
      main: '#757575',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
    text: {
      primary: '#0a0a0a',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
      letterSpacing: '-1.5px',
    },
    h2: {
      fontWeight: 600,
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      letterSpacing: '-0.5px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 30px',
          boxShadow: 'none',
        },
        containedPrimary: {
          color: '#fff',
          backgroundColor: '#0a0a0a',
          '&:hover': {
            backgroundColor: '#333',
            boxShadow: 'none',
          },
        },
        outlinedPrimary: {
            borderColor: '#0a0a0a',
            color: '#0a0a0a',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                borderColor: '#0a0a0a',
            }
        }
      },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                boxShadow: 'none',
            }
        }
    }
  },
});

export default theme;