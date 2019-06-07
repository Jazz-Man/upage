import React, { Fragment } from "react";
import App, { Container } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        {children}
      </Fragment>
    );
  }
}

export default class Root extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
