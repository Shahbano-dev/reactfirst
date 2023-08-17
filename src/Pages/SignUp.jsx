import React, { useContext, useReducer } from "react";
import { FaAtlassian } from "react-icons/fa";
import { GlobalContext } from "../Context/context";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import "../style/Second.css";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  mobile: "",
  address: "",
};

const formReducer = (form_state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...form_state, [action.payload.name]: action.payload.value };
    default:
      return form_state;
  }
};

export default function SignUp() {
  const [form_state, formDispatch] = useReducer(formReducer, initialState);
  const {state , dispatch} = useContext(GlobalContext)

  const handleChange = (e) => {
    formDispatch({
      type: "UPDATE_FIELD",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form_state);
    dispatch(
         {
          type : "SIGNUP_USER",
          payload : form_state
         }

    )
  };

  return (
    <>
       <NavigationBar/>
      <div className="containers" style={{marginBottom:"50px"}}>
        <div className="header">
          <div className="lo">
            <FaAtlassian className="logofont" />
            <h3 className="logostyle">style.</h3>
          </div>
          <div className="headdiv">
          <h1>Create Account</h1>
          </div>
        </div>
        <div className="loginfoam">
           
            <form onSubmit={handleSubmit}>
              <div className="userdiv">
                <input
                className="inputo"
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={form_state.firstname}
                  onChange={handleChange}
                  required
                />
                <input
                className="inputo"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={form_state.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
              className="inputf"
                type="email"
                name="email"
                placeholder="Email"
                value={form_state.email}
                onChange={handleChange}
                required
              />
              <input
              className="inputf"
                type="password"
                name="password"
                placeholder="Password"
                value={form_state.password}
                onChange={handleChange}
                required
              />
              <input
              className="inputf"
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={form_state.mobile}
                onChange={handleChange}
                required
              />
              <input
              className="inputf"
                type="text"
                name="address"
                placeholder="Address"
                value={form_state.address}
                onChange={handleChange}
                required
              />
              <div>
                <button type="submit" className="btnSubmit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      <Footer/>
    </>
  );
}