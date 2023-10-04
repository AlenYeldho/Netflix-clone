import React, { useEffect, useState } from 'react';
import './banner.css';
import axios from '../../axios';
import { Api_key, baseUrl, imageUrl } from '../../constants/constants';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios.get(`${baseUrl}trending/movie/week?api_key=${Api_key}`)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 8000);

    return () => {
      clearInterval(interval); 
    };
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];

  return (
    <div style={{ backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ''})` }} className='banner'>
      <div className='content'>
        <h1 className='title'>{currentMovie ? currentMovie.title : ''}</h1>
        <div className='banner-btn'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>
          {currentMovie ? currentMovie.overview : ''}
        </h1>
      </div>
      <div className='fade-bottom'></div>
    </div>
  );
}

export default Banner;
