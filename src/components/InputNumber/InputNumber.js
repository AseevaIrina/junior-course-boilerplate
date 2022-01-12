import React from 'react';

const InputNumber = ({ defaultValue, name, onChange }) => {
  return (
    <input type="number" className="price-block__input"
           value={defaultValue}
           name={name}
           onChange={onChange}
    />
  );
}

export default InputNumber;
