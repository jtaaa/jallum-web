import Head from "next/head"
import RoundContainer from "../components/RoundContainer"
import Block from "../components/Block"
import Section from "../components/Section"
import Text from "../components/Text"
import Headshot from "../public/headshot.jpg"
import Image from "next/image"
import CenterContainer from "../components/CenterContainer"
import { LARGE_IMAGE_RADIUS } from "../utils/constants"

const Home = () => {
  return (
    <>
      <Head>
        <title>Joshua Allum</title>
      </Head>
      <CenterContainer>
        <Section>
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
        </Section>
        <Section>
          <Text variant="h1">More about me</Text>
        </Section>
      </CenterContainer>
    </>
  )
}

export default Home
