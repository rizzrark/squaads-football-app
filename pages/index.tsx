import Head from 'next/head'
import Logo from '../components/Logo'

import useSWR from 'swr'
import LoadingSpinner from '../components/LoadingSpiner'

import { League } from '../lib/types'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const API: string = 'https://footbal-api.herokuapp.com/leagues'

export default function IndexPage() {
  const { data, error } = useSWR(API, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <LoadingSpinner />

  return (
    <>
      <Head>
        <title>Ligas</title>
      </Head>
      <div className="overflow-auto">
        {data.map((league: League, index: number) => {
          return (
            <div key={index} className="flex items-center justify-start gap-2">
              <div>
                <Logo
                  logoSrc={league['Logo de la Liga']}
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
    </>
  )
}
