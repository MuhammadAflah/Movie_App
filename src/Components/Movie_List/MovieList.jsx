import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Movies from '../../../db.json'
import Api from "../../Api/movies"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { setMovieId } from '../../state';
import { useDispatch, useSelector } from 'react-redux';

const MovieList = () => {

  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movieId = useSelector((state)=>state.movieId)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Api.get('Movies');
        setMovies(response.data); // Fix: set movies as an array of movie objects
        console.log(response);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchMovies();
  }, []);

  // const handleMovieClick = (id) => {
  //   dispatch(setMovies(id));
  //   Navigate(`/movie/${movieId}`);
  // }
  
  const handleClick = (movieId) => {
    dispatch(setMovieId(movieId)); // dispatch the setMovieId action with the movieId
    navigate(`/movie/${movieId}`);
  };
  

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      backgroundImage: 'url("https://img.freepik.com/free-vector/movie-film-strip-blue-background_1017-33458.jpg")',
      backgroundSize: "cover",
      backgroundRepeat: "noRepeat",
      // opacity: 0.5,
      objectFit: "cover",
    }}>
      {movies?.map((movie, index) => ( // movies is now an array, so map function can be used
      // <Link to="/movie_details" onClick={() => dispatch(setMovieId({movieId: index}))}>
        <Card key={movie.id} onClick={() => handleClick(movie.id)} 
        
        sx={{
           maxWidth: 345, 
           margin: "10px", 
           backgroundColor: "black",
           "&:hover, &:focus": {
            boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.5)",
            transition: "box-shadow all 0.3s ease-in-out",
            borderRadius: "10px"
          },
          "&::hover .overlay": {
            transform: "scale(4)",
          },
           }}
          //  onClick={() => handleMovieClick(movie.id)}
           >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={movie.poster}
              alt={movie.movie_name}
            />
            <CardContent
              sx={{ color: "white" }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {movie.movie_name}
              </Typography>
              <Typography variant="body2" >
                {movie.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        // </Link>
      ))}
      <Link to="/movie_details">
      <Button>
           next
      </Button>
      </Link>
    </div>
  );
}

export default MovieList
