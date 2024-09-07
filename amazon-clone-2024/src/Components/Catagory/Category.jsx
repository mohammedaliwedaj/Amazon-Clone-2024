import React from "react";
import { categoryInfos } from "./CatagoryFullinfo";
import CategoryCard from "./CategoryCard";
import classes from "./catagory.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos, index) => {
        return <CategoryCard key={index} data={infos} />;
      })}
    </section>
  );
}

export default Category;
