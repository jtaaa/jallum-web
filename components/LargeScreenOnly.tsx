import styled from "styled-components"
import Block from "./Block"

const LargeScreenOnly = styled(Block)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: ${(props) => props.display ?? "block"};
  }
`

export default LargeScreenOnly
