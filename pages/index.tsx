import Head from 'next/head'
import Leagues from '../components/Leagues'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Ligas</title>
      </Head>
      <Leagues />
    </>
  )
}
