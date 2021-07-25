import { AppProps } from "next/app"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: "#444",
    text: "#444",
    fall: "#CA4130",
    winter: "#ACD7C6",
    spring: "#6B862E",
  },
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
