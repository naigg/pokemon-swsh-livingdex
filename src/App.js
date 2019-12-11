import React, { useState, useCallback } from "react";

import "./App.css";

import PokedexTracker from "./components/pokedex-tracker";
import InputLabel from './components/input-label';

import pokdexJson from "./helpers/data.json";
import useLocalStorage from "./helpers/use-local-storage-hook";

const defaultCaughtPokemonObject = [];

function App() {
  const [caughtPokemons, setCaughtPokemons] = useLocalStorage(
    "caughtPokemonObject",
    defaultCaughtPokemonObject
  );

  const pokemonInputHandler = useCallback(
    currentNumber => {
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
    },
    [caughtPokemons]
  );
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeFilterHandler = e => {
    const target = e.target;
    setFilterType(target.id);
  };

  const searchInputHandler = (e) => {
    const target = e.target.value;
    setSearchQuery(target);
  }

  return (
    <div className="App">
      <header className="App-header">Pokedex Living Dex Tracker</header>
      <main>
        <div>
          <input placeholder="Search for a pokemon" type="text" value={searchQuery} onChange={searchInputHandler} />
          <InputLabel
            id="all"
            value={filterType}
            inputHandler={onChangeFilterHandler}
          />
          <InputLabel
            id="caught"
            value={filterType}
            inputHandler={onChangeFilterHandler}
          />
          <InputLabel
            id="uncaught"
            value={filterType}
            inputHandler={onChangeFilterHandler}
          />
        </div>
        <PokedexTracker
          searchQuery={searchQuery}
          data={pokdexJson}
          filterType={filterType}
          currentCaughtPokemon={caughtPokemons}
          inputHandler={pokemonInputHandler}
        />
      </main>
    </div>
  );
}

export default App;
