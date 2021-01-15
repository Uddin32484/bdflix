import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';


const base_url="https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {

const  [movies, setmovies] =  useState([]);
const [trailerUrl, settrailerUrl]= useState("");

useEffect(() => {
async function fetchData(){
const request = await axios.get(fetchUrl)
setmovies(request.data.results);
//console.log(request);
return request;
}  fetchData();
}, [fetchUrl])


const opts={
height: "390",
width:"100%",
playerVars: {

autoplay:1,
},

};

const  animals = {
    'cat': 'qbN7DtPAKQo',
    'dog': 'qggx-7o5cqU',
    'cow': 'bS-HMwdt6AE?t=70',
    'a'  :'eirmiouZsE4',
 'B'  :'4CikNRsHKhs',
 'C'  :'zaCbuB3w0kg',
 'D'  :'ZPSUimDt7N8',
 'E'  :'2jgkVWMNIq8',
 'F'  :'61l74K5ZRdA',
 'G'  :'mCKxEOnzQug',
   
};
const handleClick=(movie) =>{
if (trailerUrl) {
settrailerUrl("");
} else{

movieTrailer(movie?.name || "")
.then((url) =>{
const urlParams= new URLSearchParams(new URL(url).search);
 
settrailerUrl(urlParams.get("v")) ||  settrailerUrl(animals[Object.keys(animals)[Math.floor(Math.random()*Object.keys(animals).length)]]);

}).catch(error => console.log(error))

};
  settrailerUrl(animals[Object.keys(animals)[Math.floor(Math.random()*Object.keys(animals).length)]]);  

}



  /* console.table(movies); */

    return (
        <div className="row">
           <h2>{title}</h2> 

        <div className="row_posters">
        

           {movies.map((movie) => (
           
           <img 
            key={movie.id}
             onClick={() =>  handleClick(movie)} 
             className={`row_poster ${isLargeRow && "row_posterLarger"}`}
             src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
             alt={movie.name}/>
               
           ))}
        </div>
       {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}
 
        </div>
    );
}

export default Row
