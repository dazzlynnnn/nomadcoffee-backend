import { gql } from "apollo-server";

export default gql`
  type Coffee {
    id: Int!
    name: String!
    price: Int!
    decaf: Boolean
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    menu: [Coffee]
    coffee(id: Int!): Coffee
  }
  type Mutation {
    createCoffee(name: String!, price: Int!, decaf: Boolean): Coffee
    deleteCoffee(id: Int!): Coffee
    updateCoffee(id: Int! price: Int!): Coffee
  }
`; 