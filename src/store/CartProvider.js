import CartContext from "./cart-context";

import React, { useEffect, useState } from "react";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    const indexofitem = cartState.findIndex((i) => {
      return item.id === i.id;
    });
    if (indexofitem >= 0) {
      setCartState((prev) => {
        let previousitem = [...prev];
        previousitem[indexofitem].quantity++;
        return previousitem;
      });
    } else {
      setCartState((prev) => {
        let previousitem = [...prev];
        previousitem.push(item);
        return previousitem;
      });
    }
  };
  const removeItemToCartHandler = (id) => {
    const indexofitem = cartState.findIndex((i) => {
      return id === i.id;
    });
    setCartState((prev) => {
      let previousitem = [...prev];
      if (previousitem[indexofitem].quantity > 1) {
        previousitem[indexofitem].quantity--;
      } else {
        return previousitem.filter((i) => {
          return i.id !== id;
        });
      }
      return previousitem;
    });
  };

  const removeItemFromCartHandler = (id) => {
    setCartState((prev) => {
      let previousitem = [...prev];
      return previousitem.filter((i) => {
        return i.id !== id;
      });
    });
  };

  useEffect(() => {
    let total = 0;
    for (const item of cartState) {
      total = total + item.price * item.quantity;
    }
    setTotalAmount(total);
  }, [cartState]);

  const cartContext = {
    items: cartState,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeOne: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
