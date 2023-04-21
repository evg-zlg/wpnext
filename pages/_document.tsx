import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const staticUrl = process.env.WORDPRESS_STATIC_URL

  return (
    <Html lang="en" >
      <Head>
        <link rel="stylesheet" href={`${staticUrl}/static-global-styles.css`} />
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
