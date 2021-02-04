import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import image from "../static/Spin-1s-200px.gif";
import Pagination from "./Pagination";
import Form from "./Form";
import ReactTooltip from "react-tooltip";

const MainPage = () => {
    const [object, setObject] = useState({ movies:[], loading: true, length: 0 });
    const [message, setMessage] = useState("Godfather");
    const [search, setSearch] = useState(true);
    const [page, setPage] = useState(1);
    
    console.log(object, search, message);
    

    //api call
    useEffect(() => {
            let url = 'http://www.omdbapi.com/?apikey=6598a88d&s=' + message + "&page=" + page;
            fetch(url)
            .then(result => result.json())
            .then(rez => {
                setObject({movies: rez.Search, loading: false, length: rez.totalResults})
            })
    }, [search, setObject])

    if(object.loading){
        return (
            <div className="main-layout">
                <Form search={search} setSearch={setSearch} setMessage={setMessage} setObject={setObject} message={message} setPage={setPage}/>
                <div className="movie-layout-loading">
                    <img src={image}/>
                </div>
            </div>
             )
    }
    else if(!object.movies){
        return (
            <div className="main-layout">
                <Form search={search} setSearch={setSearch} setMessage={setMessage} setObject={setObject} message={message} setPage={setPage}/>
                <h4>Nothing found</h4>
            </div>
        )
    }
    else
        return (
            <div className="main-layout">
                
                <Form search={search} setSearch={setSearch} setMessage={setMessage} setObject={setObject} message={message} setPage={setPage}/>
                
                <div>
                    <h2>Found {object.length} results:</h2>
                    <div className="list">
                        {object.movies.map(movie => (
                            <Link to={`/detail/${movie.imdbID}`} >
                                <Photo title={movie.Title} year={movie.Year} poster={movie.Poster} /> 
                            </Link>
                        ))}
                    </div>
                </div>
                <Pagination page={page} search={search} object={object} setObject={setObject} setSearch={setSearch} setPage={setPage}/>
            </div>
        )
}
export default MainPage; 