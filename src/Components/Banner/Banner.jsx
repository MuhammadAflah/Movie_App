
import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material";
import Movies from '../../../db.json'
import Api from "../../Api/movies"

const Banner = () => {

    const [movie, setMovie] = useState();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await Api.get('Movies')
                const items = response.data;
                const randomIndex = Math.floor(Math.random() * items.length);
                const randomMovie = items[randomIndex];
                console.log(randomMovie);
                setMovie(randomMovie);
            } catch (error) {
                console.log(error.response.data);
            }

        }
        fetchMovies()
    }, []);

    return (
        <Box sx={{padding: 0, margin: 0}}>
        <Box
            sx={{
                backgroundImage: movie ? `url(${movie.poster})` : "",
                backgroundSize: "cover",
                backgroundRepeat: "noRepeat",
                opacity: 0.5,
                objectFit: "cover",
                height: 500,
                maxWidth: "100%",
                color: "white",
                position: "relative",
            }}
        />
            <Box
                // sx={{
                //     paddingTop: 140,
                //     height: 190,
                //     paddingLeft: 15,
                // }}
            >
                <Box component="h1"
                    sx={{
                        fontSize: "4rem",
                        fontWeight: 900,
                        paddingBottom: "0.3rem",
                        width: "45rem",
                        lineHeight: 1.3,
                        paddingTop: "1rem",
                        height: 80,
                        maxWidth: 360,
                        color: "black",
                        position: "absolute",
                        top: "20%",
                        left: "20%",
                        transform: "translate(-50%, -50%)",
                        // backgroundColor: "rgba(255, 255, 255, 0.7)",
                        padding: "1rem",
                        borderRadius: "10px",
                        textAlign: "center",
                    }}
                >
                    {movie && movie.movie_name}
                </Box>
                <Box component="div"
                    sx={{
                        width: "80rem",
                        lineHeight: 1.3,
                        paddingTop: "1rem",
                        fontSize: "1.2rem",
                        height: 80,
                        maxWidth: 360,
                        color: "black",
                        position: "absolute",
                        top: "55%",
                        left: "20%",
                        transform: "translate(-50%, -50%)",
                        // backgroundColor: "rgba(255, 255, 255, 0.7)",
                        padding: "1rem",
                        borderRadius: "10px",
                        textAlign: "center",
                    }}
                >
                    {movie && <p>{movie.description}</p>}
                </Box>
                <Box>
                    {/* <img src={movie && movie.poster} alt="poster" /> */}
                </Box>
            </Box>
        </Box>
    );
}

export default Banner;

