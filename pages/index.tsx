import Head from "next/head"
import RoundContainer from "../components/RoundContainer"
import Section from "../components/Section"
import Text from "../components/Text"
import Icon from "../components/Icon"
import Headshot from "../public/headshot.jpg"
import Image from "next/image"
import CenterContainer from "../components/CenterContainer"
import LargeScreenOnly from "../components/LargeScreenOnly"
import { LARGE_IMAGE_RADIUS } from "../utils/constants"
import Octocat from "../public/octocat_small_color.webp"
import Twitter from "../public/twitter_color.svg"
import Resume from "../public/resume.png"
import Teleios from "../public/teleios_small_color_whitebg.webp"
import Massy from "../public/massy_small_color.webp"
import IBM from "../public/ibm_small_color.webp"
import Cognite from "../public/cognite_small_bw.webp"
import OpenSea from "../public/opensea_color.svg"
import Splunk from "../public/splunk_bw.webp"
import ACS from "../public/acs_small_bw.webp"
import Blueprint from "../public/bp_small_color.png"
import SellYourStuff from "../public/sellyourstuff_color.svg"
import Flex from "../components/Flex"

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
          <Flex alignItems="center">
            <Icon name="GitHub" src={Octocat} alt="GitHub profile" />
            <Text>Check out my GitHub profile</Text>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Twitter" src={Twitter} alt="Twitter profile" />
            <Text>Tweet at me</Text>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Resume" src={Resume} alt="Online résumé" />
            <Text>View my online résumé</Text>
          </Flex>
        </Section>

        <Section>
          <Text variant="h1">Places I’ve contributed</Text>
          <Flex alignItems="center">
            <Icon name="OpenSea" src={OpenSea} alt="OpenSea" />
            <Flex width="100%" justifyContent="space-between">
              <Text>OpenSea</Text>
              <Text variant="tag">
                ☀️ 2021
                <LargeScreenOnly display="inline">–Present</LargeScreenOnly>
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Splunk" src={Splunk} alt="Splunk Inc" />
            <Flex width="100%" justifyContent="space-between">
              <Text>Splunk Inc</Text>
              <Text variant="tag">❄️ 2021</Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Icon
              name="Sell Your Stuff"
              src={SellYourStuff}
              alt="Sell Your Stuff"
            />
            <Flex width="100%" justifyContent="space-between">
              <Text>Sell Your Stuff</Text>
              <Text variant="tag">
                ☀️ 2020
                <LargeScreenOnly display="inline">–Present</LargeScreenOnly>
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Cognite" src={Cognite} alt="Cognite AS" />
            <Flex width="100%" justifyContent="space-between">
              <Text>Cognite AS</Text>
              <Text variant="tag">🍁 2019</Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Icon name="IBM" src={IBM} alt="IBM Canada" />
            <Flex width="100%" justifyContent="space-between">
              <Text>IBM Canada Toronto Labs</Text>
              <Text variant="tag">❄️ 2019</Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Massy" src={Massy} alt="Massy Technologies InfoCom" />
            <Flex width="100%" justifyContent="space-between">
              <Text>Massy Technologies InfoCom</Text>
              <Text variant="tag">☀️ 2018</Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Blueprint" src={Blueprint} alt="UW Blueprint" />
            <Flex width="100%" justifyContent="space-between">
              <Text>UW Blueprint</Text>
              <Text variant="tag">
                ❄️ 2018
                <LargeScreenOnly display="inline">–2020</LargeScreenOnly>
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Teleios" src={Teleios} alt="Teleios Systems Limited" />
            <Flex width="100%" justifyContent="space-between">
              <Text>Teleios Systems Limited</Text>
              <Text variant="tag">☀️ 2017</Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Icon
              name="ACS"
              src={ACS}
              alt="Association of Caribbean Students"
            />
            <Flex width="100%" justifyContent="space-between">
              <Text>Assoc. of Caribbean Students</Text>
              <Text variant="tag">
                ☀️ 2017
                <LargeScreenOnly display="inline">–2020</LargeScreenOnly>
              </Text>
            </Flex>
          </Flex>
        </Section>
      </CenterContainer>
    </>
  )
}

export default Home
