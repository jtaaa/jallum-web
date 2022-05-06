import { useRouter } from "next/router"
import Head from "next/head"
import React from "react"
import ExternalLink from "../../components/ExternalLink"
import Text from "../../components/Text"
import { NextPageContext } from "next"
import {
  OG_IMAGE_OPENSEA_URL,
  OG_IMAGE_SERVICE_URL,
} from "../../utils/constants"
import Image from "next/image"
import Block from "../../components/Block"

const getAccountOGImageUrl = (identifier: string) =>
  `${OG_IMAGE_SERVICE_URL}/account/${identifier}`
const getAccountOpenSeaUrl = (accountSlug: string) =>
  `${OG_IMAGE_OPENSEA_URL}/${accountSlug}`

type AccountPageProps = {
  identifier: string
}

const AccountPage = ({ identifier }: AccountPageProps) => {
  // Asserting non-null here since route 404s when no identifier is provided
  const sanitizedIdentifier = (
    Array.isArray(identifier) ? identifier[0] : identifier
  )!.trim()
  const title = `${sanitizedIdentifier} - Account | OpenSea`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} key="og:title" property="og:title" />
        <meta
          key="og:image"
          property="og:image"
          content={getAccountOGImageUrl(sanitizedIdentifier)}
        />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <Block>
        <Text variant="h1">Account identifier: {sanitizedIdentifier}</Text>
        <ExternalLink
          name="OpenSea Account Page"
          href={getAccountOpenSeaUrl(sanitizedIdentifier)}
        >
          <Text>OpenSea Link</Text>
        </ExternalLink>
      </Block>
      <Block marginTop="32px">
        <Image
          height="630px"
          width="1200px"
          alt="Account preview"
          src={getAccountOGImageUrl(sanitizedIdentifier)}
        />
      </Block>
    </>
  )
}

AccountPage.getInitialProps = async ({ query }: NextPageContext) => {
  return {
    identifier: query.identifier,
  }
}

export default AccountPage
