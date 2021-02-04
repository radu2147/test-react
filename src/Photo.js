import React from "react";

const Photo = ({ title, year, poster }) => {
    return(
        <div className="photo">
            <img src={(poster == "N/A") ? "http://placekitten.com/300/398" :poster}/>
            <h4>{title} ({year})</h4>
        </div>
    )
}

export default Photo;