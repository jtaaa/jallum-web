import styled from "styled-components"
import {
  borderRadius,
  BorderRadiusProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system"

const Block = styled.div<LayoutProps & SpaceProps & BorderRadiusProps>(
  borderRadius,
  layout,
  space
)

export default Block
