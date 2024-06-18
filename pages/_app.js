import '../styles/globals.css';
import Head from 'next/head';
import Layout from './layout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kundan - Freelance Developer | Full Stack Developer | Python/Django Developer</title>
        <meta name="description" content="I am Kundan, a Full Stack Developer specializing in Python/Django. This is my portfolio showcasing my skills and projects." />
        {/* Additional meta tags for keywords */}
        <meta name="keywords" content="Freelancer, Django Developer, Python Developer, Web App Developer, Machine Learning Engineer" />
        <meta name="keywords" content="Software Engineer, Web developer, Chess Player" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
