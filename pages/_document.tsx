import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-website-id="a62faa43-f000-4f53-a79f-ad5d822ec24d"
            src="https://u.iwfan.site/umami.js"
          />
        )}
      </body>
    </Html>
  )
}
