import { createContext, useState } from 'react';

import PokemonInfo from './components/PokemonInfo'
import PokemonList from './components/PokemonList';

import './App.css'


function App() {
  const [selected, setSelected] = useState({})

  const handleSelectChange = (s) => {
    setSelected(s)
  }

  return (
    <div className="App">
      <h1 className='title'>Pokedex API react</h1>
      <div className='flex-container'>
        <PokemonList onSelectedChanged={handleSelectChange} />
        <PokemonInfo selected={selected}/> 
      </div>
    </div>
  );
}

export default App;
