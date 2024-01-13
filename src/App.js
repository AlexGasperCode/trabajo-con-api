import imageAlexTech from "./img/logo claro.png";
import './App.css';
import { useState } from "react";
import Characters from "./component/Characters";

function App() {
  const [characters , setCharacters] = useState(null);
 
  // const reqApi = lo volvemos asincrono() =>{
  //   console.log("Clicking");
  // }
  const reqApi = async () =>{
  const api = await fetch("https://rickandmortyapi.com/api/character");
  const characterApi = await api.json();
  // console.log(characterApi);
  setCharacters(characterApi.results); 

  // console.log(api);
  // console.log(characterApi);
}
// console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">ALEX TECHNOLOGY API</h1>
        {characters ? (
           <Characters characters={characters} setCharacters={setCharacters}/>
         ) : (
          <>
          <img src={imageAlexTech} alt='alex javier brito muñoz' className='img-home'/>
          <button onClick={reqApi} className="btn-search">BUSCAR</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
