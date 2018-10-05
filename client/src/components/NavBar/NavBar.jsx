import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, Badge } from 'reactstrap'
const logo = require('../../assets/logo.png')

const NavBar = ({ color, numOfBasketItems }) => (
    <Navbar color={ color } fixed="top">
      <NavbarBrand className="text-light"><img src={logo} width="145px"/></NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink to="checkout">
            {/* <span aria-label="basket">Basket</span> */}
            <Badge color="danger">Basket: {numOfBasketItems}</Badge>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
)

export default NavBar