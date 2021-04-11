import React from "react";
import {useHistory} from 'react-router-dom'
import "./Product.scss";
import { addItemsToCartStart } from "../redux/actions/cart.actions";

const Product = ({ name, price, imgUrl,id,handleAddToCart }) => {

  const history = useHistory();
  const handleViewDetails=(e)=>{
    e.preventDefault();
    history.push(`/productDetails/${id}`)

  }
  return (
    <div className="col-xl-4 product-grid">
      <div className="image">
        <a href="#" onClick={(e)=>handleViewDetails(e)} >
          <img src={imgUrl} className="--w-75" />
          <div className="overlay">
            <div className="detail" >View Details</div>
          </div>
        </a>
      </div>
      <h5 className="text-center">{name}</h5>
      <h5 className="text-center">{price}</h5>
      <a href="#" className="btn buy" onClick={handleAddToCart}>
        Add To Cart
      </a>
    </div>
  );
};

export default Product;
