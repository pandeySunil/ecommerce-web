import logo from "./logo.svg";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Registration from "./pages/Registration";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/Login";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import HeaderV2 from './components/HeaderV2'
import Cart from "./components/Cart";
import Admin from "./pages/Admin";
import { BASE_AUTH_URL } from "./Base";
import { useEffect } from "react";
import { checkUserSession } from "./redux/actions/user.actions";
import { useDispatch } from "react-redux";

import "./reset.scss";
import Homepage from "./pages/Homepage";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(checkUserSession());
    } else {
      history.push("/Login");
    }
  }, []);

  return (
    <div className="App">
      <div className="main">
        <Switch>
        <Route
            exact
            path="/header"
            render={() => (
             
                <HeaderV2></HeaderV2>
             
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout>
                <Homepage></Homepage>
              </MainLayout>
            )}
          />

          <Route
            exact
            path="/Login"
            render={() => (
              <MainLayout>
                <Login></Login>
              </MainLayout>
            )}
          />

          <Route
            exact
            path="/register"
            render={() => (
              <MainLayout>
                <Registration />
              </MainLayout>
            )}
          />

          <Route
            exact
            path="/Admin"
            render={() => (
              <AdminLayout>
                <Admin></Admin>
              </AdminLayout>
            )}
          />
          <Route
            exact
            path="/productGrid"
            render={() => (
              <MainLayout>
                <ProductGrid></ProductGrid>
              </MainLayout>
            )}
          />
          <Route
            path="/productGrid/:filter"
            render={() => (
              <MainLayout>
                <ProductGrid></ProductGrid>
              </MainLayout>
            )}
          />
          <Route
            path="/productDetails/:productId"
            render={() => (
              <MainLayout>
                <ProductDetails></ProductDetails>
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <MainLayout>
                <Cart></Cart>
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
