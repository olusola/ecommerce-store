import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

const NavBar = ({ color, numOfBasketItems }) => (
    <Navbar color={ color } fixed="top">
      <NavbarBrand className="text-primary lead">DUMMY | STORE</NavbarBrand>
      <Nav>
        <NavItem>
           <NavLink to="checkout">
            <span className="lead">ITEM(S): {numOfBasketItems}</span>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
)

export default NavBar