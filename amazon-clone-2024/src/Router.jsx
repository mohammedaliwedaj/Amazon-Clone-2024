import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Auth from "./Pages/Auth/Auth";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PzGF9JKWZ9c6DBRzjmTwo2Yt1Te7kmPmzIOw7NDVjBtKGMnvmNFjZg4k02sfDhp2uLkaQFq5e4olcllM724DOyw00MKAJEYx2"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}

        {/* Add this route to handle category and product details */}
        <Route
          path="/category/:categoryName/products/:productId"
          element={<ProductDetail />}
        />
      </Routes>
    </Router>
  );
}

export default Routing;
