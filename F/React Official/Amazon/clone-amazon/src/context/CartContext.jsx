import { createContext } from "react";

const CartContext = createContext();

export function CartProvider({ child }) {
  return (
    <CartContext.Provider value={{ item: 1 }}>
      {
        child
      }
    </CartContext.Provider>
  )
};


export default CartContext;