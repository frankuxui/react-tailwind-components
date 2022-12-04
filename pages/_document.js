import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        <meta name='theme-color' content='#1d4ed8' />
        <link rel='icon' href='/images/favicon.ico' />
        <link rel='apple-touch-icon' href='/images/apple-touch-icon.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap' rel='stylesheet' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id='portal' />
      </body>
    </Html>
  )
}
