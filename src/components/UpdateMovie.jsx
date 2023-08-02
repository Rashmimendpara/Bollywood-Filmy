import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(e => setError(e.response?.data?.message));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`, movie)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(e => console.log(e));
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
    // const updatedBook = {...book}
    // updatedBook[name] = value
    // setState(updatedBook)
  };
  return (<>
  <div class='bg-gray-700 h-screen w-full flex justify-center items-center '>
  <form class='' onSubmit={handleSubmit}>
    <div class="grid gap-4 mb-6 md:grid-cols-2 ">
        <div>
            <label class="block mb-2  font-medium text-gray-900 dark:text-white font-semibold">Movie Title</label>
            <input type="text" name="title" value={movie?.title || ''}  onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
            <label class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Director Name</label>
            <input type="text" name="director" value={movie?.director || ''} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
        <div>
            <label  class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Year</label>
            <input type="text" name="year" value={movie?.year || ''} onChange={handleChange}  class="bg-gray-50 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>  
        <div>
            <label  class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Genres</label>
            <input type="text" name="genres" value={movie?.genres || ''} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
            <label  class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Ratings</label>
            <input type="text" name="rating" value={movie?.rating || ''} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
        </div>
        <div>
            <label for="visitors" class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Runtime</label>
            <input type="text" name="runtime" value={movie?.runtime || ''} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
    </div>

    <div class="mb-6 bg-gray-700">
        <label class="block mb-2 font-semibold font-medium text-gray-900 dark:text-white">Poster link</label>
        <input type="text" name="poster" value={movie?.poster || ''} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
   
    <button type="submit" class="bg-indigo-600 text-white font-semibold py-3 px-16 rounded-xl h-full">Update Movie</button>
</form>
  </div>
  

  {/* <div className='bg-gray-800  h-screen w-full flex justify-center items-center'>
       <div className='lg:w-2/3  gap-6 flex-col flex justify-center bg-pink-800 place-items-center'>
         <h1 className='text-white font-semibold text-3xl'>Title: <span>Title</span></h1>
         <h1 className='text-white text-xl font-bold '>Director: </h1>
         <h6 className='text-white text-xl font-semibold'>Year: <span>Year</span></h6>
         <h6 className='text-white text-xl font-semibold'>Rating: <span>Rating</span></h6>
         <h6 className='text-white text-xl font-semibold'>Runtime: <span>Runtime</span></h6>
         <h6 className='text-white text-xl font-semibold'>Genres: <span>Genres</span></h6>
         <button className='bg-indigo-600 text-white font-semibold py-3 px-16 rounded-xl h-full'>Update Movie</button>
      </div> 
  </div> */}
  </> );
};

export default UpdateBook;


{/* <div>
      <h2>Update Movie</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={movie?.title || ''}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="">Director</label>
        <input type="text" name="director" value={movie?.director || ''} onChange={handleChange} /><br />

        <label htmlFor="">Year</label>
        <input type="text" name="year" value={movie?.year || ''} onChange={handleChange} /><br />

        <label htmlFor="">Rating</label>
        <input type="text" name="rating" value={movie?.rating || ''} onChange={handleChange} /><br />

        <label htmlFor="">Poster</label>
        <input type="text" name="poster" value={movie?.poster || ''} onChange={handleChange} /><br />

        <label htmlFor="">Runtime</label>
        <input type="text" name="runtime" value={movie?.runtime || ''} onChange={handleChange} /><br />

        <label htmlFor="">Genres</label>
        <input type="text" name="genres" value={movie?.genres || ''} onChange={handleChange} /><br />

        <button>Update Movie</button>
      </form>
    </div> */}

