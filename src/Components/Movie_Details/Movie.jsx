import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { setMovie } from '../../state';
import { useDispatch, useSelector } from 'react-redux';
import Api from "../../Api/movie_list"


function Movie() {
  const [movie, setMovie] = useState([]);
  const movieId = useSelector((state)=>state.movieId);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     try {
  //       const response = await Api.get('Movies');
  //       console.log(response); // Add this line
  //       setMovie(response.data[movieId]);
  //       console.log(response.data[2],"movieeeeeeeeeeeeeeeeeee");
  //       dispatch(setMovie(movieId)); // dispatch the action here
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchMovie();
  // }, [movieId, dispatch]);


  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await Api.get('Movies');
        console.log(response); // Add this line
        setMovie(response.data[movieId]);
        console.log(response.data[2], 'movieeeeeeeeeeeeeeeeeee');
        dispatch(dispatchSetMovie(movieId)); // dispatch the action with a different function name
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchMovie();
  }, [movieId, dispatch]);

  const dispatchSetMovie = (id) => {
    return (dispatch) => {
      dispatch(setMovie(id));
    };
  };
  return (
    <Box  
    sx={{
        // display: { xs: "none", md: "block" },
        // paddingLeft: "8rem",
        top: 0,
        bottom: 0,
        borderRadius:"20px",
        margin:"30px",
        marginTop:"4rem"
    
     }}
    >
        {/* <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography sx={{fontWeight:"bold"}} variant="body1">aaaaaaa</Typography>
        </Box>
        <Divider/> */}
      <Grid container spacing={4}>
      
        
        <Grid item lg={4}>
          <Box  style={{ textAlign: 'center' }}>
            <img
              src={movie?.poster}
              alt={movie?.movie_name}
              style={{ maxWidth: '100%', borderRadius: '10%' }}
            />
          </Box>
        </Grid>
        {/* <Divider orientation="vertical" /> */}
        <Grid item lg={8}>
        <Typography variant="subtitle1" color="textSecondary" fontWeight="550">Address</Typography>
          <Box lineHeight={2} 
          sx={{
            padding:"16px",
            backgroundColor:"black",
            color:"white",
            maxWidth: '100%'
          }}
          >
            <Box lineHeight={2} sx={{display:"flex"}}>
            <Typography variant="subtitle1" >Movie_name: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            {movie?.movie_name}
            </Typography>
            </Box>
            <hr />
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" >Cast: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            bbbbb
            </Typography>
            </Box>
            <hr />
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" >City: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1">
            dddddd
            </Typography>
            </Box>
            <hr />
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" >Director: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            fffff
            </Typography>
            </Box>
            <hr />
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" >Producer: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            fffff
            </Typography>
            </Box>
            <hr />
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" >Genre: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            fffff
            </Typography>
            </Box>
            <hr />
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" >Ratings: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            fffff
            </Typography>
            </Box>
            <hr />
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" >Description: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            fffff
            </Typography>
            </Box>
            <hr />
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" >Release_date: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            fffff
            </Typography>
            </Box>
            <hr />
            <Box sx={{display:"flex"}}>
            <Typography variant="subtitle1" >Runtime: </Typography>
            <Typography sx={{paddingLeft:"5px", marginTop:"2px",fontWeight:"bold"}} variant="body1" >
            fffff
            </Typography>
            </Box>
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};



export default Movie