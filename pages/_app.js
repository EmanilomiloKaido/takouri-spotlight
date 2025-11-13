// pages/_app.js
import React from "react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Takouri Spotlight</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Tailwind CDN fallback for dev */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'media',
                theme: {
                  extend: {
                    colors: {
                      primary: '#0ea5e9', // Takouri accent color
                      background: '#0a0a0a',
                      foreground: '#ededed'
                    },
                    fontFamily: {
                      sans: ['Arial', 'Helvetica', 'sans-serif']
                    }
                  }
                }
              }
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
