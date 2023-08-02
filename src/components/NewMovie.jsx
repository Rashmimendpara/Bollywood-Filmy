import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [poster, setPoster] = useState('');
  const [runtime, setRuntime] = useState('');
  const [genres, setGenres] = useState('');

  const submitMovie = e => {
    e.preventDefault();
    // let defaultImage = ""
    // {image: image || defaultImage}

    axios
      .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`, { title, director, year, rating, poster, runtime, genres })
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(e => console.log(e));
  };

  return (<>

  <div class='bg-gray-700 h-screen w-full flex justify-center items-center '>
  <form class='' onSubmit={submitMovie}>
    <div class="grid gap-4 mb-6 md:grid-cols-2 ">
        <div>
            <label class="block mb-2  font-medium text-gray-900 dark:text-white font-semibold">Movie Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Enter your movie Name' class="bg-gray-50 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
            <label class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Director Name</label>
            <input type='text' name='director' onChange={e => setDirector(e.target.value)} placeholder='Enter director Name' class="bg-gray-50 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
        <div>
            <label  class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Year</label>
            <input type='text' name='year' onChange={e => setYear(e.target.value)} placeholder='Enter year' class="bg-gray-50 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>  
        <div>
            <label  class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Genres</label>
            <input type='text' name='genres' onChange={e => setGenres(e.target.value)} placeholder='Enter movie genres' class="bg-gray-50 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
            <label  class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Ratings</label>
            <input type='text' name='rating' onChange={e => setRating(e.target.value)} placeholder='Enter movie ratings' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
        </div>
        <div>
            <label for="visitors" class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Runtime</label>
            <input type='text' name='runtime' onChange={e => setRuntime(e.target.value)} placeholder='Enter movie runtime' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
    </div>

    {/* <div class="mb-6 bg-gray-700">
        <label class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Poster link</label>
        <input type="text" name="poster" value={movie?.poster || ''} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div>  */}
   
    <button type="submit" class="bg-indigo-600 text-white font-semibold py-3 px-16 rounded-xl h-full">Add New Movie</button>
</form>
  </div>
  

  </>
     )
}

export default NewMovie;


{/* <div>
      <p>NewMovie</p>
      <form onSubmit={submitMovie}>

        <label htmlFor=''> Movie Title</label>
        <input type='text' value={title} onChange={e => setTitle(e.target.value)} /><br/>

        <label htmlFor=''>Director</label>
        <input type='text' name='director' onChange={e => setDirector(e.target.value)} /><br/>

        <label htmlFor=''> Year </label>
        <input type='text' name='year' onChange={e => setYear(e.target.value)} /><br/>

        <label htmlFor=''> Rating </label>
        <input type='text' name='rating' onChange={e => setRating(e.target.value)} /><br/>

        <label htmlFor=''> Poster </label>
        <input type='text' name='poster' onChange={e => setPoster(e.target.value)} /><br/>

        <label htmlFor=''> Runtime </label>
        <input type='text' name='runtime' onChange={e => setRuntime(e.target.value)} /><br/>
        
        <label htmlFor=''> Genres </label> 
        <input type='text' name='genres' onChange={e => setGenres(e.target.value)} /><br/>

        <button>Add New Movie</button>
      </form>
    </div> */}