import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import '../style/App.css'
import { addToBasket, resetBasket } from '../redux/actions/master'
import NavBar from  '../components/NavBar/NavBar'
import ProductList from '../components/ProductList/ProductList'
import ProductLists from '../Queries/ProductList'

class AppContainer extends Component {

  handleBasket = () => {
    const bag = JSON.stringify(this.props.checkout.basket)
    alert(`Your basket:\n ${bag}`)
  }

  handleCartItems = (basket) => {
    const subTotal = Object.keys(basket).reduce( (acc, cv)=>{
      return acc +  basket[cv].quantity
    }, 0)
  return subTotal
  }

  render() {
    const { AllProducts, checkout: { basket } } = this.props

    return (
      <div className="appContainer">
      <NavBar
        color= "light"
        numOfBasketItems={ this.handleCartItems(basket) || 0}
      />
      <section className="my-4">
        <ProductList
          productList = { AllProducts }
        />
      </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    checkout: state
  }
)

const masterqL = graphql(ProductLists, {
  options: {
    fetchPolicy: "network only"
  },
  props: props => ({
    AllProducts: props.data.listProductLists ? props.data.listProductLists.items : []
  })
})

const masterCompose = compose(masterqL, connect(mapStateToProps, {addToBasket, resetBasket}))(AppContainer)

export default masterCompose

