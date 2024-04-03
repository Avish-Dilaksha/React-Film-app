import { useState, useEffect } from 'react'
import './App.css'

//d5870a3d
const API_URL = "http://www.omdbapi.com?apikey=d5870a3d";


const movie = {
  "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  "Year": "2016",
  "imdbID": "tt18689424",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
}

function App() {
  const [count, setCount] = useState(0)

const SearchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  console.log(data);
}

  useEffect(()=> {
    SearchMovies("Batman");
  },[])
  
  return (
    <div className="app">
      <h1>Filmetica</h1>

      <div className="search">
        <input 
        type="text" 
        placeholder="Search for Movies"
        value="Superman"
        onChange={()=> {}}
        />
        <img 
        src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
        alt="search" 
        onClick={() => {}}
      />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.title} />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
