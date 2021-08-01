import { AppProps } from "next/app"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { IS_SERVER } from "../utils/constants"
import Sun from "../public/sun.webp"
import Button from "../components/Button"
import Block from "../components/Block"

const THEME_VARIANT_LSKEY = "theme-variant"

const lightTheme = {
  colors: {
    active: "#222",
    primary: "#444",
    text: "#444",
    link: "#444",
    background: "#fff",
    surface: "#fff",
  },
  backgrounds: {
    stage: "none",
  },
}

const darkTheme = {
  colors: {
    active: "#DDD",
    primary: "#BBB",
    text: "#BBB",
    link: "#BBB",
    background: "#000",
    surface: "#444",
  },
  backgrounds: {
    stage: "radial-gradient(circle at right, #BBB 20%, #000 100%)",
  },
}

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
} as const

type ThemeVariant = keyof typeof THEMES

export type Theme = {
  colors: Record<keyof typeof lightTheme["colors"], string>
  backgrounds: Record<keyof typeof lightTheme["backgrounds"], string>
  setThemeVariant: (themeVariant: ThemeVariant) => void
}

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.background};
  }
`

const StyledPageContainer = styled(Block)`
  transition: background-color 200ms ease-in-out;
`

import posthog from "posthog-js"
import Head from "next/head"
import { useEffect, useMemo, useState } from "react"
import Icon from "../components/Icon"

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (!IS_SERVER) {
    posthog.init("phc_EwdTbkSTE1hfRXTRTlt77vGUjsjmDn42Uf3orzEWHF7", {
      api_host: "https://app.posthog.com",
    })
  }

  const [themeVariant, setThemeVariant] = useState<ThemeVariant>()

  const theme = useMemo(
    () => ({
      ...THEMES[themeVariant ?? "dark"],
      setThemeVariant,
    }),
    [themeVariant]
  )

  const toggleThemeVariant = () => {
    if (themeVariant === "light") {
      setThemeVariant("dark")
    } else {
      setThemeVariant("light")
    }
  }

  useEffect(() => {
    if (themeVariant === undefined) {
      const themeVariant = window.localStorage.getItem(THEME_VARIANT_LSKEY)
      if (!themeVariant) {
        window.localStorage.setItem(
          THEME_VARIANT_LSKEY,
          JSON.stringify(Math.random() < 0.8 ? "light" : "dark")
        )
      } else {
        setThemeVariant(JSON.parse(themeVariant))
      }
    } else {
      window.localStorage.setItem(
        THEME_VARIANT_LSKEY,
        JSON.stringify(themeVariant)
      )
    }
  }, [themeVariant])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPageContainer height="100%" backgroundColor="background">
          <Component {...pageProps} />
        </StyledPageContainer>
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
