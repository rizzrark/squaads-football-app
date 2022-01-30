import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import DummyTextComponent from './DummyTextComponent'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children }: Props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation
      navHomeIconSize={40}
      navIconSize={32}
      navColor="bg-neutral-800"
    />
    <main className="flex flex-col items-center justify-center mx-4 ">
      {children}
      <DummyTextComponent />
    </main>
  </div>
)

export default Layout
