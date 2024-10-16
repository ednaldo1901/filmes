/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import { useState,useEffect } from "react"
import MovieCard from "../components/MovieCard"
import "../components/movieGrid.css"

const moviesURl = "https://api.themoviedb.org/3/movie/"
const api_key = "c430d0110f0d378b8844c0d0ac0a15ee"

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const getTopRetedMovies = async (url) => {
        const resp = await fetch(url)
        const data = await resp.json();

        setTopMovies(data.results)
    }

    useEffect(() =>{
         
          const topRetdURL = `${moviesURl}top_rated?api_key=${api_key}`;
          console.log(topRetdURL) 
          
          getTopRetedMovies(topRetdURL);

    },[])

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-conteiner">
      {topMovies.length === 0 && <p>carregando...</p>}
      {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
       
    </div>
  )
}

export default Home
