import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [movies, setmovies] = useState(null);

    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
          .then(res => setmovies(res.data))
          .catch(e => console.log(e));
      }, []);
  return (
    <>

<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 bg-gray-800'>

        { movies && movies.map((movie, index) => (
     
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>

            <Link to={`/movies/${movie.id}`}>
            <img
              src={movie.poster}
              alt={movie.title}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            
            
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-white'>{movie.title}</p>
              <p>{/* <span className=' text-white p-1 rounded-full'>
                  {movie.genres}
                </span> */}</p>
            </div>
            </Link>

          </div>
        ))}
        
      </div>
      
    

    </>
    
  )
}

export default Movies;


// {
//   "id": 11,
//   "title": "English Vinglish",
//   "director": "Gauri Shinde",
//   "year": 2012,
//   "rating": 4,
//   "poster": "https://c4.wallpaperflare.com/wallpaper/975/765/275/movies-bollywood-movies-wallpaper-preview.jpg",
//   "runtime": "2h 14m",
//   "genres": "Comedy-Drama-Family"
// },



{/* <div>
      <h2>Page Movies</h2>
      <ul>
        {
          movies && movies.map(movie => (
            <li key = {movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
              </Link><br/>
              {movie.director}<br/>
              {movie.year}<br/>
              {movie.rating}<br/>
              {movie.poster}<br/>
              {movie.runtime}<br/>
              {movie.genres}<br/>
            </li>
          ))
        }
      </ul>
     </div> */}


  //    <div>
  //    <h2>Movies to show</h2>
  //      {
  //        movies && movies.map((movie,index) => (
  //          <div key={movie}>
  //            <p>{movie.title}</p>
  //            <img  style={{height:"100px",width:"100px"}} src={movie.poster} alt={movie.title}/><br />
  //          </div>
  //        ) )
  //      }
  //  </div>