import styled from "styled-components"
import { layout, LayoutProps, space, SpaceProps } from "styled-system"

const Block = styled.div<LayoutProps & SpaceProps>(space, layout)

export default Block
