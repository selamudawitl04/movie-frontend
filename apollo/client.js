import { defineApolloClient } from "@nuxtjs/apollo";
export default defineApolloClient({
  httpEndpoint: "https://vue-shopping.hasura.app/v1/graphql",
  tokenStorage: "cookie",
  authType: "Bearer",
  authHeader: "Authorization",
  tokenName: 'auth_token',
});