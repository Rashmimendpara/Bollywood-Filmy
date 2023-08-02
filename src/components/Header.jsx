import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu,AiOutlineClose,AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
    const [nav, setNav] = useState(false)
  return (
<>
   
<nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
    <img className="fill-current h-8 w-8 mr-2" width="80" height="80" src='https://image.winudf.com/v2/image1/Y29tLm1vdmllYm94LmZyZWUud2F0Y2hvbmxpbmUuaGRtb3ZpZWFfc2NyZWVuXzBfMTU3MzI3Mjg3OV8wOTU/screen-0.webp?fakeurl=1&type=.webp' atl=""></img>
    <span className="font-semibold text-xl tracking-tight">Bollywood-Filmy</span>
  </div>

  {/* Search Input */}
  <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search Movie'
        />
      </div>

    
    <div className=" flex md:flex md:flex-grow flex-row justify-end space-x-5 pr-10"> 
    <a href="/" className = "text-white hover:text-teal-500">Home </a>
      <a href="/movies/new" className = "text-white hover:text-teal-500">Add Movie</a>
    </div>

    <div>
      <a href="#" className=" inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
    
</nav>
</>
)}

export default Header;


{/* <header>Bollywood-Filmy
<nav>
    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/movies/new">Add Movie</NavLink>
        </li>
    </ul>
</nav>
</header> */}
