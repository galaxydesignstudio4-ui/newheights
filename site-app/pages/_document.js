import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Favicon will be dynamically set via public URL from Supabase */}
        <link rel="icon" href="/favicon.ico" id="dynamic-favicon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
