import "./globals.css";
import localFont from "next/font/local";
import Popup from "../../../components/common/Popup";
import SelectCountry from "../../../components/common/SelectCountry";
import Legales from "../../../components/common/Legales";
import { i18n } from "../../i18n-config";
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

export const metadata = {
  title: "Temple Beer",
  description: "Temple Beer - Encuentro, Birra y Música",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className={Knockout54.className}>
        <SelectCountry />
        <Popup />
        {children}
        <Legales lang={params.lang} />
      </body>
    </html>
  );
}
