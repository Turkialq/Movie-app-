import React from "react"

const MoiveCard = ({movie}) => {
    return(
        <div className="moive">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !=='N/a'? movie.Poster:'https:/via.placeholder.com/400'} alt = {movie.title}/>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.title}</h3>
            </div>
        </div>
    );
}


export default MoiveCard;