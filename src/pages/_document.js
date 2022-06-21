import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../utils/GTag';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }

    render() {
      return (
          <Html lang={this.props.lang || "en"}>
            <Head>
              <meta property="og:description" content="Come by and check out my resume or read IT related articles at my blog. Always willing to look forward to new job opportunities - hit me on LinkedIn" key="description" />
              <meta name="keywords" content="frontend developer, programming, software developer, portfolio, react, react native, HTML, CSS, JavaScript, Łódź, blog"/>
              <meta charset="utf-8"/>
              <meta name="author" content="Wiktor Pabich"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                  `
                }}
              />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
      }
}

export default MyDocument