import React from 'react'
import {CiFacebook} from 'react-icons/ci'
import {FiTwitter} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
 import "../style/Last.css"

function Footer() {
  return (
      <div className="fst">
        <div className="snd">
        <div className="footer-col">
          <h4>company</h4>
        	<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
        </div>
        </div>
        <div className="trd">
        <div className="footer-col">
           <h4>get help</h4>
           <ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
         </div>
        </div>
        <div className="four">
        <div className="footer-col">
           <h4>online shop</h4>
           <ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
       </div>
        </div>
        <div className="fvf">
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="#">
              <CiFacebook/>
            </a>
            <a href="#">
               <FiTwitter/>
            </a>
            <a href="#">
              <BsWhatsapp/>
            </a>
            <a href="#">
              < BsInstagram/>
            </a>
          </div>
        </div>
        </div>
      </div>
 
  )
}

export default Footer