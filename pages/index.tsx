import { NextPage } from 'next'
import Layout from '../components/Layout'
import Logo from '../components/Logo'

import useSWR from 'swr'
interface League {
  'Nombre De La Liga': string
  Identificador: string
  'Logo de la Liga': string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const API: string = 'https://footbal-api.herokuapp.com/leagues'

const IndexPage: NextPage = () => {
  const { data, error } = useSWR(API, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data[0]['Logo de la Liga'])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main className="flex items-center justify-center">
        <div>
          {data.map((league: League, index: number) => {
            const src = console.log(league['Logo de la Liga'])
            return (
              <div key={index} className="flex items-center justify-start">
                <div>
                  <Logo
                    logoSrc="https://robohash.org/nihilquasiquis.png?size=50x50&set=set1"
                    logoWidth={50}
                    logoHeight={50}
                    logoAlt={'Logo de la liga'}
                  />
                </div>
                <header>{league['Nombre De La Liga']}</header>
              </div>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
