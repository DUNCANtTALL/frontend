import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function HomePage() {

    const [WatchedMovies,SetWatchedMovies] = useState('');
    const [MoviesInWatchList,SetMoviesInWatchList] = useState('');
    const [last4Movies,SetLast4Movies] = useState([]);
    const [input , setInput] = useState(''); 
    const [result, setResult] = useState({}); // State to store API result



    const handleInput = async (event) => {
        const inputValue = event.target.value;
        setInput(inputValue); // Update input state
    
        if (inputValue) {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?t=${inputValue}&apikey=c04a46ff`);
                setResult(response.data); 
            } catch (error) {
                console.error('Error fetching data:', error.message); 
            }
        } else {
            setResult({});
        }};


    const ViewMovie = function (Id)
    {

    }
    

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={handleInput} 
                placeholder="Enter a movie"
            />
            <div>
                {result.Title && <h2>{result.Title}</h2>} 
                {result.Year && <p>{result.Year}</p>} 
               <div onClick={ViewMovie(result.Id)}>{result.Poster && <img src={result.Poster} alt={`${result.Title}  poster`} />}</div> 
            </div>
        </div>
    );



    
    



}