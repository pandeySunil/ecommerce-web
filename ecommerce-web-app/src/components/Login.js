import React, { useState, useEffect } from "react";
import "./login.scss";
import Button from "./forms/Button";
import FormInput from "../components/forms/FormInput";
import { useDispatch, useSelector } from "react-redux";
import {
  signInUserStart,
  checkUserSession,
} from "../redux/actions/user.actions";

const Login = (props) => {
  //const {userName,password} = {userName:"neha.Chandel@gmail.com",password:'Covid2@19'}
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const mapStateToProps = ({ user }) => {
    return {
      isRegisterSucessFull: user?.isRegisterSucessFull,
    };
  };

  const { isRegisterSucessFull } = useSelector(mapStateToProps);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || userName === "") {
      alert("Username Cannot be empty");
      return;
    }
    if (!password || password === "") {
      alert("Password Cannot be empty");
      return;
    }
    dispatch(signInUserStart({ userName, password }));
  };

  return (
    <div className="login-container">
      {isRegisterSucessFull && (
        <h4>Registration was sucessfull, please login to begin</h4>
      )}
      <div className="login-wrapper">
        <h2>Log In</h2>
        <div className="form-warapper">
          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <FormInput
              className="form-control"
              handleChange={(e) => {
                setUserName(e.target.value);
              }}
              label="UserName/Email"
              name="userName"
            />
            <FormInput
              className="form-control"
              handleChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              name="password"
              type="password"
            />
            <Button className="login-submit-button form-control" type="submit">
              Click To Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
