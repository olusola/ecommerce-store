import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Button } from 'reactstrap'
import { resetBasket } from '../../redux/actions/master'

class SuccessContainer extends Component {
  componentDidMount(){
    this.props.resetBasket()
  }
  render(){
    return(
      <Container>
        <h1>Transaction Completed!</h1>
        <Button color="primary" >
          <NavLink to="/">
          Back to store
          </NavLink>
        </Button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state
  }
}
export default connect(mapStateToProps,{resetBasket})(SuccessContainer)