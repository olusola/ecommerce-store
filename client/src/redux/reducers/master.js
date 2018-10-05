import { ADD_TO_BASKET, REMOVE_FROM_BASKET, RESET_BASKET } from '../constants'

const initialState = {'basket':{}}

const masterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return addToCart(state, action)
    case REMOVE_FROM_BASKET:
      return decreaseQuantity(state, action)
    case RESET_BASKET:
      return {
        ...state,
        basket: {}
      }
    default: 
    return state
  }
}

const decreaseQuantity = (state, action) => {
  const { productId } = action
  const { basket } = state

  if (basket[productId]) {
    if (basket[productId].quantity > 1) {
      return {
        ...state,
        basket: {
          ...state.basket,
          [productId]: {
            ...state.basket[productId],
            quantity: basket[productId].quantity -=1
          }
        }
      }
    }else{ 
      const newState = Object.keys(basket).filter((itemKey) => {
        return productId !== itemKey
      }).reduce((obj, key)=>{
        return ({
          ...obj,
          [key]: {...basket[key]}
        })
      },{})
      return {basket: newState}
    }
  }
  return state
}

const addToCart = (state, action) => {
  const { item } = action
  const { basket } = state

  if (basket[item.id]) {
    return increaseQuantity(state, action)
  }else{
    return updateCart(state, action)
  }
}

const updateCart = (state, action) => {
  const { item } = action
  const defaultQuantity = 0

  const cart = {
    ...state,
    basket: {
      ...state.basket,
      [item.id]:{
        ...item,
        quantity: defaultQuantity + 1
      }
    }
  }
  return cart
}

const increaseQuantity = (state, action) => {
  const { item } = action
  const { basket } = state

  return {
    ...state,
    basket: {
      ...state.basket,
      [item.id]: {
        ...item,
        quantity: basket[item.id].quantity +=1
      }
    }
  }
}

export default masterReducer