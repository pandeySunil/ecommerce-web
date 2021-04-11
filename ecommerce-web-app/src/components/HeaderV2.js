import React, { useState, useEffect } from "react";
import "./headerv2.scss";
import Logo from "../logo.svg";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInUserStart,
  CheckLoggedInUser,
  checkUserSession,
  logOutUser,
} from "../redux/actions/user.actions";

const HeaderV2 = (props) => {
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
       <ul className="header-nav">
           <li className="nav-links "><a>Hello ! NEHA CHANDEGL@JHJKLKJL</a></li>
           <li className="nav-links margin"><a>CART(15)</a></li>
           <li className="nav-links margin"><a>Register</a></li>
       </ul>
      </div>
    </header>
  );
};

export default HeaderV2;
