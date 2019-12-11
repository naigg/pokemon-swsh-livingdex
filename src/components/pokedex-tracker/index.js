import React from "react";

import PokedexEntry from "../pokedex-entry";

import "./pokedex-tracker.css";

function PokedexTracker({
  data,
  filterType,
  searchQuery,
  currentCaughtPokemon,
  inputHandler
}) {
  return (
    <div className="pokedex-tracker">
      {data.map(pokemon => {
        const isCaught = currentCaughtPokemon.includes(pokemon.dexNumber);

        const currentItemVisible =
          filterType === "all" ||
          (filterType === "caught" && isCaught) ||
          (filterType === "uncaught" && !isCaught);

        const isSearchValid = pokemon.dexName.includes(searchQuery);

        return (
          currentItemVisible && (
            <PokedexEntry
              hidden={!isSearchValid}
              key={pokemon.dexNumber}
              isCaught={isCaught}
              inputHandler={inputHandler}
              dexNumber={pokemon.dexNumber}
              dexName={pokemon.dexName}
              dexTypes={pokemon.dexTypes}
            />
          )
        );
      })}
    </div>
  );
}

export default PokedexTracker;
