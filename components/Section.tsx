import styled from "styled-components"
import Block, { BlockProps } from "./Block"
import { SECTION_PADDING, TOP_SECTION_PADDING } from "../utils/constants"

const Section = styled(Block).attrs({
  padding: SECTION_PADDING,
})<BlockProps>`
  box-sizing: border-box;
  max-width: 690px;
  width: 100%;

  &:first-child {
    padding-top: ${TOP_SECTION_PADDING}px;
  }
`

export default Section
