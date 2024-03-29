
import Document, { Html, Head, Main, NextScript, type DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { THEME_VARIANT_LSKEY } from "../utils/constants"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#bf868f" />
          <meta name="theme-color" content="#bf868f" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;700&family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                "use strict";

                var observer = new MutationObserver(function() {
                  if (document.body) {
                    try {
                      // try to get theme from local storage
                      let themeValue = localStorage.getItem('${THEME_VARIANT_LSKEY}') ?? 'THROW PLS'
                      document.body.className = JSON.parse(themeValue);
                      console.info(\`Using \$\{themeValue\} theme based on your past selection.\`)
                    } catch (err) {
                      // preferred theme is not available in local storage
                      
                      // check if dark mode is preferred
                      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        document.body.className = 'dark'
                        console.info(\`Using dark theme based on your OS or browser preference.\`)
                        return
                      }

                      // nothing is preferred so use time of day
                      const now = new Date()
                      const isDayTime = now.getHours() >= 5 && now.getHours() < 21

                      const themeValue = isDayTime ? 'light' : 'dark'
                      document.body.className = themeValue;
                      console.info(\`Using \$\{themeValue\} theme based on time of day.\`)
                    } finally {
                      observer.disconnect();
                    }
                  }
                });
                observer.observe(document.documentElement, { childList: true });
              })();
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
