// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Production Tailwind CSS */}
          <link rel="stylesheet" href="/tailwind.css" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Google Fonts (optional for cinematic feel) */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Geist+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />

          {/* Meta */}
          <meta name="description" content="Takouri Spotlight — The Digital Stage for Visionaries" />
          <meta name="theme-color" content="#0a0a0a" />

          {/* Social Sharing */}
          <meta property="og:title" content="Takouri Spotlight" />
          <meta property="og:description" content="The Digital Stage for Visionaries" />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:type" content="website" />

          {/* Optional: Tailwind CDN fallback for dev */}
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.4/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-black text-white font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
