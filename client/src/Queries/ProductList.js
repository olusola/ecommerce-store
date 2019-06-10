import gql from "graphql-tag";

export const listProductLists = gql`
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

export const dummy = gql`
  query ListPosts{
  listPosts{
    items{
      id,
      gene,
      title
    }
  }
}
`

export const ListProducts = gql`
  query listProducts{
  listProducts{
    items{
      id,
      title,
      price,
      stock,
      imgUrl
    }
  }
}
`