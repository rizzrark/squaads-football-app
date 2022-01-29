import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <main className="flex justify-center items-center">
      <h1 className="text-6xl text-blue-600">Hello Squaads 👋</h1>
    </main>
  </Layout>
)

export default IndexPage
