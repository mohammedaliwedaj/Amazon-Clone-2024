import React, { useContext, useState } from "react";
import classes from "./product.module.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flex, renderDesc, renderAdd, amount }) {
  if (!product || !product.image) {
    return null; // or return a placeholder component or default content
  }

  const { image, title, id, rating, price, description } = product;

  // const [state, dispatch] = useContext(DataContext);
  // const [buttonVisible, setButtonVisible] = useState(true);

  // const hidenButton = () => {
  //   setButtonVisible(false);
  // };

  // const addToCart = () => {
  //   dispatch({
  //     type: Type.ADD_TO_BASKET,
  //     item: {
  //       image,
  //       title,
  //       id,
  //       rating,
  //       price,
  //       description,
  //     },
  //   });
  // };
  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`./products/${id}`}>
        <img src={image} alt="" className={classes.img__container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "520px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating  */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count  */}
          <small>{rating.count}</small>
        </div>

        <div>
          {/* price */}
          {/* <CurrencyFormat amount={price}/> */}
        </div>

        <button className={classes.button}></button>
      </div>
    </div>
  );
}

export default ProductCard;
