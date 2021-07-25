import Block, { BlockProps } from "./Block"
import styled, { css } from "styled-components"
import { flexbox, FlexboxProps } from "styled-system"

const Flex = styled(Block)<FlexboxProps & BlockProps>(
  flexbox,
  css`
    display: flex;
  `
)

export default Flex
