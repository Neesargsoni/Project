import React from 'react'

function MoviesCard({ poster_path, name, AddToWatchList, movobj, RemoveFromWatchlist, watchlist }) {

    function doesContain(movObj) {
        for (let i = 0; i < watchlist.length; i++) {
            if (watchlist[i].id == movobj.id)
                return true
        }
        return false
    }
    return (
        <div className='p-1 h-[50vh] w-[250px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col items-end justify-between' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

            {doesContain(movobj) ? (<div onClick={() => RemoveFromWatchlist(movobj)} className='bg-gray-900/50 rounded-lg'> &#10060;</div>)
                : (
                    <div className='bg-gray-900/50 rounded-lg' onClick={() => AddToWatchList(movobj)}>&#128525;</div>

                )}
            <div className='text-white text-center text-xl bg-gray-900/60 w-full'>
                {name}
            </div>
        </div>
    )
}

export default MoviesCard

// https://image.tmdb.org/t/p/original  // 
