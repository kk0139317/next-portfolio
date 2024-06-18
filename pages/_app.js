import '../styles/globals.css'
import Head from 'next/head'
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Your Page Title | Kundan - Freelance Developer</title>
    <meta name="kundan-portfolio" content=" This is landing page for my portfolio " />
    {/* Add more meta tags as needed */}
  </Head>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
    </>
  )
}
