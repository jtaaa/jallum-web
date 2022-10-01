import styled from "styled-components"
import type { BlockProps } from "./Block"
import CenterContainer from "./CenterContainer"

const RoundContainer = styled(CenterContainer)<BlockProps>`
  border-radius: 50%;
  overflow: hidden;
`

export default RoundContainer
