import gql from "graphql-tag";

export const CreateProduct  = gql `
  mutation CreateProduct{
  createProduct(input: {
    title:"gum",
    price: 10,
    stock: 100
  }){
    id,
    title,
    price,
    stock
  }
}
`