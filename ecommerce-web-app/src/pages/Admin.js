import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import "./admin.scss";
import Button from "../components/forms/Button";
import Modal from "../components/Model";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductStart,
  fetchProductStart,
  deleteProductStart,
} from "../redux/actions/product.actions";
import FormSelect from "../components/forms/FormSelect";
import FormInput from "../components/forms/FormInput";

const mapSate = ({ products }) => ({
  products: products.products?.sort((a, b) =>
    a.id < b.id ? 1 : b.id < a.id ? -1 : 0
  ),
});

const Admin = (props) => {
  useEffect(() => {
    dispatch(fetchProductStart());
  }, []);

  const dispatch = useDispatch();

  const { products } = useSelector(mapSate);

  const [hideModal, setHideModal] = useState(true);

  const [category, setProductCategory] = useState("Men");
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const toggleModal = () =>
    setHideModal(() => {
      return !hideModal;
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id =
      Math.max.apply(
        Math,
        products.map(function (product) {
          return product.id;
        })
      ) + 1;
    dispatch(addProductStart({ category, imgUrl, title, price, id }));
    dispatch(fetchProductStart());
  };
  const handleDelete = (id) => {
    dispatch(deleteProductStart(id));
  };
  return (
    <div className="admin-wrapper">
      <SideNav></SideNav>
      <div className="admin-main-content">
        <div className="callToActions">
          <ul>
            <li>
              <Button onClick={() => toggleModal()}>Add new product</Button>
            </li>
          </ul>
          <div className="modal-container">
            <Modal hideModal={hideModal} toggleModal={toggleModal}>
              <h1 key={1234}>ADD PRODUCT!!!</h1>

              <form className="product-form" onSubmit={(e) => handleSubmit(e)}>
                <FormSelect
                  options={[
                    { name: "Men", value: "Men" },
                    { name: "Women", value: "Women" },
                  ]}
                  label={"Select Category:"}
                  handleChange={(e) => setProductCategory(e.target.value)}
                  defaultvalue={{ name: "Men", value: "Men" }}
                />

                <FormInput
                  handleChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  label="Title:"
                  name="title"
                />
                <FormInput
                  handleChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  label="Price:"
                  name="price"
                />
                <FormInput
                  handleChange={(e) => {
                    setImgUrl(e.target.value);
                  }}
                  label="Image Url"
                  name="imgUrl"
                />
                <Button type="submit">SAVE</Button>
              </form>
            </Modal>
          </div>
        </div>
        <table className="ProductTable">
          <tbody>
            {products?.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="img-column" style={{ width: "10%" }}>
                    <img src={product.imgUrl} className="product-image" />
                  </td>
                  <td>
                    <span>Category:</span> {product.category}
                  </td>
                  <td>
                    <span>Name:</span> {product.name || product.title}
                  </td>
                  <td>
                    <span>Price:</span> {product.price}
                  </td>
                  <td>
                    <span className="action-buttons">
                      <Button
                        onClick={() => {
                          handleDelete(product.id);
                        }}
                      >
                        DELETE
                      </Button>
                    </span>
                    <span className="action-buttons">
                      <Button>EDIT</Button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
