import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
 
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#ooo'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" element={</>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
