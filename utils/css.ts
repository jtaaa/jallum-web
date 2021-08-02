import { css } from "styled-components"

export const linkCss = css`
  outline: none;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 0.25em;
  text-decoration-color: ${(props) => props.theme.colors.text};
  transition: all 100ms ease;

  &:hover,
  &:focus {
    font-weight: bold;
    color: ${(props) => props.theme.colors.active};
    text-decoration-thickness: 0.2em;
  }
`
