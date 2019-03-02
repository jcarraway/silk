import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

import withApolloClient from '../libs/with-apollo-client';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props as any;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
