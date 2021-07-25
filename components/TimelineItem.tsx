import styled from "styled-components"
import Flex from "./Flex"

const TimelineItem = styled(Flex)`
  position: relative;
  align-items: center;

  @media (min-width: 576px) {
    border-right: 1px dotted;
    border-color: ${(props) => props.theme.colors.primary};

    &::before {
      content: "";
      position: absolute;
      right: -8px;
      width: 8px;
      height: 100%;
      border-top: 1px dotted;
      border-right: 1px dotted;
      border-color: ${(props) => props.theme.colors.primary};
    }

    &::after {
      content: "";
      display: block;
      width: 16px;
      height: 4px;
      border-top: 1px dotted;
      border-bottom: 1px dotted;
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
`

export default TimelineItem
