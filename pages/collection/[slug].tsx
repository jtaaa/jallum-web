import Head from "next/head"
import React from "react"
import ExternalLink from "../../components/ExternalLink"
import Text from "../../components/Text"
import { NextPageContext } from "next"
import Image from "next/image"
import {
  OG_IMAGE_SERVICE_URL,
  OG_IMAGE_OPENSEA_URL,
} from "../../utils/constants"
import Block from "../../components/Block"

const getCollectionOGImageUrl = (collectionSlug: string) =>
  `${OG_IMAGE_SERVICE_URL}/collections/${collectionSlug}`
const getCollectionOpenSeaUrl = (collectionSlug: string) =>
  `${OG_IMAGE_OPENSEA_URL}/collection/${collectionSlug}`

type CollectionPageProps = {
  slug: string
}

const CollectionPage = ({ slug }: CollectionPageProps) => {
  // Asserting non-null here since route 404s when no slug is provided
  const sanitizedSlug = (Array.isArray(slug) ? slug[0] : slug)!.trim()

  return (
    <>
      <Head>
        <title>{`${sanitizedSlug} - Collection | OpenSea`}</title>
        <meta
          key="og:image"
          property="og:image"
          content={getCollectionOGImageUrl(sanitizedSlug)}
        />
      </Head>
      <Block>
        <Text variant="h1">Collection Slug: {sanitizedSlug}</Text>
        <ExternalLink
          name="OpenSea Collection Page"
          href={getCollectionOpenSeaUrl(sanitizedSlug)}
        >
          <Text>OpenSea Link</Text>
        </ExternalLink>
      </Block>
      <Block marginTop="32px">
        <Image
          height="630px"
          width="1200px"
          alt="Collection preview"
          src={getCollectionOGImageUrl(sanitizedSlug)}
        />
      </Block>
    </>
  )
}

CollectionPage.getInitialProps = async ({ query }: NextPageContext) => {
  return {
    slug: query.slug,
  }
}

export default CollectionPage
