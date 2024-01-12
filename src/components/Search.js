import React,{useState} from 'react'
import icon from '../images/netflix-logo.png';
import '../style.scss';
import {BiSearchAlt2} from 'react-icons/bi'
import {IoIosNotifications} from 'react-icons/io';
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';

const Search = () => {
    const [searchTerm,setSearchTerm]=useState('');
    const [searchResults,setSearchResults]=useState([]);
   
    
     const handleSearch =() =>{
        if (searchTerm.trim() !== ''){
            axios.get(`http://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=4a2a4352`)
            .then((response)=>{
                if(response.data.Search){
                    setSearchResults(response.data.Search);
                }
                else{
                    setSearchResults([]);  }
            })
            .catch((error)=>{
                console.error('Error:',error);
            })
        }
     }
    const handleClear=()=>{
      setSearchTerm('');
    }
  return (
    <div className='search'>
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
            <div className='search' >
              
                <input
                type='text'
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  } else if (e.key === 'Backspace') {
                    setSearchTerm('');
                  }
                }}/>

                    <button onClick={handleSearch}><BiSearchAlt2/></button>
                    <button onClick={handleClear}><RxCross1/></button>
               
              
            </div>
            <span>Kids</span>
            <div className='notify'><IoIosNotifications/></div></div>
        </div>
        <div className='card'>
       {searchResults.length > 0 && (
        <div className='search-results'>
          <h6>Explored titles related to:</h6>

          <div className='horizontal-scroll-container'>
            {searchResults.map((result) => (
              <div className='movie-card' key={result.imdbID}>
                <img src={result.Poster} alt={result.Title} />
              </div>
            ))}
          </div>
        </div>
      )}
      </div> 
    </div>
  )
}

export default Search