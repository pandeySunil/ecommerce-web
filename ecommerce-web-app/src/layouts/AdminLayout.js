import React from "react";
import Header from "../components/Header";

const AdminLayout = (props) => {
  return (
    <div className="admin-layout-wrapper">
      <Header></Header>
      {props.children}
    </div>
  );
};

export default AdminLayout;
