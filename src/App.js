import * as React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Rightbar from './Components/Rightbar';
import Feed from './Components/Feed';
import Add from './Components/Add'
import { useState } from 'react';
import {Box, createTheme, Stack, ThemeProvider} from '@mui/material';



function App() {

  const [mode, setMode] = useState('light');
  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
