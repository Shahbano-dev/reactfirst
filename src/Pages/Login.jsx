import React from 'react'
import { FaAtlassian } from "react-icons/fa";
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
export default function Login() {
  return (
    <>
    <NavigationBar/>
    <div className="containers" >
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
        <form >
        <input
              className="inputf"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
              className="inputf"
                type="password"
                name="password"
                placeholder="Password"
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
  )
}
