import React from "react";

import "./pokedex-entry.css";

import CheckboxInput from '../checkbox-input';

function PokedexEntry({
  hidden,
  isCaught,
  inputHandler,
  dexNumber,
  dexName,
  dexTypes
}) {
  const labelId = `${dexNumber}-${dexName}`;

  const localInputHandler = e => {
    inputHandler(e.target.attributes["data-value"]);
  };

  return (
    <div className={`pokedex-entry ${isCaught ? 'pokedex-entry--caught' : ''} ${hidden ? "pokedex-entry--hidden" : ""}`}>
      <div className="pokedex-entry__box pokedex-entry__box--label">
        <CheckboxInput
          value={dexNumber}
          id={labelId}
          defaultChecked={isCaught}
          onChangeHandler={localInputHandler}
        />
        {dexNumber}
      </div>
      <div className="pokedex-entry__item pokedex-entry__item--box">
        <label htmlFor={labelId}>{dexName}</label>
      </div>
      <div className="pokedex-entry__item">
        <div className="pokedex-entry__box">
          {dexTypes.map(type => {
            return <div key={type}>{type}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(PokedexEntry);
