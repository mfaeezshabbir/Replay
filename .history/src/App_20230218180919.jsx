import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChannelDetail from './Components/ChannelDetail'
import HomeFeed from './Components/HomeFeed'
import Navbar from './Components/Navbar'
import VideoPlayer from './Components/VideoPlayer'
import SearchedFeed from './Components/SearchedFeed'
 
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#ooo'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<HomeFeed/>}/>
        <Route path="/video/:id" element={<VideoPlayer/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/search/:searched" element={<SearchedFeed/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
