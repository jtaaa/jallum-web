import { AppProps } from "next/app"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { IS_SERVER, THEME_VARIANT_LSKEY } from "../utils/constants"
import Sun from "../public/sun.webp"
import Button from "../components/Button"
import Block from "../components/Block"

const theme = {
  colors: {
    active: "var(--active)",
    primary: "var(--primary)",
    text: "var(--text)",
    background: "var(--background)",
    surface: "var(--surface)",
  },
  backgrounds: {
    stage: "var(--stage)",
  },
}

type ThemeVariant = "light" | "dark"

export type Theme = {
  colors: Record<keyof typeof theme["colors"], string>
  backgrounds: Record<keyof typeof theme["backgrounds"], string>
  setThemeVariant: (themeVariant: ThemeVariant) => void
}

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.background};

    --active: #222;
    --primary: #444;
    --text: #444;
    --background: #fff;
    --surface: #fff;

    --stage: none;

    &.dark {
      --active: #DDD;
      --primary: #BBB;
      --text: #BBB;
      --background: #000;
      --surface: #444;

      --stage: radial-gradient(circle at right, #BBB 20%, #000 100%);
    }
  }
`

const PageContainer = styled(Block)`
  transition: background-color 200ms ease-in-out;
`

import posthog from "posthog-js"
import Head from "next/head"
import Icon from "../components/Icon"
import useLocalStorageState from "use-local-storage-state"
import { useCallback } from "react"

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (!IS_SERVER) {
    posthog.init("phc_EwdTbkSTE1hfRXTRTlt77vGUjsjmDn42Uf3orzEWHF7", {
      api_host: "https://app.posthog.com",
    })
  }

  const [themeVariant, setThemeVariant] =
    useLocalStorageState<ThemeVariant>(THEME_VARIANT_LSKEY)

  const toggleThemeVariant = useCallback(() => {
    const setDark = () => {
      setThemeVariant("dark")
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    }
    const setLight = () => {
      setThemeVariant("light")
      document.body.classList.add("light")
      document.body.classList.remove("dark")
    }

    if (themeVariant === "dark") {
      setLight()
    } else if (themeVariant === "light") {
      setDark()
    } else {
      if (document.body.classList.contains("dark")) {
        setLight()
      } else {
        setDark()
      }
    }
  }, [setThemeVariant, themeVariant])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageContainer height="100%" backgroundColor="background">
          <Component {...pageProps} />
        </PageContainer>
        <Button
          position="absolute"
          top="16px"
          right="16px"
          onClick={toggleThemeVariant}
        >
          <Icon src={Sun} alt="Toggle theme" name="Toggle theme" />
        </Button>
      </ThemeProvider>
    </>
  )
}

export default MyApp
