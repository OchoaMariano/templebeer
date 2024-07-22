"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";
import Popup from "../../../components/common/Popup";
import SelectCountry from "../../../components/common/SelectCountry";
import Legales from "../../../components/common/Legales";
import Loader from "../../../components/common/Loader";

export default function ClientRootLayout({ children, params }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSelectCountry, setShowSelectCountry] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const selectedCountry = sessionStorage.getItem("selectedCountry");
    const isFormIpasionales = pathname.includes("/form-ipasionales");

    if (!selectedCountry && !isFormIpasionales) {
      setShowSelectCountry(true);
    }
    setIsLoading(false);
  }, [pathname]);

  if (isLoading) {
    return <Loader />;
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
