import React from "react";
import "./sideNav.scss";
import { Link } from "react-router-dom";
import AdminUserInfo from "../components/AdminUserInfo";

const SideNav = (props) => {
  return (
    <div className="side-nav-wrapper">
      <ul className="side-nav-items">
        <li>
          <AdminUserInfo></AdminUserInfo>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Sign Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
