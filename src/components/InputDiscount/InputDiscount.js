import React from 'react';
import Discount from 'csssr-school-discount';

const InputDiscount = ({ value, onChange }) => {
  return (
    <Discount title='Скидка' name='discount' value={value} onChange={onChange} />
  );
}

export default InputDiscount;
