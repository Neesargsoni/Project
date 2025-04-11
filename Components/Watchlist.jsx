import React, { useEffect, useState } from 'react'
import genreids from '../src/utility/genre'

function Watchlist({ watchlist, setWatchlist,RemoveFromWatchlist }) {

  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Movies'])
  const [currGenre, setCurrGenre] = useState('All Movies')


  let handlefilter = (genre) => {
  
      setCurrGenre(genre)
    

  }
  let Increase = () => {
    let sortedIncreasing = watchlist.sort((movA, movB) => {
      return movA.vote_average - movB.vote_average
    })
    setWatchlist([...sortedIncreasing])

  }

  let Decrease = () => {
    let sortedDecreasing = watchlist.sort((movA, movB) => {
      return movB.vote_average - movA.vote_average
    })
    setWatchlist([...sortedDecreasing])
  }


  let handleclick = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    let temp = watchlist.map((movObj) => {
      return genreids[movObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Movies', ...temp])
    console.log(temp)
  }, [watchlist])
  return (
    <>

      <div className='flex justify-center m-4 gap-2'>
        {genreList.map((genre) => {
          return <div onClick={() => {
            handlefilter(genre)
          }
          } className={currGenre == genre ? 'flex justify-center items-center  h-[3rem] w-[9rem] bg-blue-400 rounded-xl font-bold' : 'flex justify-center items-center  h-[3rem] w-[9rem] bg-gray-400 rounded-xl font-bold'}>
            {genre}</div>
        }
        )}
        {/* <div className='flex justify-center items-center  h-[3rem] w-[9rem] bg-gray-400 rounded-xl font-bold'>
          Sex
        </div> */}
      </div>
      <div className='flex justify-center my-4'>
        <input type="text" value={search} onChange={handleclick} className='h-[2rem] w-[18rem] bg-gray-200 px-4 outline-none' placeholder='Search Movies' />
      </div>
      <div className='border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th className='flex gap-2 justify-center'>
                <div onClick={Increase}><i class="fa-solid fa-arrow-up"></i> </div>
                <div>Ratings</div>
                <div onClick={Decrease}><i class="fa-solid fa-arrow-down"></i> </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>

            </tr>
          </thead>
          <tbody>

            {watchlist.filter((movObj)=>{
              if(currGenre == 'All Movies'){
                return true
              }
              else{
                return genreids[movObj.genre_ids[0]] == currGenre
              }
            }).filter((movObj) => {
              return movObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movobj) => {
              return <tr className='border-b-2'>
                <td className='flex items-center px-6 py-4'>
                  <img src={`https://image.tmdb.org/t/p/original/${movobj.poster_path}`} className='w-[10rem] h-[6rem]' />
                  <div className='mx-10'>{movobj.original_title}</div>
                </td>
                <td>{movobj.vote_average}</td>
                <td>{movobj.popularity}</td>
                <td>{genreids[movobj.genre_ids[0]]}</td>
                <td onClick={()=>{
                  RemoveFromWatchlist(movobj)
                }} className='text-red-500'>Delete</td>
              </tr>
            })}





          </tbody>
        </table>
      </div>
    </>

  )
}

export default Watchlist
