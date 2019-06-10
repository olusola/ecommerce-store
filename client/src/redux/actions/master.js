import { ADD_TO_BASKET, REMOVE_FROM_BASKET, RESET_BASKET } from '../constants'

export const addToBasket = (item) => {
  return {
    type: ADD_TO_BASKET,
    item
  }
}

export const removeFromBasket = (productId) => {
  return {
    type: REMOVE_FROM_BASKET,
    productId
  }
}

export const resetBasket = () => {
  return {
    type: RESET_BASKET
  }
}