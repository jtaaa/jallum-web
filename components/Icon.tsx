import Image, { ImageProps } from "next/image"
import { BlockProps } from "./Block"
import CenterContainer from "./CenterContainer"

type IconProps = {
  alt: string
  name: string
  size?: number
} & BlockProps &
  ImageProps

export const Icon = ({
  alt,
  name,
  size = 32,
  padding,
  margin,
  ...imageProps
}: IconProps) => (
  <CenterContainer
    as="i"
    width={`${size}px`}
    height={`${size}px`}
    padding={padding ?? 16}
    margin={margin ?? 0}
  >
    <title>{name}</title>
    <Image alt={alt} {...imageProps} />
  </CenterContainer>
)

export default Icon
