import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./registration.scss";
import Loader from "react-loader";
import { registerUser } from "../redux/actions/user.actions";
import { useHistory } from "react-router-dom";

const Registration = (props) => {
  const dispatch = useDispatch();

  const mapStateToProps = ({ user }) => {
    return {
      isRegisterSuccessFull: user?.isRegisterSucessFull,
      isLoading: user?.isLoading,
    };
  };

  const { isRegisterSuccessFull, isLoading } = useSelector(mapStateToProps);
  const [isSubmiting, setIsSubmitting] = useState(true);

  const history = useHistory();
  useEffect(() => {
    if (isRegisterSuccessFull) {
      history.push("/Login");
    }
  }, [isRegisterSuccessFull]);

  const formIntialState = {
    values: {
      displayName: "",
      firstName: "",
      lastName: "",
      profileImageUrl: "NoImage",
      email: "",
      username: "",
      password: "",
      street: "",
      city: "",
      city: "",
      state: "",
      zipcode: "",
    },
    errors: {
      displayName: "",
      firstName: "",
      lastName: "",
      profileImageUrl: "NoImage",
      email: "",
      username: "",
      password: "",
      street: "",
      city: "",
      city: "",
      state: "",
      zipcode: "",
    },
  };

  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (!value && value == "") {
      setFormState({
        ...formState,

        errors: {
          ...formState.errors,
          [name]: `${name?.charAt(0)?.toUpperCase()}${name?.slice(
            1
          )} cannot be empty`,
        },
      });
    } else {
      setFormState({
        ...formState,
        values: {
          ...formState.values,
          [name]: value,
        },
        errors: {
          ...formState.errors,
          [name]: "",
        },
      });
    }

    if (name && name == "email") {
      validateEmail(value);
    }
    // if(name && name =="password") {validateStrongPassword(value)};
    // if(name && name=='confirm')
    //validateConfirmPassword(formState[' values']['password'],value);
    //console.log("Onblur", formState);
  };

  const validateStrongPassword = (value) => {
    if (
      !/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(
        value
      )
    ) {
      setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          password:
            "Please enter a strong password Guide for Strong Password \nEnsure string has two uppercase letters.Ensure string has one special case letter.Ensure string has two digits.Ensure string has three lowercase letters.\nEnsure string is of length 8",
        },
      });
    }
  };
  const validateEmail = (value) => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        value
      )
    ) {
      setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          email: "Please enter valid email example: user@example.com",
        },
      });
    }
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password != confirmPassword) {
      setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          confirm: "Confirm Password should be same as password",
        },
      });
    }
  };

  const handleBlur = (e) => {
    const {
      target: { name, value },
    } = e;

    if (!value && value == "") {
      setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          [name]: `${name?.charAt(0)?.toUpperCase()}${name?.slice(
            1
          )} cannot be empty`,
        },
      });
    } else {
      setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          [name]: "",
        },
      });
    }
    if (name && name == "email") validateEmail(value);
    // if(name && name=='confirm')
    //validateConfirmPassword(formState[' values']['password'],value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors, values } = formState;
    const formFileds = Object.keys(errors);
    //const formFileds = Object.keys(errors);
    let isFormInvalid = false;

    const formErrors = formFileds.forEach((f) => {
      if (errors[f] != "" || values[f] == "") {
        isFormInvalid = true;
        return `${errors[f]}\n`;
      }
    });

    if (isFormInvalid) {
      alert(JSON.stringify("Form is Invalid,please look for mandetory fileds"));
    } else {
      setIsSubmitting(false);
      const {
        displayName,
        firstName,
        lastName,
        profileImageUrl,
        email,
        username,
        password,
        street,
        city,
        state,
        zipcode,
      } = formState.values;

      const registerUserModel = {
        displayName,
        firstName,
        lastName,
        profileImageUrl,
        email,
        username,
        password,
        address: {
          city,
          street,
          zipcode,
          state,
        },
      };

      dispatch(registerUser(registerUserModel));
    }
  };

  const displayLoader = () => {
    return isLoading;
  };
  const RegistrationSuccess = () => {
    if (isRegisterSuccessFull) return <h1>Regiusterdkml;</h1>;
  };
  return (
    <>
      {RegistrationSuccess()}
      <Loader
        loaded={
          isSubmiting || typeof isLoading == undefined || isLoading == false
        }
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                  {/* {(!error || error!='') ?(<h5 style={{color:"red"}}> {error} </h5>):(<></>)} */}
                  <form className="form-horizontal" method="post" action="#">
                    <div className="form-group">
                      <label
                        htmlFor="displayName"
                        className="cols-sm-2 control-label"
                      >
                        Your Display Name
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-user fa" aria-hidden="true"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="displayName"
                            id="displayName"
                            placeholder="Enter your Display Name"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="displayName"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.displayName}
                      </label>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="firstName"
                        className="cols-sm-2 control-label"
                      >
                        Your First Name
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-user fa" aria-hidden="true"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            placeholder="Enter Your First Name"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="firstName"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.firstName}
                      </label>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="lastName"
                        className="cols-sm-2 control-label"
                      >
                        Your Last Name
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-user fa" aria-hidden="true"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="lastName"
                            placeholder="Enter your Last Name"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="lastName"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.lastName}
                      </label>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="cols-sm-2 control-label"
                      >
                        Your Email
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-envelope fa"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Enter your Email"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="name"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.email}
                      </label>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="username"
                        className="cols-sm-2 control-label"
                      >
                        Username
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-users fa"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            placeholder="Enter your Username"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="name"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.username}
                      </label>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="password"
                        className="cols-sm-2 control-label"
                      >
                        Password
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-lock fa-lg"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Enter your Password"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="password"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.password}
                      </label>
                    </div>
                    {/* <div className="form-group">
                  <label htmlFor="confirm" className="cols-sm-2 control-label">
                    Confirm Password
                  </label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        name="confirm"
                        id="confirm"
                        placeholder="Confirm your Password"
                        onBlur={(e) => handleBlur(e)}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <label htmlFor="password" className="cols-sm-2 control-label error">
                    {formState?.errors?.confirm}
                  </label>
                </div> */}

                    <div className="form-group">
                      <label
                        htmlFor="street"
                        className="cols-sm-2 control-label"
                      >
                        Street
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-lock fa-lg"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="street"
                            id="street"
                            placeholder="Enter the lane"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="street"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.street}
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city" className="cols-sm-2 control-label">
                        City
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-lock fa-lg"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            id="city"
                            placeholder="Enter the city"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="city"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.city}
                      </label>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="state"
                        className="cols-sm-2 control-label"
                      >
                        State
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-lock fa-lg"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            id="state"
                            placeholder="Enter the state"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="state"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.state}
                      </label>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="zipcode"
                        className="cols-sm-2 control-label"
                      >
                        ZipCode
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-lock fa-lg"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="zipcode"
                            id="zipcode"
                            placeholder="Enter  zipcode"
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="zipcode"
                        className="cols-sm-2 control-label error"
                      >
                        {formState?.errors?.zipcode}
                      </label>
                    </div>
                    <div className="form-group ">
                      <button
                        type="submit"
                        className="btn  btn-lg btn-block"
                        onClick={(e) => {
                          handleSubmit(e);
                        }}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Loader>{" "}
    </>
  );
};

export default Registration;
