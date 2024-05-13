"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createLocalePath } from "../../src/utils/pathUtils";

function Legales({ lang }) {
  const pathName = usePathname();

  return (
    <>
      <div className="footer-legales uppercase hidden md:block md:fixed bottom-0 right-0 h-[4.1vh] pr-[0.99vh]">
        <div className="flex items-center">
          {lang === "es" && (
            <Link
              href={createLocalePath("/legales", pathName)}
              className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out text-[1.41vh]"
            >
              Legales
            </Link>
          )}
          {lang === "es-MX" && (
            <Link
              href={createLocalePath("/legales", pathName)}
              className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out text-[1.41vh]"
            >
              Legales
            </Link>
          )}
          {lang === "en" && (
            <Link
              href={createLocalePath("/legales", pathName)}
              className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out text-[1.41vh]"
            >
              Legal
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Legales;
