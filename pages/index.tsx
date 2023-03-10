import Head from 'next/head'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jithin Jose Jacob</title>
        <meta name="description" content="Personal Website of Jithin Jose Jacob" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
    </>
  )
}
