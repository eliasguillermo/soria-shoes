import React, {useState} from 'react';

const CartContext = React.createContext([0, () => {}]);

const CartContextProvider = (props) => {
    const [state, setState] = useState(0);
  return (
    <CartContext.Provider value={[state, setState] }>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };