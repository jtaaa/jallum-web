import { AppProps } from "next/app"
import { createGlobalStyle, ThemeProvider } from "styled-components"

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

type Theme = typeof theme

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    outline: none;
    text-decoration-style: dotted;
    text-underline-offset: 0.25em;
    text-decoration-color: ${(props) => (props.theme as Theme).colors.link};
    transition: all 100ms ease;

    &:hover, &:focus {
      font-weight: bold;
      color: ${(props) => (props.theme as Theme).colors.active};
      text-decoration-thickness: 0.2em;
    }
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => {
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
