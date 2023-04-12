import { AppProps } from 'next/app';
import '../styles/index.css';
import { GolosFont } from '../assets/fonts/_fonts';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={GolosFont.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
