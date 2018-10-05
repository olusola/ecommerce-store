import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addToBasket, removeFromBasket } from '../../redux/actions/master'
import { Container, Col, Row } from 'reactstrap'
import ProductItem from '../ProductItem/ProductItem'

class ProductList extends Component {

  handleAddToCart = (productDetails) => {
    const { id, title, price } = productDetails
    const item = {
      id,
      title,
      price
    }
    this.props.addToBasket(item)
  }

  displayQuantity = (product) => {
    const { checkout: { basket } } = this.props
    for(const key in basket) {
      if (product.id === key) {
        return basket[key].quantity
      }
    }
  }

  handleRemoveFromCart = (productDetails) => {
      const { id } = productDetails
      this.props.removeFromBasket(id)
  }

  render() {
    const { productList } = this.props
    return (
      <Container fluid>
        <Row>
          {
            productList.map((product, index) => (
              <Col key={ index } xs="6" sm="4" md="3" className="mb-3">
                <ProductItem
                  productDetails = {product}
                  handleAddToCart = { this.handleAddToCart }
                  handleRemoveFromCart = { this.handleRemoveFromCart }
                  itemQuantity = {this.displayQuantity(product) || 0}
                />
              </Col>
            ))
            }
        </Row>
      </Container>
    )
  }
}

ProductList.propTypes = {
  productList: PropTypes.array.isRequired
}

const mapStateToProps = (state) => (
  {
    checkout: state
  }
)


export default connect(mapStateToProps, {addToBasket, removeFromBasket})(ProductList)
