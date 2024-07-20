import '../styles/tailwind.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  )
}

export default MyApp
