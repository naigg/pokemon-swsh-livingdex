import React from 'react';

import './pokedex-tracker.css';

function PokedexTracker({ data, currentCaughtPokemon, inputHandler }) {
  return (
    <main className="pokedex-tracker">
      {
        data.map(pokemon => {
          const labelId = `${pokemon.dexNumber}-${pokemon.dexName}`;
          return (
            <div
              key={pokemon.dexNumber}
              className="pokedex-tracker__item">
              <input
                data-value={pokemon.dexNumber}
                id={labelId}
                defaultChecked={currentCaughtPokemon.includes(pokemon.dexNumber)}
                type="checkbox"
                onChange={inputHandler}
              />
              <div>{pokemon.dexNumber}</div>
              <div>
                <label htmlFor={labelId}>
                  {pokemon.dexName}
                </label>
              </div>
              <div>
                {
                  pokemon.dexTypes.map(type => {
                    return (
                      <div key={type}>
                        {type}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default PokedexTracker;