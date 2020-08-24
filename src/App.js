import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[cast, setCast] = useState([])


  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setCast(data))
  }, [])

    // const cast = ['Millie', 'Bobbie', 'Brown', 'Will', 'Mike']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        cast.map(casts => <Actors name ={casts}></Actors> )


      }


      <Actors name={cast[0]}></Actors>
      <Actors name ={cast[1]}></Actors>
      <Actors name ={cast[2]}></Actors>
      <Actors name ={cast[3]}></Actors>
      <Actors name ={cast[4]}></Actors>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);


  // const count = 5;
  return(
    <div>
      <button onClick ={handleClick}>Add Movie</button>
      <h3>Number of movies : {count}</h3>
      <MovieDisplay movies ={count}></MovieDisplay>
      <MovieDisplay movies ={count + 10}></MovieDisplay>
      <MovieDisplay movies ={count}></MovieDisplay>
      <MovieDisplay movies ={count}></MovieDisplay>
    </div>

  )
}

function MovieDisplay(props) {
  return(
    <div>
      <h3>Movies I have acted : {props.movies}</h3>
    </div>
  )
}

function Actors(props) {
  // console.log(props.name);
  const actorStyle = {
    border: '10px solid gray',
    margin: '20px'
  }

  return (
    <div style ={actorStyle}>
          <h1>I'm an actor {props.name}</h1>
          <h3>I have done 5 movies {props.age || 18} years.</h3>
    </div>
  )
}


export default App;
