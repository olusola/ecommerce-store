import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Elements } from 'react-stripe-elements'
import Payment from '../../components/Payment/Payment'
import { Container,Col, Row, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import './checkoutContainer.css'

class CheckoutContainer extends Component {

  basketTotal = (basket) => {
      const subTotal = Object.keys(basket).reduce( (acc, cv)=>{
        return acc + (basket[cv].price * basket[cv].quantity)
      }, 0)
    return subTotal
  }

  render() {
    const { checkout: { basket } } = this.props
    return (
      <div>
        <Navbar color="primary" fixed="top">
        <Link className="text-light" to="/">
              <h6>Back to store</h6>
          </Link>

        </Navbar>
        <Container className="checkoutContainer">
          <h6 className="text-primary">BASKET</h6>
          {
            Object.keys(basket).map((item, index) => {
              return (
                <Row key={index} >
                <Col xs="5" md="4" className="text-left">{ basket[item].title }</Col>
                <Col xs="3" md="4" className="text-center"> {`${ basket[item].quantity }x`} </Col>
                <Col xs="4" md="4" className="text-right">{` £${ basket[item].price }`} </Col>
              </Row>
              )
            })
          }
          <div className="lead text-right"><hr/>Total: <span className="lead text-primary">£{ this.basketTotal(basket)}</span><hr/></div>
          <section>
            <Elements>
                <Payment
                  subTotal={ this.basketTotal(basket) }
                />
            </Elements>
          </section>
        </Container>
      </div>
    )
  }
}

const mapPropsToState = (state) => {
  return {
    checkout: state
  }
}
export default connect(mapPropsToState)(CheckoutContainer)
