import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import "./ProductGrid.scss";
import * as P from "./product.json";
import { useHistory, useParams } from "react-router-dom";
import FormSelect from "./forms/FormSelect";
import { addItemsToCartStart } from "../redux/actions/cart.actions";
import {
  fetchProductsWithFilter,
  fetchProductStart,
} from "../redux/actions/product.actions";
const ProductGrid = (props) => {
  const { filter } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDropDownChange = (e) => {
    const filterValue = e.target.value;
    history.push(`/productGrid/${filterValue}`);
  };

  useEffect(() => {
    console.log("filter",filter)
    if (filter && filter != "All") {
      dispatch(fetchProductsWithFilter(filter));
    } else {
      dispatch(fetchProductStart());
    }
  }, [filter]);

  const mapStateToProps = ({ products }) => ({
    products: products.products,
  });

  const { products } = useSelector(mapStateToProps);
  const conFigureSelect = {
    options: [
      {
        name: "Men",
        value: "Men",
      },
      {
        name: "Women",
        value: "Women",
      },
      {
        name: "All",
        value: "",
      },
    ],
    defaultvalue: filter,
    handleChange: handleDropDownChange,
    label: "Select Category",
  };

  const handleAddToCart = (product) => {
    dispatch(addItemsToCartStart({ ...product, quantity: 1 }));
  };

  return (
    <div className="container">
      <FormSelect {...conFigureSelect}></FormSelect>
      <div className="row">
        {Array.isArray(products)
          ? products?.map((pr) => {
              return (
                <Product
                  key={pr.id}
                  name={pr.name}
                  price={pr.price}
                  imgUrl={pr.imgUrl}
                  id = {pr.id}
                  handleAddToCart={() => handleAddToCart(pr)}
                ></Product>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ProductGrid;
