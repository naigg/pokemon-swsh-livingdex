import React from 'react';

function InputLabel({ id, value, inputHandler }) {
  return (
    <React.Fragment>
      <input
        id={id}
        type="radio"
        name="caught-type"
        value={value}
        checked={value === id}
        onChange={inputHandler}
      />
      <label htmlFor={id} style={{ textTransform: 'capitalise' }}>
        {id}
      </label>
    </React.Fragment>
  )
}

export default InputLabel;
