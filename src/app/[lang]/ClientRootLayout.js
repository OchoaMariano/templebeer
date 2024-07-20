// app/[lang]/ClientRootLayout.js
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Popup from "../../../components/common/Popup";
import SelectCountry from "../../../components/common/SelectCountry";
import Legales from "../../../components/common/Legales";

export default function ClientRootLayout({ children, params }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSelectCountry, setShowSelectCountry] = useState(false);

  useEffect(() => {
    const selectedCountry = sessionStorage.getItem("selectedCountry");
    if (!selectedCountry) {
      setShowSelectCountry(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {showSelectCountry ? (
        <SelectCountry onComplete={() => setShowSelectCountry(false)} />
      ) : (
        <>
          <Popup />
          {children}
          <Legales lang={params.lang} />
        </>
      )}
    </>
  );
}
