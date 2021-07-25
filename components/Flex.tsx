import Block from "./Block"
import styled, { css } from "styled-components"
import { flexbox, FlexboxProps } from "styled-system"

const Flex = styled(Block)<FlexboxProps>(
  flexbox,
  css`
    display: flex;
  `
)

export default Flex
