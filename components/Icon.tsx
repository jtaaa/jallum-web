import Image, { ImageProps } from "next/image"
import CenterContainer from "./CenterContainer"

type IconProps = {
  alt: string
  name: string
  size?: number
} & ImageProps

export const Icon = ({ alt, name, size = 32, ...imageProps }: IconProps) => (
  <CenterContainer as="i" width={`${size}px`} height={`${size}px`} padding={16}>
    <title>{name}</title>
    <Image alt={alt} {...imageProps} />
  </CenterContainer>
)

export default Icon
