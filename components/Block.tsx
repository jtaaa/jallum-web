import styled from "styled-components"
import {
  background,
  BackgroundProps,
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system"

export type BlockProps = BackgroundProps &
  BorderRadiusProps &
  LayoutProps &
  SpaceProps

const Block = styled.div<
  BackgroundProps & BorderRadiusProps & ColorProps & LayoutProps & SpaceProps
>(background, borderRadius, color, layout, space)

export default Block
