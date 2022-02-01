import Head from 'next/head'
import Players from '../components/Players'

export default function PlayersPage() {
  return (
    <>
      <Head>
        <title>Jugadores</title>
      </Head>
      <main>
        <Players />
      </main>
    </>
  )
}
