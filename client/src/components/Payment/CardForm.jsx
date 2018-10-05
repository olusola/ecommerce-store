import React, { Component } from 'react'
import { CardElement } from 'react-stripe-elements'
import './CardForm.css'
class CardForm extends Component {
  render () {
    const createOptions = (padding) => {
      return {
        style: {
          base: {
            color: '#424770',
            letterSpacing: '0.025em',
            fontFamily: 'Source Code Pro, monospace',
            '::placeholder': {
              color: '#aab7c4',
            },
            padding,
          },
          invalid: {
            color: '#9e2146',
          },
        },
      };
    }
    return(
      <div>
          <h5 className=" text-dark">Card Payment</h5>
          <CardElement  {...createOptions()} />
      </div>
    )
  }
}

export default CardForm