import gql from "graphql-tag";

export default gql`
  query listProductLists {
    listProductLists{
      items {
        id,
        title,
        price,
        quantity
      }
    }
  }
`