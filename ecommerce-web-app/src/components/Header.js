import React, { useState, useEffect } from "react";
import "./header.scss";
import Logo from "../logo.svg";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInUserStart,
  CheckLoggedInUser,
  checkUserSession,
  logOutUser,
} from "../redux/actions/user.actions";

const Header = (props) => {
  const mapSate = ({ user, cart }) => ({
    isLoggedIn: !user || user.isLoggedIn,
    user: user,
    cart: cart?.cartItems,
  });

  const history = useHistory();
  const { isLoggedIn, user, cart } = useSelector(mapSate);

  const setQuantity = (items) => {
    const qty = items.map((i) => {
      return (i.quantity += i.quantity);
    });
    return qty;
  };

  const quantity =
    cart && Array.isArray(cart)
      ? cart.reduce((accum, c) => accum + c.quantity, 0)
      : 0;

  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(logOutUser());
    history.push("/Login");
  };
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="Ecommer-Website-Logo" />
          </Link>
        </div>
        <div className="register-link-container">
          <Link to="/register">Register</Link>
        </div>
        <div className="register-Login-container">
          {isLoggedIn ? (
            <>
              <span className="user-greeting"> Hello! {user.displayName}</span>
              <Link to="/Login" onClick={handleLogOut}>
                LogOut
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Link to="/Login">LogIn</Link>
            </>
          )}
          <div className="cart-value">
            <Link to="/cart">Cart({quantity})</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
