import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import DefaultUserImage from "./defaultUserImage.jpg";
import "./adminUserInfo.scss";

const AdminUserInfo = (props) => {
  return (
    <div className="admin-user-warpper">
      <div className="admin-image">
        <img src={DefaultUserImage} />
      </div>
      <h2>Jammie Lannister</h2>
    </div>
  );
};

export default AdminUserInfo;
