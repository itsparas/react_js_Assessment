import React, { useContext } from "react";

import styles from "./products.module.css";
import CartContext from "../../store/cart-context";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);

  let quantity = cartContext.items.reduce((total, curr) => {
    return (total += curr.quantity);
  }, 0);

  const addProductHandler = (item) => {
    cartContext.addItem(item);
  };

  return (
    <>
      <div className={styles.product}>
        <div>JoyStore</div>
        <div>
          <button
            onClick={() => {
              navigate("/cart");
            }}
          >
            Shopping Cart{`  ${quantity} `}
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.productArray}>
          {props.productData.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.imgUrl} alt="image2" />
                <p>{item.productName}</p>
                <p>{`$ ${item.price}`}</p>
                <button
                  onClick={() => {
                    addProductHandler(item);
                  }}
                >
                  Add To Cart{" "}
                  <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
