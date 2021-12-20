import React from 'react';
import InputHandler from '../InputHendler/InputHandler';
import { BaseContext } from '../BaseContext/BaseContext';
import Discount from 'csssr-school-discount';

const InputDiscount = ({handleChange}) => {
  return (
    <BaseContext.Consumer>
      { ({ discount }) => (
          <Discount title='Скидка' name='discount' value={discount} onChange={handleChange} />
        )
      }
    </BaseContext.Consumer>
  );
}

export default InputHandler(InputDiscount);
