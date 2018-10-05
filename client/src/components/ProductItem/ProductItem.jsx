import React from 'react';
import { Card, CardImg, CardBody, CardSubtitle, Button, ButtonGroup } from 'reactstrap';

const ProductItem = ({productDetails, handleAddToCart, handleRemoveFromCart, itemQuantity}) => {
  const { title, price } = productDetails
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody className="text-center">
          <h6>{ title }</h6>
          <CardSubtitle>{ price }</CardSubtitle>
          <ButtonGroup size="sm" className="mt-2">
        <Button onClick={ () => handleRemoveFromCart(productDetails) } color="secondary">-</Button>
        <Button color="light">{ itemQuantity }</Button>
        <Button onClick={ () => handleAddToCart(productDetails) } color="secondary">+</Button>
      </ButtonGroup>
        </CardBody>
      </Card>
    </div>
  )
  
}

export default ProductItem