import LoadingSpinner from './LoadingSpiner'
import Logo from './Logo'
import { Player } from '../lib/types'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const API: string = 'https://footbal-api.herokuapp.com/players'

const Players: React.FC = () => {
  const { data, error } = useSWR(API, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <LoadingSpinner />

  return (
    <div className="w-full p-4 space-y-4 rounded-2xl">
      {data?.map((player: Player, index: number) => {
        return (
          <div
            key={index}
            className="flex items-center justify-start w-full gap-4 p-1 border-2 shadow border-neutral-500 rounded-2xl"
          >
            <div className="p-1 rounded-full bg-slate-100">
              <Logo
                logoSrc={player.Avatar}
                logoWidth={50}
                logoHeight={50}
                logoAlt={'Logo de la liga'}
              />
            </div>
            <div>
              <header className="text-lg font-bold tracking-wide">
                {player['Nombre del Jugador']}
              </header>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Players
