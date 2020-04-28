import React , {useState} from 'react';

import './App.css';
import Search from './components/Search'
import Results from './components/Results'

function App() {

  const [state,setstate]=useState({
    s:"",
    result:[],
    selected:{}
  })
  const url =`http://www.omdbapi.com/?i=tt3896198&apikey=cce90090`

  const search = (e)=>
  {
    if(e.key=== "Enter")
    {
       fetch(url + '&s='+state.s ).then( data => data.json()).then(
         (response) =>
         {
           console.log(response)
          let result = response.Search

          setstate( prev => {
            return({
              ...prev,result:result
            })
          } )
         }
       )
    }
  }


  const handleinput=(e)=>
  {
    let s=e.target.value;
    setstate( prev => { return {
      ...prev,s:s
    }} )
    
  }
  const closepopup=()=>
  {
    setstate(prev => {
      return { ...prev,selected:{}}
    })
  }

  const openpopup = (id)=>
  {
    fetch(url + '&i='+ id ).then(data => data.json()).then( ({data}) =>{
      
      let result =data
      setstate({ ...data,selected: result})
    } )

   
  }

  return (
    
  <div>

    
    <div className="movie">
      <h1>Movie database</h1>

<Search  handleinput={handleinput} search={search} />
  

    <Results  result={state.result} />




    </div>



    </div>
  );
}

export default App;
