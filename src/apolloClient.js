import { ApolloClient, InMemoryCache } from '@apollo/client';

const HTTP_URL='https://ay-portfolio.herokuapp.com/'

export const client = new ApolloClient({
    uri: HTTP_URL,
    cache: new InMemoryCache(),
  });