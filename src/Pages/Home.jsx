import { Box } from '@mui/material'
import React from 'react'
import Banner from '../Components/Banner/Banner'
import MovieList from '../Components/Movie_List/MovieList'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <Box>
        <Navbar/>
        <Banner/>
        <MovieList/>
    </Box>
  )
}

export default Home