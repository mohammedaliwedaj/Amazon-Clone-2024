import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Declare and initialize isLoading
  const { categoryName } = useParams();
  // console.log(categoryName)

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        // console.log(res.data);
        setIsLoading(false); // Set isLoading to false after receiving the API response
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set isLoading to false in case of an error
      });
  }, [categoryName]);

  // console.log(results)

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )} 
      </section>
    </LayOut>
  );
}

export default Results;
