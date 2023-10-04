import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import { Api_key, baseUrl, imageUrl } from '../../constants/constants';
import './Rawposter.css';

function Rawposter(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState(null);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`${baseUrl}movie/${id}/videos?api_key=${Api_key}&language=en-US`).then((response) => {
      console.log(response.data);
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      } else {
        console.log("Trailer not available");
      }
    });
  };

  return (
    <div className='raw'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallposter' : 'poster'}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
            key={obj.id} // Add a unique key to each image
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default Rawposter;
