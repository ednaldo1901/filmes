import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import "../components/movieGrid.css"

const moviesSearch = "https://api.themoviedb.org/3/search/movie"
const api_key = "c430d0110f0d378b8844c0d0ac0a15ee"

const Search = () => {

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  // outra funçao

  const getSearchedMovies = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json();

    setMovies(data.results)
}

useEffect(() =>{
     
      const searchedQueryUrl = `${moviesSearch}?api_key=${api_key}&query=${query}`;
      console.log(searchedQueryUrl) 
      
      getSearchedMovies(searchedQueryUrl);

},[query])



  return (
    <div className="container">
      <h2 className="title">Resultado para: <span className="query-text">{query}</span></h2>
      <div className="movies-conteiner">
      {movies.length === 0 && <p>carregando...</p>}
      {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
       
    </div>
  )
}

export default Search
