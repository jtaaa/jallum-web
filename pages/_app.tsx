import { AppProps } from "next/app"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { IS_SERVER } from "../utils/constants"

const theme = {
  colors: {
    active: "#222",
    primary: "#444",
    text: "#444",
    fall: "#CA4130",
    winter: "#ACD7C6",
    spring: "#6B862E",
    link: "#444",
  },
}

export type Theme = typeof theme

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

import posthog from "posthog-js"

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (!IS_SERVER) {
    posthog.init("phc_EwdTbkSTE1hfRXTRTlt77vGUjsjmDn42Uf3orzEWHF7", {
      api_host: "https://app.posthog.com",
    })
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
