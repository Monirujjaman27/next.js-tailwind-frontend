import Head from "next/head";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js and Tailwind App </title>
      </Head>
      <Nav />
      <Hero />
    </>
  )
}
