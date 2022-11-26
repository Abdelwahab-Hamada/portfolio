import { ApolloClient, InMemoryCache } from '@apollo/client';

const HTTP_URL='https://46d006.pythonanywhere.com/'

export const client = new ApolloClient({
    uri: HTTP_URL,
    cache: new InMemoryCache(),
  });