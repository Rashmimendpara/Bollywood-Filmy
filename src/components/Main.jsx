import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Movies from './Movies';
import NewMovie from './NewMovie';
import MovieDetail from './MovieDetail';
import UpdateMovie from './UpdateMovie';
 

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/new" element={<NewMovie/>}/>
            <Route path="/movies/:id" element={<MovieDetail/>}/>
            <Route path="/movies/:id/update" element={<UpdateMovie/>}/>
            <Route path='/' element={<Movies />}/>
        </Routes>
    </main>
  );
};

export default Main