import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Fetch movie details based on the id
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=4a2a4352`)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { Title, Poster } = movieDetails;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <h1>{Title}</h1>
      {Poster !== 'N/A' ? (
        <img src={Poster} alt={`${Title} Poster`} />
      ) : (
        <p>No poster available</p>
      )}

      {/* Display other movie details here */}
      <button onClick={handlePlay}>Play</button>

      {isPlaying &&  (
        <ReactPlayer
          url={`${process.env.PUBLIC_URL}/movie.mp4`}
          controls
          width="100%"
          height="400px"
        />
      )}
    </div>
  );
};

export default MovieDetails;
