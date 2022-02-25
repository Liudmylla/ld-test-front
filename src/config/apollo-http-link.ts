import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
export const httpLink = new HttpLink({
  uri: process.env.REACT_APP_ENDPOINT_URL,
});

export const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "x-account-key": process.env.REACT_APP_ACCOUNT_KEY,
    },
  });
  return forward(operation);
});
