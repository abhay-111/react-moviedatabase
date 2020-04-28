import React from 'react'
import '../App.css'

export default function Search({handleinput,search}) {
    return (

        <div>
            
            <input type="text"
             placeholder="Type your movie here..." 
             onChange={handleinput} onKeyPress={search}  />
        </div>
    )
}
