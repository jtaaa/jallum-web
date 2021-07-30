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
import Flex from "../components/Flex"
import ExternalLink from "../components/ExternalLink"
import TimelineItem from "../components/TimelineItem"
import mLink from "../components/Link"

const Home = () => {
  return (
    <>
      <Head>
        <title>Joshua Allum</title>
        <meta
          name="description"
          content="Software engineer at OpenSea and cofounder of Sell Your Stuff from Trinidad and Tobago."
        />
      </Head>
      <CenterContainer>
        <Section>
          <RoundContainer
            width={LARGE_IMAGE_RADIUS}
            height={LARGE_IMAGE_RADIUS}
            margin={["0 auto", 0]}
          >
            <Image src={JoshLaughing} alt="Josh Laughing" />
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
              target="_blank"
              name="GitHub profile"
              href={GITHUB_PROFILE_URL}
            >
              <Text>Check out my GitHub profile</Text>
            </ExternalLink>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Twitter" src={Twitter} alt="Twitter profile" />
            <ExternalLink
              target="_blank"
              name="Twitter profile"
              href={TWITTER_PROFILE_URL}
            >
              <Text>Tweet at me</Text>
            </ExternalLink>
          </Flex>
          <Flex alignItems="center">
            <Icon name="Resume" src={Resume} alt="Online résumé" />
            <ExternalLink
              target="_blank"
              name="Web Resume"
              href={WEB_RESUME_URL}
            >
              <Text>View my online résumé</Text>
            </ExternalLink>
          </Flex>
        </Section>

        <Section>
          <Text variant="h1">Places I’ve contributed</Text>
          <TimelineItem>
            <ExternalLink
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
