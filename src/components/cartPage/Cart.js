import React from "react";
import styles from "./cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const cartData = cartContext.items;
  let order = 1;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cart}>
          <div className={styles.header}>
            <div>#</div>
            <div>Product</div>
            <div>Product Name</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Remove</div>
          </div>
          {cartData.map((item) => {
            return (
              <div className={styles.header} key={item.id}>
                <div>{order++}</div>
                <div>
                  <img
                    className={styles.imgUrl}
                    src={item.imgUrl}
                    alt="chocklate"
                  />
                </div>
                <div>{item.productName}</div>
                <div>{item.price}</div>
                <div className={styles.quantityChangerDiv}>
                  <button
                    className={styles.quantityChanger}
                    onClick={() => {
                      cartContext.removeOne(item.id);
                    }}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className={styles.quantityChanger}
                    onClick={() => {
                      cartContext.addItem(item);
                    }}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className={styles.removebtn}
                    onClick={() => cartContext.removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div>
            <h1>Total Amount : {cartContext.totalAmount}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
