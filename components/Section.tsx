import styled from "styled-components"
import Block from "./Block"
import { SECTION_PADDING, TOP_SECTION_PADDING } from "../utils/constants"

const Section = styled(Block).attrs({
  padding: SECTION_PADDING,
  "&:first-child": {
    paddingTop: TOP_SECTION_PADDING,
  },
})`
  box-sizing: border-box;
  max-width: 690px;
  width: 100%;
`

export default Section
