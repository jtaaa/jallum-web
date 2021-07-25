import Head from "next/head"
import CenterContainer from "../components/CenterContainer"
import Text from "../components/Text"

const Home = () => {
  return (
    <>
      <Head>
        <title>Joshua Allum</title>
      </Head>
      <CenterContainer>
        <Text variant="title">Joshua Allum</Text>
        <Text variant="h1">Joshua Allum</Text>
        <Text variant="h2">Joshua Allum</Text>
        <Text variant="p">
          Joshua Allum Joshua Allum Joshua Allum Joshua Allum Joshua Allum
          Joshua Allum Joshua Allum
        </Text>
      </CenterContainer>
    </>
  )
}

export default Home
