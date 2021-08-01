import Image, { ImageProps } from "next/image"
import { BlockProps } from "./Block"
import CenterContainer from "./CenterContainer"
import styled from "styled-components"

const IconContainer = styled(CenterContainer)`
  background: ${(props) => props.theme.backgrounds.stage};
`

type IconProps = {
  alt: string
  name: string
  size?: number
} & BlockProps &
  Omit<ImageProps, "blurDataURL">

export const Icon = ({
  src,
  alt,
  name,
  size = 32,
  padding,
  margin,
  ...imageProps
}: IconProps) => {
  if (typeof src === "string") {
    throw new Error(
      "Use static import for Image src property instead of string"
    )
  }

  return (
    <IconContainer
      as="i"
      width={`${size}px`}
      height={`${size}px`}
      padding={padding ?? "8px"}
      margin={margin ?? "8px"}
      borderRadius="50%"
    >
      <title>{name}</title>
      <Image
        alt={alt}
        width={size}
        height={size}
        objectFit="contain"
        src={src}
        {...imageProps}
      />
    </IconContainer>
  )
}

export default Icon
