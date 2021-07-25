import styled from "styled-components"
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
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
  BorderProps &
  BorderRadiusProps &
  LayoutProps &
  SpaceProps

const Block = styled.div<
  BackgroundProps & BorderRadiusProps & ColorProps & LayoutProps & SpaceProps
>(background, border, borderRadius, color, layout, space)

export default Block
