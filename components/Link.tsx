import NextLink from "next/link"
import styled from "styled-components"
import Text, { TextProps } from "./Text"
import { linkCss } from "../utils/css"

type LinkTextProps = TextProps & {
  name: string
}

export const LinkText = styled(Text).attrs({ as: "a" })<LinkTextProps>`
  ${linkCss}
`

type LinkProps = {
  name: string
  href: string
  children?: React.ReactNode
} & LinkTextProps

const Link = ({ name, children, href, ...linkTextProps }: LinkProps) => {
  const isText = typeof children === "string"
  const content = isText ? (
    <LinkText name={name} {...linkTextProps}>
      {children}
    </LinkText>
  ) : (
    children
  )
  return (
    <NextLink passHref={isText} href={href}>
      {content}
    </NextLink>
  )
}

export default Link
