import styled, { css } from "styled-components"
import { typography, TypographyProps } from "styled-system"
import { UnreachableCaseError } from "../utils/errors"
import Block, { BlockProps } from "./Block"

type TextVariant = "title" | "h1" | "h2" | "p" | "tag"

type TextProps = BlockProps &
  TypographyProps & {
    variant?: TextVariant
  }

const getAsTag = (variant: TextVariant | undefined): string => {
  switch (variant) {
    case "title":
      return "h1"
    case "h1":
      return "h1"
    case "h2":
      return "h2"
    case "p":
      return "p"
    case "tag":
      return "span"
    case undefined:
      return "span"
    default:
      throw new UnreachableCaseError(variant)
  }
}

const Text = styled(Block).attrs<TextProps>((props) => ({
  as: getAsTag(props.variant),
}))<TextProps>(
  typography,
  css`
    color: ${(props) => props.theme.colors.text};

    ${(props) => {
      switch (props.variant) {
        case "title":
          return css`
            font-family: "Josefin Sans", sans-serif;
            font-size: 4em;
            font-weight: 500;
          `
        case "h1":
          return css`
            font-family: "Josefin Sans", sans-serif;
            font-size: 1.5em;
          `
        case "h2":
          return css`
            font-family: "Josefin Sans", sans-serif;
            font-size: 1.1em;
            letter-spacing: 0.1em;
          `
        case "p":
          return css`
            font-family: "Open Sans", sans-serif;
            font-size: 1.1em;
          `
        case "tag":
          return css`
            font-family: "Open Sans", sans-serif;
            font-size: 0.85em;
            line-height: 1.2em;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            border-radius: 0.2em;
            padding: 0.2em 0.4em;
            border: 1px solid ${(props) => props.theme.colors.primary};
            margin: auto 0;
          `
        case undefined:
          return css`
            font-family: "Open Sans", sans-serif;
          `
        default:
          throw new UnreachableCaseError(props.variant)
      }
    }}
  `
)

export default Text
