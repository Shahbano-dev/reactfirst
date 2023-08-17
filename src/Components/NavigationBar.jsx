import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import { FaAtlassian } from "react-icons/fa";

import React from 'react'
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-dark " style={{ height: '70px' }}>
    <Container>
      <Navbar.Brand href="#home"><div style={{display : "flex"}}><FaAtlassian style={{fontSize : "40px" , color: "white"}}/><p style={{fontSize : "30px" , color: "white"}}>style</p></div></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/"  style={{ color : 'white' , marginLeft : "20px" , padding : "10px" , textDecoration : "none"}}>Home</Link>
          <Link to="/SignUp"  style={{ color : 'white' , padding : "10px" , textDecoration : "none" }}>SignUp</Link>
          <Link to="/Login"  style={{ color : 'white', padding : "10px" , textDecoration : "none" }}>Login</Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"  style={{ color : 'white' , fontSize : '26px' }}><AiOutlineSearch/></Nav.Link>
          <Nav.Link href="#deets"  style={{ color : 'white' , fontSize : '26px' }}><AiOutlineHeart/></Nav.Link>
          <Nav.Link eventKey={2} href="#memes"  style={{ color : 'white' , fontSize : '26px'  }}>
          <AiOutlineShoppingCart/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</>
  )
}