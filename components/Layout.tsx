import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navigation from './Navigation'
import DummyTextComponent from './DummyTextComponent'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="fixed top-0">Title</header>
    <main className="flex flex-col items-center justify-center ">
      {children}
      <DummyTextComponent />
    </main>
    <Navigation />
  </div>
)

export default Layout
