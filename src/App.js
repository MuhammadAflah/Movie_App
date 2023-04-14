import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

const App = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie" element={<MovieDetails/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;