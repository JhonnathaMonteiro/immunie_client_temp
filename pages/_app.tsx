import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';
import { appWithTranslation } from 'i18n'

import AOS from 'aos';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';

import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

interface MyAppProps {
  Component: any;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: MyAppProps): JSX.Element => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Immunie Digital Vaccination Card</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper elevation={0}>
          <Component {...pageProps} />
        </Paper>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async appContext => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);