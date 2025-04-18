import "./globals.css";
import localFont from "next/font/local";
import { i18n } from "../../i18n-config";
import ClientRootLayout from "./ClientRootLayout";
import Head from "next/head";

export const Knockout34 = localFont({
  src: [
    {
      path: "../../fonts/Knockout-HTF34-JuniorSumo.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-knockoutjunior",
    },
  ],
});

export const Knockout54 = localFont({
  src: [
    {
      path: "../../fonts/Knockout-HTF54-Sumo.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-knockout",
    },
  ],
});

export const Knockout54UltraBold = localFont({
  src: [
    {
      path: "../../fonts/Knockout-HTF94-UltmtSumo.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-knockout",
    },
  ],
});

export const GothamBook = localFont({
  src: [
    {
      path: "../../fonts/Gotham-Book.woff",
      weight: "400",
      style: "normal",
      variable: "--font-gothambook",
    },
  ],
});

export const Marker = localFont({
  src: [
    {
      path: "../../fonts/MarkerBoldRegular.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-marker",
    },
  ],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <Head>
        <title>Temple Beer</title>
        <meta
          name="description"
          content="Temple Beer - Encuentro, Birra y Música"
        />
        <meta property="og:title" content="Temple Beer" />
        <meta
          property="og:description"
          content="Temple Beer - Encuentro, Birra y Música"
        />
        <meta property="og:url" content="https://templebeer.com/" />

        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className={Knockout54.className}>
        <ClientRootLayout params={params}>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
