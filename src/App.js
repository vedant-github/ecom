import { Box } from '@mui/system';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Page1 from './components/Page1'

function App() {
  return (
    <div>
      <Navbar />
      <Box style={{marginTop: 70}}>
        <Page1 />
      </Box>

    </div>
  );
}

export default App;
