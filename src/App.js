import React from 'react';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './reuests';
import Row from './Row';
function App() {
  return (
    <div className="app">

      <Nav/>
      <Banner/>
      {/*    //banner */}
        <div className="heading">Bangladeshi  Movie Bazar <small>  বাবু খাইছো  -Dedicated to -Farhan vai</small></div>
          <Row title="Top Rated Movie- Yub Uddin" 
          fetchUrl={requests.fetchTopRated}
           isLargeRow={true} />
          <Row title="Trending NOW" fetchUrl={requests.fetchTrending}/>
     
        <Row title="Action Movie" fetchUrl={requests.fetchActionMovies}/>  
         <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
           <Row title="Romance Deshi Movie" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries Movie" fetchUrl={requests.fetchDocumentariesMovies}/>  
             <Row title="Deshi Hindi Bangla Movie" fetchUrl={requests.fetchRomanceMovies}/> 
   <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>     
           
   
    </div>
  );
}

export default App;
