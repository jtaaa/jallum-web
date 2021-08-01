import styled from "styled-components"
import Block from "./Block"

const Button = styled(Block).attrs((props) => ({ ...props, as: "button" }))`
  cursor: pointer;
  margin: ${(props) => (props.margin ? undefined : 0)};
  padding: ${(props) => (props.margin ? undefined : 0)};
  background: none;
  border: none;
  transition: transform 100ms ease-out;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.active};
    transform: scale(110%);
  }
`

export default Button
