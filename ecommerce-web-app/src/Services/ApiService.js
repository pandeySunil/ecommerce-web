import axios from "axios";
import { BASE_AUTH_URL } from "../Base";

const BaseUrl = "http://localhost:3000";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
export const getAllProducts = async () => {
  return axios
  .get(`${BASE_AUTH_URL}/products`)
  .then((response) => {
    return [...response?.data?.productResult];
  })
  .catch((e) => {
    console.log(e);
  });
};

export const addProduct = (productDate) => {
  return axios
    .post(`${BaseUrl}/products`, productDate)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const deleteProduct = (id) => {
  return axios
    .delete(`${BaseUrl}/products/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {});
};

export const checkUserSession = () => {
  return axios
    .get(`${BASE_AUTH_URL}/Account/currentUser`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const loginUser = (creds) => {
  return axios
    .post(`${BASE_AUTH_URL}/Account/login`, creds)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log("loginError", e);
    });
};

export const registerUser = (user) => {
  return axios
    .post(`${BASE_AUTH_URL}/Account/register`, user)
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log("loginError", e);
      return null;
    });
};

export const fetchProductWithFilter = (filter) => {
  return axios
    .get(`${BASE_AUTH_URL}/products?Category=${filter}`)
    .then((response) => {
      return [...response?.data?.productResult];
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchProductDetail = (productId) => {
  return axios
    .get(`${BASE_AUTH_URL}/products/${productId}`)
    .then((response) => {
      return { productDetail: response.data };
    })
    .catch((e) => {
      console.log(e);
    });
};
