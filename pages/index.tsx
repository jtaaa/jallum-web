import Head from "next/head"
import RoundContainer from "../components/RoundContainer"
import Block from "../components/Block"
import Text from "../components/Text"
import Headshot from "../public/headshot.jpg"
import Image from "next/image"
import { LARGE_IMAGE_RADIUS, PAGE_PADDING } from "../utils/constants"
import CenterContainer from "../components/CenterContainer"

const Home = () => {
  return (
    <>
      <Head>
        <title>Joshua Allum</title>
      </Head>
      <CenterContainer>
        <Block padding={PAGE_PADDING}>
          <RoundContainer
            width={LARGE_IMAGE_RADIUS}
            height={LARGE_IMAGE_RADIUS}
            margin={["0 auto", 0]}
          >
            <Image src={Headshot} alt="Josh Laughing" />
          </RoundContainer>
          <Text variant="title" textAlign={["center", "start"]}>
            Joshua Allum
          </Text>
          <Text variant="p">Hey, I’m Josh! 👋</Text>
          <Text variant="p">
            I’m a software engineer at OpenSea and cofounder of Sell Your Stuff
            at home in Trinidad and Tobago 🇹🇹
          </Text>
        </Block>
      </CenterContainer>
    </>
  )
}

export default Home
