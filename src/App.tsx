import React from 'react';
import './App.css';
import ContentBox from './components/ContentBox';
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'
import TopNav from './components/TopNav';
function App() {
  const theme : any = createTheme({
    palette: {
      primary: {
        main: '#111111',
      },
      secondary: {
        main: '#FFFFFF',
      }
    },
    typography: {
      fontFamily: 'Inter',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="primary.main" sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        flexDirection: 'column',
      }}>
        <TopNav />
        <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'left',
          paddingTop: '64px',
          paddingRight: '206px',
          paddingBottom: '0',
          paddingLeft: '206px',
          mt: '64px',
          '@media (max-width: 600px)': {
              width: '100%',
              paddingRight: '24px',
              paddingLeft: '24px',
              '& > *': {
                  minWidth: '239px',
                  flexShrink: 0,
              },
          },
        }}>
          <Typography variant="h4" sx={{ fontSize: '36px', fontWeight: 'bold', color: "secondary.main"}}>Explore Experiences</Typography>
          <ContentBox />
        </Box>
        
      </Box>
    </ThemeProvider>
  );
}

export default App;
