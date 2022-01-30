import Head from 'next/head'
import Teams from '../components/Teams'
export default function TeamsPage() {
  return (
    <>
      <Head>
        <title>Equipos</title>
      </Head>
      <main>
        <Teams />
      </main>
    </>
  )
}
