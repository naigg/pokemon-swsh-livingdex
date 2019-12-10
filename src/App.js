import React, { useState } from "react";
import "./App.css";

import PokedexTracker from "./components/pokedex-tracker";

import pokdexJson from "./helpers/data.json";
import useLocalStorage from "./helpers/use-local-storage-hook";

const defaultCaughtPokemonObject = [];

function App() {
  const [caughtPokemons, setCaughtPokemons] = useLocalStorage(
    "caughtPokemonObject",
    defaultCaughtPokemonObject
  );
  const pokemonInputHandler = e => {
    const currentNumber = e.target.attributes["data-value"];
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
  };
  const [filterType, setFilterType] = useState("all");

  const onChangeFilterHandler = e => {
    const target = e.target;
    setFilterType(target.id);
  };

  return (
    <div className="App">
      <header className="App-header">Pokedex Living Dex Tracker</header>
      <main>
        <div>
          <input
            id="all"
            type="radio"
            name="caught-type"
            value={filterType}
            checked={filterType === "all"}
            onChange={onChangeFilterHandler}
          />
          <label htmlFor="all">All</label>
          <input
            id="caught"
            type="radio"
            name="caught-type"
            value={filterType}
            checked={filterType === "caught"}
            onChange={onChangeFilterHandler}
          />
          <label htmlFor="caught">Caught</label>
          <input
            id="uncaught"
            type="radio"
            name="caught-type"
            value={filterType}
            checked={filterType === "uncaught"}
            onChange={onChangeFilterHandler}
          />
          <label htmlFor="uncaught">Uncaught</label>
        </div>
        <PokedexTracker
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
