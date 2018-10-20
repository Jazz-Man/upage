import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'
// import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags }
  }


  render() {
    return (
      <html>
      <title>My page</title>
        <Head>
          {this.props.styleTags}
        </Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
