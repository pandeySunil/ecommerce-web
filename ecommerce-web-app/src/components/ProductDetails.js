import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { fetchProductsDetails } from "../redux/actions/product.actions";
import { addItemsToCartStart } from "../redux/actions/cart.actions";
import { useParams } from "react-router-dom";
import "./productDetails.scss";

const ProductDetails = (props) => {
  const mapStateToProps = ({ products }) => ({
    Product: products.productDetail || {},
  });
  const { productId } = useParams();
  const { Product } = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemsToCartStart({ ...Product, quantity: 1 }));
  };

  useEffect(() => {
	  console.log("PId",productId);
    if (!productId) {
      return <h3>Invalid Product Id</h3>;
    }
    dispatch(fetchProductsDetails(productId));
  }, [productId]);

  
  const handleGoToCart = () => {

  };
  return (
    <div className="productDetails-wrapper">
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={Product.imgUrl} />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src={Product.thumnilImgUrlOne} />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src={Product.thumnilImgUrlTwo} />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src={Product.imgUrlOne} />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src={Product.imgUrlTwo} />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src={Product.imgUrl} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src={Product.thumnilImgUrlOne} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src={Product.thumnilImgUrlTwo} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src={Product.imgUrlOne} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src={Product.imgUrlTwo} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{Product.name}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no">{Product.likes} reviews</span>
                </div>
                <p className="product-description">{Product.discripition}</p>
                <h4 className="price">
                  Current Price: <span>{Product.price}</span>
                </h4>
                <h4 className="category">
                  Category: <span>{Product.category}</span>
                </h4>
                <h4 className="subCategory">
                  SubCategory: <span>{Product.subCategory}</span>
                </h4>
                <h4 className="currency">
                  Currency: <span>{Product.currancyCode}</span>
                </h4>
                <h4 className="discount">
                  Discount: <span>{Product.discount}</span>
                </h4>
                <div className="action">
                  <button
                    className="add-to-cart btn btn-default"
                    type="button"
                    onClick={handleAddToCart}
                  >
                    add to cart
                  </button>
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-heart"></span>
                  </button>

                </div>
				 <Link className="go-to-cart-button"  to="/cart"> Go To Cart
	  </Link>
	  <Link className="go-to-product-grid"  to="/productGrid/All"> Go To Products Grid
	  </Link>
              </div>
			 
            </div>
          </div>
        </div>
      </div>
	  
    </div>
  );
};

export default ProductDetails;
