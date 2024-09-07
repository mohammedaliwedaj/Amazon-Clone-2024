import React from 'react'
import classes from './header.module.css'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LowerHeader from './LowerHeader';
import { IoLocationOutline } from "react-icons/io5";

function Header() {
  return (
    <>
      <section className={classes.header}>
        <a href="/">
          <img
            className={classes.header__logo}
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon logo"
          />
        </a>
        <div className={classes.header_delivery}>
          <span>
            <IoLocationOutline />
          </span>
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        {/* search section */}
        <div className={classes.header__search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" className={classes.header__searchInput} />
          <SearchIcon className={classes.header__searchIcon} />
        </div>
        {/* nav section */}

        <div className={classes.header__nav}>
          <div className={classes.header__option}>
            <span className={classes.header__optionLineOne}>Hello Geust</span>
            <span className={classes.header__optionLineTwo}>Sign In</span>
          </div>
          <div className={classes.header__option}>
            <span className={classes.header__optionLineOne}>Returns</span>
            <span className={classes.header__optionLineTwo}>& Orders</span>
          </div>
          <div className={classes.header__option}>
            <span className={classes.header__optionLineOne}>Your</span>
            <span className={classes.header__optionLineTwo}>Prime</span>
          </div>
          <div className={classes.header__optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={`${classes.header__optionLineTwo} ${classes.header__basketCount}`}
            >
              0
            </span>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header
