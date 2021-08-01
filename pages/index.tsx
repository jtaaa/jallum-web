import Head from "next/head"
import RoundContainer from "../components/RoundContainer"
import Section from "../components/Section"
import Text from "../components/Text"
import Icon from "../components/Icon"
import JoshLaughing from "../public/josh_laughing.webp"
import Image from "next/image"
import CenterContainer from "../components/CenterContainer"
import LargeScreenOnly from "../components/LargeScreenOnly"
import {
  GITHUB_PROFILE_URL,
  TWITTER_PROFILE_URL,
  WEB_RESUME_URL,
  LARGE_IMAGE_RADIUS,
  OPENSEA_URL,
  SPLUNK_URL,
  SELLYOURSTUFF_URL,
  COGNITE_URL,
  IBM_URL,
  MASSY_URL,
  UWBLUEPRINT_URL,
  TELEIOS_URL,
  ACS_URL,
  GARDEN_URL,
} from "../utils/constants"
import Octocat from "../public/octocat_small_color.webp"
import Twitter from "../public/twitter_color.svg"
import Resume from "../public/resume.webp"
import Teleios from "../public/teleios_small_color_whitebg.webp"
import Massy from "../public/massy_small_color.webp"
import IBM from "../public/ibm_small_color.webp"
import Cognite from "../public/cognite_small_bw.webp"
import OpenSea from "../public/opensea_color.svg"
import Splunk from "../public/splunk_bw.svg"
import ACS from "../public/acs_small_bw.webp"
import Blueprint from "../public/bp_small_color.png"
import SellYourStuff from "../public/sellyourstuff_color.svg"
import Herb from "../public/herb_emoji_by_twitter.webp"
import Flex from "../components/Flex"
import ExternalLink from "../components/ExternalLink"
import TimelineItem from "../components/TimelineItem"

const Home = () => {
  return (
    <>
      <Head>
        <title>Joshua Allum | OpenSea - Sell Your Stuff - T&T 🇹🇹</title>
        <meta
          name="description"
          content="Software engineer at OpenSea and cofounder of Sell Your Stuff from Trinidad and Tobago. UWaterloo CS (Data Science) with minor in Cognitive Science."
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
            <ExternalLink
              newTab
              name="GitHub profile"
              href={GITHUB_PROFILE_URL}
            >
              <Text>Check out my GitHub profile</Text>
            </ExternalLink>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Herb" src={Herb} alt="Herb" />
            <ExternalLink newTab name="Josh’s Garden" href={GARDEN_URL}>
              <Text>Check out my garden 🧑🏽‍🌾</Text>
            </ExternalLink>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Twitter" src={Twitter} alt="Twitter profile" />
            <ExternalLink
              newTab
              name="Twitter profile"
              href={TWITTER_PROFILE_URL}
            >
              <Text>Tweet at me</Text>
            </ExternalLink>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Resume" src={Resume} alt="Online résumé" />
            <ExternalLink newTab name="Web Resume" href={WEB_RESUME_URL}>
              <Text>View my online résumé</Text>
            </ExternalLink>
          </Flex>
        </Section>

        <Section>
          <Text variant="h1">Places I’ve contributed</Text>
          <TimelineItem>
            <ExternalLink
              newTab
              name="OpenSea"
              variant="icon-only"
              href={OPENSEA_URL}
            >
              <Icon name="OpenSea" src={OpenSea} alt="OpenSea" />
            </ExternalLink>
            <Flex width="100%" justifyContent="space-between">
              <Text>OpenSea</Text>
              <Text variant="tag" minWidth={60} margin="auto 0 auto 8px">
                ☀️ 2021
                <LargeScreenOnly display="inline">–Present</LargeScreenOnly>
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem>
            <ExternalLink
              newTab
              name="Splunk Inc"
              variant="icon-only"
              href={SPLUNK_URL}
            >
              <Icon name="Splunk" src={Splunk} alt="Splunk Inc" />
            </ExternalLink>
            <Flex width="100%" justifyContent="space-between">
              <Text>Splunk Inc</Text>
              <Text variant="tag" minWidth={60} margin="auto 0 auto 8px">
                ❄️ 2021
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem>
            <ExternalLink
              newTab
              name="Sell Your Stuff"
              variant="icon-only"
              href={SELLYOURSTUFF_URL}
            >
              <Icon
                name="Sell Your Stuff"
                src={SellYourStuff}
                alt="Sell Your Stuff"
              />
            </ExternalLink>
            <Flex width="100%" justifyContent="space-between">
              <Text>Sell Your Stuff</Text>
              <Text variant="tag" minWidth={60} margin="auto 0 auto 8px">
                ☀️ 2020
                <LargeScreenOnly display="inline">–Present</LargeScreenOnly>
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem>
            <ExternalLink
              newTab
              name="Cognite AS"
              variant="icon-only"
              href={COGNITE_URL}
            >
              <Icon name="Cognite" src={Cognite} alt="Cognite AS" />
            </ExternalLink>
            <Flex width="100%" justifyContent="space-between">
              <Text>Cognite AS</Text>
              <Text variant="tag" minWidth={60} margin="auto 0 auto 8px">
                🍁 2019
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem>
            <ExternalLink
              newTab
              name="IBM Canada Toronto Labs"
              variant="icon-only"
              href={IBM_URL}
            >
              <Icon name="IBM" src={IBM} alt="IBM Canada" />
            </ExternalLink>
            <Flex width="100%" justifyContent="space-between">
              <Text>IBM Canada Toronto Labs</Text>
              <Text variant="tag" minWidth={60} margin="auto 0 auto 8px">
                ❄️ 2019
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem>
            <ExternalLink
              newTab
              name="Massy Technologies InfoCom"
              variant="icon-only"
              href={MASSY_URL}
            >
              <Icon name="Massy" src={Massy} alt="Massy Technologies InfoCom" />
            </ExternalLink>
            <Flex width="100%" justifyContent="space-between">
              <Text>Massy Technologies InfoCom</Text>
              <Text variant="tag" minWidth={60} margin="auto 0 auto 8px">
                ☀️ 2018
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem>
            <ExternalLink
              newTab
              name="UW Blueprint"
              variant="icon-only"
              href={UWBLUEPRINT_URL}
            >
              <Icon name="Blueprint" src={Blueprint} alt="UW Blueprint" />
            </ExternalLink>
            <Flex width="100%" justifyContent="space-between">
              <Text>UW Blueprint</Text>
              <Text variant="tag" minWidth={60} margin="auto 0 auto 8px">
                ❄️ 2018
                <LargeScreenOnly display="inline">–2020</LargeScreenOnly>
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem>
            <ExternalLink
              newTab
              name="Teleios Systems Limited"
              variant="icon-only"
              href={TELEIOS_URL}
            >
              <Icon
                name="Teleios"
                src={Teleios}
                alt="Teleios Systems Limited"
              />
            </ExternalLink>
            <Flex width="100%" justifyContent="space-between">
              <Text>Teleios Systems Limited</Text>
              <Text variant="tag" minWidth={60} margin="auto 0 auto 8px">
                ☀️ 2017
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem>
            <ExternalLink
              newTab
              name="Assoc. of Caribbean Students"
              variant="icon-only"
              href={ACS_URL}
            >
              <Icon
                name="ACS"
                src={ACS}
                alt="Association of Caribbean Students"
              />
            </ExternalLink>
            <Flex width="100%" justifyContent="space-between">
              <Text>Assoc. of Caribbean Students</Text>
              <Text variant="tag" minWidth={60} margin="auto 0 auto 8px">
                ☀️ 2017
                <LargeScreenOnly display="inline">–2020</LargeScreenOnly>
              </Text>
            </Flex>
          </TimelineItem>
        </Section>
      </CenterContainer>
    </>
  )
}

export default Home
