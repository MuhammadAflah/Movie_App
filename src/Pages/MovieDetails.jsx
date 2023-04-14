import { Box } from '@mui/system'
import React from 'react'
import Movie from '../Components/Movie_Details/Movie'
import Navbar from '../Components/Navbar/Navbar'

const MovieDetails = () => {
  return (
    <Box>
        <Navbar/>
        <Movie/>
    </Box>
  )
}

export default MovieDetails