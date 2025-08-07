import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6C63FF',
      light: '#a29bfe',
      dark: '#4a3f8f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00b894',
      light: '#55efc4',
      dark: '#00a884',
      contrastText: '#fff',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#e6f1ff',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      '&:before': {
        content: '"02. "',
        color: '#6C63FF',
        marginRight: '10px',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#ccd6f6',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: '#8892b0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  },
});

export default theme;
