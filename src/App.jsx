import React from "react";
import { useEffect, useState } from "react";
import "./App.css"
import searchIcon from "./search.svg"
import MoiveCard from "./MoiveCard";

// API MoiveKey = fcb37b

const url = "http://www.omdbapi.com?apikey=fcb37b";
const moive = {
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
}


const App = () => {
    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMoives = async (title) => {
        const info = await fetch(`${url}&s=${title}`);
        const data = await info.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMoives(moive);
    }, [])
    return(
        <div className="app">
            <h1>Moive Land</h1>
            <div className="search">
                <input value = {searchTerm} placeholder = {"search for movies"} onChange = {(e) => setSearchTerm(e.target.value)}/>
                <img src={searchIcon} alt = "search" onClick={(e) => {searchMoives(searchTerm)}}/>
            </div>
            {
                movies?.length > 0 ?(
                <div className="container">
                     {movies.map((movie) => (
                        <MoiveCard movie={movie} />
                 ))}
                </div> 
                ): (
                <div className="empty">
                    <h2>No movies</h2>
                </div> 
                )}
            
                      
        </div>
    );
}







export default App;
