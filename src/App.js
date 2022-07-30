import * as React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Rightbar from './Components/Rightbar';
import Feed from './Components/Feed';
import Add from './Components/Add'
import {Box, Stack} from '@mui/material';



function App() {

  return (
      <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
  );
}

export default App;
