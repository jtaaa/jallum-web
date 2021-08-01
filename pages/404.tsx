import Head from "next/head"
import RoundContainer from "../components/RoundContainer"
import Section from "../components/Section"
import Text from "../components/Text"
import JoshLaughing from "../public/josh_laughing.webp"
import Image from "next/image"
import CenterContainer from "../components/CenterContainer"
import { LARGE_IMAGE_RADIUS } from "../utils/constants"
import Link from "../components/Link"

const Error404Page = () => {
  return (
    <>
      <Head>
        <title>Oops! No Page Here. Joshua Allum | T&T 🇹🇹</title>
        <meta
          name="description"
          content="Oops, couldn’t find that page. Don’t share this link! How did you even get here buddy?"
        />
      </Head>
      <CenterContainer>
        <Section>
          <RoundContainer
            width={LARGE_IMAGE_RADIUS}
            height={LARGE_IMAGE_RADIUS}
            margin={["0 auto", 0]}
          >
            <Image src={JoshLaughing} alt="Josh Laughing" placeholder="blur" />
          </RoundContainer>
          <Text variant="title" textAlign={["center", "start"]}>
            Oops, couldn’t find that page
          </Text>
          <Link name="Home" href="/">
            Head home 🏡
          </Link>
        </Section>
      </CenterContainer>
    </>
  )
}

export default Error404Page
