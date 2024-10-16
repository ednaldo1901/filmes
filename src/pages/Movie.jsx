import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp,
   BsWallet2,
   BsHourglassSplit,
   BsFillFileEarmarkTextFill
   } from "react-icons/bs"
import MovieCard from "../components/MovieCard"
import "./Movie.css"

const moviesURl = "https://api.themoviedb.org/3/movie/"
const api_key = "c430d0110f0d378b8844c0d0ac0a15ee"

const Movie = () => {
const {id} = useParams()
const [movie, setMovie] = useState(null)

const getMovie = async (url) =>{
  const resp = await fetch(url)
        const data = await resp.json();
        setMovie(data)
}

const formatMoeda = (numero) => {
  return numero.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  })
}

useEffect(() => {
  const movieURL=`${moviesURl}${id}?api_key=${api_key}`
  getMovie(movieURL)
},[id])

  return (
    <div className="movie-page">
      {movie && (
        <>
        <MovieCard movie={movie} showLink={false}/>
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3>
          <BsWallet2/> Orçamento:
          </h3>
          <p>{formatMoeda(movie.budget)}</p>
        </div>
        <div className="info">
          <h3>
          <BsGraphUp/> Receita:
          </h3>
          <p>{formatMoeda(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3>
          <BsHourglassSplit/> Duração:
          </h3>
          <p>{movie.runtime} minutos</p>
        </div>
        <div className="info description">
          <h3>
          < BsFillFileEarmarkTextFill/> Descrição:
          </h3>
          <p>{movie.overview} minutos</p>
        </div>
      </>
    )}
    </div>
  )
}

export default Movie
