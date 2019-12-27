import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router'

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../src/theme';
import Footer from '../src/components/Footer';

import * as gtag from '../src/analitycs';
Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (process.env.NODE_ENV !== 'production') {
      const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
      whyDidYouRender(React);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
