import React from "react";
import classes from "./signUp.module.css";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      {/* form */}

      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="passwor">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login__signInButton}>Sign In</button>
        </form>

        {/* agreement */}
        <p>
          By sign-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.Please see our Privacy Notice,Our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        {/* create account btn */}
        <button className={classes.login__registerButton}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth;
