import React from 'react'
import Result from './Result'
import '../App.css'

function Results({result}) {
    return (
        <div className="results">
            {
                result.map( item => {
                    return(


                        <Result 
                        key={item.imdbID} 
                        
                        result={item}

                        />
                        
                        
                        
                        )
                })
            }
            
        </div>
    )
}

export default Results

