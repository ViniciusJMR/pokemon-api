import PokemonInfo from './components/PokemonInfo'
import PokemonList from './components/PokemonList';

import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className='title'>Pokedex API react</h1>
      <div className='flex-container'>
        <PokemonList />
        <PokemonInfo />
      </div>
    </div>
  );
}

export default App;
