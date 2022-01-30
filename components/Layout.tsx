import { ReactNode } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Navigation from './Navigation'
import DummyTextComponent from './DummyTextComponent'
import { PageTitle } from './PageTitle'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {router.pathname === '/teams' && (
        <PageTitle pageTitle={'Equipos'} pageTitleColor="bg-neutral-800" />
      )}
      {router.pathname === '/' && (
        <PageTitle pageTitle={'Ligas'} pageTitleColor="bg-neutral-800" />
      )}
      {router.pathname === '/players' && (
        <PageTitle pageTitle={'Jugadores'} pageTitleColor="bg-neutral-800" />
      )}
      <Navigation
        navHomeIconSize={40}
        navIconSize={32}
        navColor="bg-neutral-800"
      />
      <main className="flex flex-col items-center justify-center mx-4 ">
        {children}
        <DummyTextComponent />
      </main>
    </>
  )
}
export default Layout
