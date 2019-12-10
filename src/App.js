import React from 'react';
import './App.css';

import PokedexTracker from './components/pokedex-tracker'

import pokdexJson from './helpers/data.json';
import useLocalStorage from './helpers/use-local-storage-hook';

const defaultCaughtPokemonObject = [];

function App() {
  const [caughtPokemons, setCaughtPokemons] = useLocalStorage('caughtPokemonObject', defaultCaughtPokemonObject);
  const pokemonInputHandler = (e) => {
    const currentNumber = e.target.attributes['data-value'];
    const currentNumberValue = currentNumber.value;
    const tempCaughtPokemons = [...caughtPokemons];
    if (!tempCaughtPokemons.includes(currentNumber.value)) {
      setCaughtPokemons([...tempCaughtPokemons, currentNumberValue]);
    } else {
      const foundArrayIndex = tempCaughtPokemons.indexOf(currentNumberValue);
      if (foundArrayIndex > -1) {
        tempCaughtPokemons.splice(foundArrayIndex, 1);
      }
      setCaughtPokemons([...tempCaughtPokemons]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Pokedex Living Dex Tracker
      </header>
      <PokedexTracker
        data={pokdexJson}
        currentCaughtPokemon={caughtPokemons}
        inputHandler={pokemonInputHandler}
      />
    </div>
  );
}

export default App;
