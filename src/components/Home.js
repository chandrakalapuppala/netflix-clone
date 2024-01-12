import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Moviedetails from './Moviedetails';
import icon from '../images/netflix-logo.png';
import '../style.scss';
import {BiSearchAlt2} from 'react-icons/bi'
import {IoIosNotifications} from 'react-icons/io';
import axios from 'axios';
const Home = () => {
    const [popularMovies,setPopularMovies]=useState([]);
    const navigate=useNavigate();
    const handledSearch =(e) =>{
      navigate("/search");
    }
    const handleMovieClick =(movie)=>{
      //console.log(movie);
      navigate(`/movie/${movie.imdbID}`)
    }
    useEffect(()=>{
        axios.get('http://www.omdbapi.com/?s=popular&type=movie&apikey=4a2a4352')
        .then((response)=>{
            if(response.data.Search){
                setPopularMovies(response.data.Search);
                
            }
        })
        
    },[])
  return (
    <div className='home'>
        <div className='navbar'>
            <div className='icon'>
                <img src={icon} alt=''/>
            </div>
            <div className='list'>
               <span>Home</span>
               <span>TV showxs</span>
               <span>Movies</span>
               <span>New & Popular</span>
               <span>My List</span>
            </div>
            <div className='navbar-2'>
            <div className='search' onClick={handledSearch}>
            <BiSearchAlt2/></div>
            <span>Kids</span>
            <div className='notify'><IoIosNotifications/></div></div>
        </div>
        <div className='section1'>
            <h6>Popular on Netflix</h6>
            <div className='horizontal-scroll-container'>
          {popularMovies.map((movie) => (
            <div className='movie-card' key={movie.imdbID} onClick={()=>handleMovieClick(movie)}>
              <img src={movie.Poster} alt={`${movie.Title}Poster`} />
              
            </div>
          ))}
        </div> 
        </div>
        <div className='section2'>
          <h6>Continue Watching for madhu</h6>
          <div className='horizontal-scroll-container'>
          {popularMovies.map((movie) => (
            <div className='movie-card' key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              
            </div>
          ))}  
          </div>
        </div>
    </div>
  )
}

export default Home