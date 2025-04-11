import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({AddToWatchList, RemoveFromWatchlist, watchlist}) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageno] = useState(1)
  // useEffect(() => {
  //   axios.get('https://api.themoviedb.org/3/movie/popular?api_key=18a5c5e9e6934d23c283b14004805396&language=en-US&page=2').then(function (res) {
  //     setMovies(res.data.results)
  //     // console.log(res.data.results)
  //   })
  // },[])
  function prev() {
    if (pageNo === 1) {
      setPageno(pageNo)
    }
    else {
      setPageno(pageNo - 1)

    }
  }

  function next(){
    setPageno(pageNo+1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=18a5c5e9e6934d23c283b14004805396&language=en-US&page=${pageNo}`).then(function (res) {
      setMovies(res.data.results)
      // console.log(res.data.results)
    })
  }, [pageNo])

  return (

    <div className='p-5'>

      <div className='m-5 text-black text-bold text-center text-2xl'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-6 mb-6'>

        {/* {movies.map((movieObj)=>{
          return <MoviesCard poster_path={movieObj.poster_path} name={
            movieObj.original_title}/>
         })} */}
        {movies.map((movObj) => {
          return <MoviesCard 
            poster_path={movObj.poster_path} 
            name={movObj.original_title}
            movobj={movObj} 
            AddToWatchList={AddToWatchList}
            RemoveFromWatchlist={RemoveFromWatchlist}
            watchlist={watchlist}
          />
        })}
      </div>
      <Pagination pageNo={pageNo} prev={prev} next={next}/>

    </div>

  )
}

export default Movies
