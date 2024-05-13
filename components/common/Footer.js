"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathName = usePathname();
  const currentPathSegments = pathName.split("/");
  const firstSegment = currentPathSegments[1];

  return (
    <>
      <section className="footer-wrapper lg:hidden">
        <div className="footer-content flex flex-row justify-between">
          <div className="p-[1.28vw] w-[14.10vw] h-[10.25vw] relative">
            <Image src="/logo-footer.png" alt="" fill />
          </div>
          <div className="fixed right-[5.12vw] bottom-[10.24vw]">
            <div className="flex flex-row items-center gap-x-[1.28vw] bg-white bg-opacity-50 py-[1.28vw] px-[1.28vw] rounded-[30px]">
              <Link href="#">
                <div className="relative w-[4.12vw] h-[3.84vw] z-10">
                  <Image src="/arrow-footer.png" alt="icono-arrow" fill />
                </div>
              </Link>
              {firstSegment == "es" && (
                <a
                  href="https://www.instagram.com/templecerveza/"
                  target="_blank"
                >
                  <div className="relative w-[4.87vw] h-[4.87vw]">
                    <Image
                      src="/instagram-footer.png"
                      alt="icono-instagram"
                      fill
                    />
                  </div>
                </a>
              )}
              {firstSegment == "es-MX" && (
                <a href="https://www.instagram.com/templemex" target="_blank">
                  <div className="relative w-[4.87vw] h-[4.87vw]">
                    <Image src="/instagram-footer.png" fill />
                  </div>
                </a>
              )}

              {firstSegment == "en" && (
                <a
                  href="https://www.instagram.com/templemiami/"
                  target="_blank"
                >
                  <div className="relative w-[4.87vw] h-[4.87vw]">
                    <Image
                      src="/instagram-footer.png"
                      alt="icono-instagram"
                      fill
                    />
                  </div>
                </a>
              )}
              {firstSegment == "es" && (
                <a href="https://www.tiktok.com/@templecerveza" target="_blank">
                  <div className="relative w-[4.35vw] h-[4.87vw]">
                    <Image
                      src="/tik-tok-footer.png"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="icono-tiktok"
                      fill
                    />
                  </div>
                </a>
              )}
              {firstSegment == "en" && (
                <a href="https://www.tiktok.com/@templecerveza" target="_blank">
                  <div className="relative w-[4.35vw] h-[4.87vw]">
                    <Image
                      src="/tik-tok-footer.png"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="icono-tiktok"
                      fill
                    />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
