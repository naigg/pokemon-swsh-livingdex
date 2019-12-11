import React from 'react';

import './checkbox-input.css';

function CheckboxInput({ value, id, defaultChecked, onChangeHandler }) {
  return (
    <input
      className="checkbox-input"
      data-value={value}
      id={id}
      defaultChecked={defaultChecked}
      type="checkbox"
      onChange={onChangeHandler}
    />
  )
}

export default CheckboxInput;
