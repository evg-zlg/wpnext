import { AppProps } from 'next/app';
import '../styles/index.css';
import { GolosFont } from './_fonts';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={GolosFont.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
