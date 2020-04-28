import React from 'react'
import '../App.css'

function Result({result}) {
    
    return (
        <div className="result" >
            <h3 className="movietitle" >{result.Title}</h3>
            <img alt="photo" className="poster" src={result.Poster} /> 
            <h3>IMDB id:{result.imdbID}</h3>
            <h3>Year of Release:{result.Year}</h3>
        </div>
    )
}

export default Result
