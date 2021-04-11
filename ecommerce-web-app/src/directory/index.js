import React from "react";
import {useHistory} from 'react-router-dom'
import "./style.scss";

import ShopMen from "./ShopMen.jpg";
import ShopWomen from "./ShopWomen.jpg";
const Directory = (props) => {
  const history = useHistory();
  const handleCatergoryClick=(category)=>{
    history.push(`/productGrid/${category}`)
  }
  return (
    <div className="shop-wrapper">
      <div
        className="shop-men"
        style={{
          backgroundImage: `url(${ShopMen})`,
        }}
     onClick={()=>handleCatergoryClick("men")} ></div>
      <div
        className="shop-women"
        style={{
          backgroundImage: `url(${ShopWomen})`,
        }}
        onClick={()=>handleCatergoryClick("women")}  ></div>
    </div>
  );
};

export default Directory;
