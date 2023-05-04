import logo from './logo.svg';
import imagenRickMorty from './img/rick-morty.png';
import './App.css';
import { Fragment, useState } from 'react';
import { Characters } from './components/Characters';

function App() {

  const [characters,setCharacters]= useState()

  const reqApi= async ()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const apiCaracter = await api.json();
    setCharacters(apiCaracter.results);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ):(
          <Fragment>
            <img src={imagenRickMorty} alt='Rick & Morty' className='img-home'/>
            <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </Fragment>
        )}
        
      </header>
    </div>
  );
}

export default App;
