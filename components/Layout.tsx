import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

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
    <header>Title</header>
    <main className="flex flex-col items-center justify-center min-h-screen">
      {children}
      <footer className="mt-auto">
        <hr />
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
    </main>
  </div>
)

export default Layout
