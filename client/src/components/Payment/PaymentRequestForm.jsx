import React, { Component } from 'react'
import { PaymentRequestButtonElement, injectStripe } from 'react-stripe-elements'
// import './CardForm.css'
class PaymentRequestForm extends Component {
  constructor(props){
    super(props)


    const paymentRequest = props.stripe.paymentRequest({
      country: 'GB',
      currency: 'gbp',
      total: {
        label: 'Demo total',
        amount: 1000,
      },
    })

    paymentRequest.on('token', ({complete, token, ...data}) => {
      console.log('Received Stripe token: ', token);
      console.log('Received customer information: ', data);
      complete('success')
    })

    paymentRequest.canMakePayment().then((result) => {
      this.setState({canMakePayment: !!result});
    })

    this.state = {
      canMakePayment: false,
      paymentRequest,
    }


  }
  render () {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
      paymentRequest={this.state.paymentRequest}
      className="PaymentRequestButton"
      style={{
        // For more details on how to style the Payment Request Button, see:
        // https://stripe.com/docs/elements/payment-request-button#styling-the-element
        paymentRequestButton: {
          theme: 'light',
          height: '64px',
        },
      }}
      />
    ) : null
  }
}

export default injectStripe(PaymentRequestForm)