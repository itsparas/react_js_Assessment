import { useState } from "react";
import "./App.css";
import Cart from "./components/cartPage/Cart";
import Product from "./components/products/Product";
import CartProvider from "./store/CartProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartData, setCartData] = useState([
    {
      id: "1",
      imgUrl:
        "https://www.bigbasket.com/media/uploads/p/xxl/40241696_2-cadbury-dairy-milk-silk-valentine-chocolate-bar.jpg",
      productName: "Chocolate",
      price: "2",
      quantity: 1,
    },
    {
      id: "2",
      imgUrl:
        "https://m.media-amazon.com/images/I/61ljxTBpTCL._AC_UY327_FMwebp_QL65_.jpg",
      productName: "HeadPhone",
      price: "20",
      quantity: 1,
    },
    {
      id: "3",
      imgUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481",
      productName: "MackBook",
      price: "600",
      quantity: 1,
    },
  ]);
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Product productData={cartData} />} />
          <Route excat path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
