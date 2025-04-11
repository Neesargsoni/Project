import Navbar from '../Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Movies from '../Components/Movies';
import Watchlist from '../Components/Watchlist';
import Banner from '../Components/Banner';
import { useEffect, useState } from 'react';

function App() {
  const [watchlist, setWatchlist] = useState([])

  const AddToWatchList = (movObj) => {
    const newWatchlist = [...watchlist, movObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  const RemoveFromWatchlist = (movObj) => {
    const filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movObj.id
    });
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))

    setWatchlist(filteredWatchList);
    console.log(filteredWatchList);
  }
  useEffect(()=>{
    let moviesfromlocalstorage = localStorage.getItem('moviesApp')

    if(!moviesfromlocalstorage){
      return 
    }

    setWatchlist(JSON.parse(moviesfromlocalstorage))
    
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Banner /> <Movies  watchlist = {watchlist} AddToWatchList={AddToWatchList} RemoveFromWatchlist={RemoveFromWatchlist} />  </>} />
          <Route path='/watchlist' element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} RemoveFromWatchlist={RemoveFromWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
