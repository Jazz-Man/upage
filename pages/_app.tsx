import React, { Fragment } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme();

export default class Root extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <CssBaseline />
          <Component {...pageProps} />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}
