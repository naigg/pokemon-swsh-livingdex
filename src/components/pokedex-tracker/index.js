import React from "react";

import "./pokedex-tracker.css";

function PokedexTracker({
  data,
  filterType,
  currentCaughtPokemon,
  inputHandler
}) {
  return (
    <div className="pokedex-tracker">
      {data.map(pokemon => {
        const labelId = `${pokemon.dexNumber}-${pokemon.dexName}`;
        const isCaught = currentCaughtPokemon.includes(pokemon.dexNumber);

        const currentItemVisible =
          filterType === "all" ||
          (filterType === "caught" && isCaught) ||
          (filterType === "uncaught" && !isCaught);

        return (
          currentItemVisible && (
            <div key={pokemon.dexNumber} className="pokedex-tracker__item">
              <input
                data-value={pokemon.dexNumber}
                id={labelId}
                defaultChecked={isCaught}
                type="checkbox"
                onChange={inputHandler}
              />
              <div>{pokemon.dexNumber}</div>
              <div>
                <label htmlFor={labelId}>{pokemon.dexName}</label>
              </div>
              <div>
                {pokemon.dexTypes.map(type => {
                  return <div key={type}>{type}</div>;
                })}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}

export default PokedexTracker;
