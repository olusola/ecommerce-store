import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Jumbotron } from 'reactstrap'
import { injectStripe } from 'react-stripe-elements'
import CardForm from './CardForm'
// import PaymentRequestForm from './PaymentRequestForm'

class Payment extends Component {

  state = {
    redirect: false,
    processing: false
  }

  handleToken = async (token) => { 
    fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({token:token, amount: this.props.subTotal * 100})
    })
    .then(response => {
      if (!response.ok)
        throw response;
      return response.json();
    })
    .then(output => {
      console.log("Purchase succeeded:", output)
      this.setState({ redirect: true })

    })
    .catch(err => {
      console.log("Purchase failed:", err);
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({processing: true})
    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      if(token){
        this.handleToken(token)
      }
    })
  }
  render () {

    if(this.state.redirect){
      return <Redirect to='/success'/>
    }

    return (this.props.subTotal !== 0) ?(
      <div>
        {
          this.state.processing ? (<h5>Processing...</h5>) : null
        }
        <Jumbotron className="p-2">
        <form onSubmit={this.handleSubmit}>
          <CardForm/>
          <Button className="my-3" color="dark" block>Pay Now</Button>
        </form>
        <small className="text-muted">4000008260000000</small>
        </Jumbotron>
        
      </div>
    ) : null
  }
}

export default injectStripe(Payment)