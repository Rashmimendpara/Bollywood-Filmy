import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams , Link , useNavigate } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie,setmovie] = useState(null);
  const [error,setError] = useState(null);

  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
    .then(res => setmovie(res.data))
    .catch(e => console.log(e));
  })

  const handleDelete = () => {
    axios
    .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
    .then(res => navigate('/'))
    .catch(e => console.log(e));

  }
  
  return (
    <div className='flex flex-row gap-5 justify-between lg:flex-row lg:items-center  bg-gray-800'>

    {
      movie && (<>
      
      {/* Left div for image */}
      <div className='lg:w-2/4'>
          <img src={movie.poster} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
      </div>
      {/* Right div for details */}
      <div className=' lg:w-2/3  flex flex-col gap-6  px-25 h-full'>
      
        <h1 className=' text-white font-semibold text-3xl'><p>{movie.title}</p></h1>
        
        <h1 className='text-white text-xl font-bold '>By {movie.director}</h1>

        <h6 className='text-white text-xl font-semibold'>Year: <span>{movie.year}</span></h6>

        <h6 className='text-white text-xl font-semibold'>Rating: <span>{movie.rating}</span></h6>

        <h6 className='text-white text-xl font-semibold'>Runtime: <span>{movie.runtime}</span></h6>
  
        <h6 className='text-white text-xl font-semibold'>Genres: <span>{movie.genres}</span></h6>

        <div className='flex flex-row items-center gap-10'>
            <Link to={`/movies/${id}/update`}><button className='bg-indigo-600 text-white font-semibold py-3 px-16 rounded-xl h-full'>Update Movie</button></Link>
            <button onClick={handleDelete} className='bg-indigo-600 text-white font-semibold py-3 px-16 rounded-xl h-full'>Delete Movie</button>
        </div>

      </div>
    </>)}
    </div>)
}

export default MovieDetail;

{/* <div>MovieDetail
{ movie && (
    <>
      <h2>{movie.title}</h2>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
      <p>{movie.rating}</p>
      <p>{movie.poster}</p>
      <p>{movie.runtime}</p>
      <p>{movie.genres}</p>
      <Link to={`/movies/${id}/update`}>Update Movie</Link>
      <button onClick={handleDelete}>Delete Movie</button>
    </>
  )}
</div> */}