import client from "../client";

export default {
  Query: {
    menu: () => client.coffee.findMany(),
    coffee: (_, { id }) => client.coffee.findUnique({ where: { id } }),
  },
}; 