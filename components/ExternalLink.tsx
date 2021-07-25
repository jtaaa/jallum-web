import styled, { css } from "styled-components"
import { Theme } from "../pages/_app"
import Icon from "./Icon"
import Link from "../public/link.svg"
import Flex from "./Flex"
import Block from "./Block"
import RoundContainer from "./RoundContainer"

type ExternalLinkProps = {
  variant?: "icon-only"
  name: string
}

const LinkIconContainer = styled(RoundContainer)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: white;
  width: 16px;
  height: 16px;
  border: 1px dotted;
  transition: all 100ms ease;

  a:hover &,
  a:focus & {
    border-color: ${(props) => (props.theme as Theme).colors.active};
    border-width: 2px;
    width: 18px;
    height: 18px;
  }
`

const ExternalLink = styled.a.attrs<ExternalLinkProps>((props) => ({
  ...props,
  children:
    props.variant === "icon-only" ? (
      <Flex alignItems="center" position="relative">
        {props.children}
        <LinkIconContainer>
          <Icon
            src={Link}
            alt="External Link"
            name={props.name}
            padding="1px"
            size={14}
          />
        </LinkIconContainer>
      </Flex>
    ) : (
      props.children
    ),
}))<ExternalLinkProps>`
  ${(props) => {
    switch (props.variant) {
      case "icon-only":
        return css`
          outline: none;
          text-decoration: none;
        `
      default:
        return css`
          outline: none;
          text-decoration-style: dotted;
          text-underline-offset: 0.25em;
          text-decoration-color: ${(props) =>
            (props.theme as Theme).colors.link};
          transition: all 100ms ease;

          &:hover,
          &:focus {
            font-weight: bold;
            color: ${(props) => (props.theme as Theme).colors.active};
            text-decoration-thickness: 0.2em;
          }
        `
    }
  }}
`

export default ExternalLink
