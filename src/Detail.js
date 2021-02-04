import React, { useEffect, useState } from "react";
import image from "../static/Spin-1s-200px.gif";

const Detail = ({id}) => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://www.omdbapi.com/?apikey=6598a88d&i=' + id)
        .then(rez => rez.json())
        .then(rez =>{
            setMovie(rez);
            setLoading(false);
        })
    }, [])
    if(loading){
        return (
            <div className="movie-layout-loading">
                <div className="loading-image">
                    <img src={image}/>
                </div>
            </div>
        )
    }
    return (
        <div className="movie-layout">
            <div className="image">
                <img src={movie.Poster} />
            </div>
            <div className="description">
                <h1>{movie.Title} ({movie.Year})</h1>
                <vr></vr>
                <h3> {movie.Rated}  |  {movie.Runtime}  |  {movie.Genre}  |  {movie.Released}</h3>
                <div className="details-description">
                    <div>{movie.Plot}</div>
                    <div>{movie.Director}</div>
                </div>
            </div>
        </div>
    )
}

export default Detail;