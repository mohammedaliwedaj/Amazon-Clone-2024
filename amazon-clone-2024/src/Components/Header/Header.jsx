

import React, { useContext } from "react";
import classes from "./header.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {

  const [{basket}, dispatch] =useContext(DataContext)
  
  return (
    <>
      <section className={classes.header}>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <LocationOnOutlinedIcon />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search section */}
          <div className="search">
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <SearchIcon size={25} />
          </div>

          {/* other section */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                  src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                  alt=""
                />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>

            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <ShoppingBasketOutlinedIcon />
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
