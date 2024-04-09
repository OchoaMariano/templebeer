"use client";

import Image from "next/image";
import Draggable from "../common/Dragabble";

export default function ProductBox({ cerveza, hightlightColor }) {
  if (!cerveza) return null;

  return (
    <>
      {cerveza?.video?.data ? (
        <div
          className="product-box-3"
          style={{
            width: cerveza?.info?.widthSecondary || "34.98vh",
            height: cerveza?.info?.heightSecondary || "69.54vh",
          }}
        >
          <p
            className="mt-[9.91vh] text-right text-[1.41vh] uppercase pb-[1vh]"
            style={{ color: hightlightColor || "white" }}
          >
            {cerveza.video.data.attributes.alternativeText}
          </p>
          <div
            className="relative w-[34.98vh] h-[69.54vh] mb-[11.33vh]"
            style={{
              width: cerveza.info?.widthSecondary || "34.98vh",
              height: cerveza.info?.heightSecondary || "69.54vh",
            }}
          >
            <video
              src={cerveza.video.data.attributes.url}
              className="cursor-pointer"
              autoPlay
              playsInline
              loop
              muted
              preload="auto"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="sticker-iso-rosa absolute md:-left-[6.6vh] md:top-[8vh] hidden md:block">
            <Draggable initialPosition={{ x: 0, y: 0 }}>
              <div className="rotate-[23deg] w-[16.92vw] h-[16.92vw] md:w-[9.69vh] md:h-[9.69vh] relative">
                <Image src="/sticker-rosa-tempple.png" alt="Temple Beer" fill />
              </div>
            </Draggable>
          </div>
          <div className="sticker-temple-amarillo absolute md:right-[10vh] md:top-[30vh] hidden md:block">
            <Draggable initialPosition={{ x: 0, y: 0 }}>
              <div className="-rotate-[14.25deg] w-[39.23vw] h-[8.20vw] md:w-[16.28vh] md:h-[3.42vh] relative">
                <Image
                  src="/sticker-temple-amarrillo.png"
                  alt="Temple Beer"
                  fill
                />
              </div>
            </Draggable>
          </div>
        </div>
      ) : (
        <div
          className="product-box-3"
          style={{
            width: cerveza?.info?.widthSecondary || "34.98vh",
            height: cerveza?.info?.heightSecondary || "69.54vh",
          }}
        >
          <p
            className="mt-[9.91vh] text-right text-[1.41vh] uppercase pb-[1vh] ml-[10vh]"
            style={{ color: hightlightColor || "white", marginLeft: "10vh" }}
          >
            {cerveza?.image.data.attributes.alternativeText}
          </p>
          <div
            className="relative w-[89.74vw] h-[125.89vw] md:w-[34.98vh] md:h-[69.54vh] mb-[11.33vh]"
            style={{
              width: cerveza?.info?.widthSecondary || "34.98vh",
              height: cerveza?.info?.heightSecondary || "69.54vh",
            }}
          >
            <Image
              src={cerveza?.image?.data.attributes.url}
              alt={cerveza?.image.data.attributes.alternativeText || "Cerveza"}
              className="test"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="sticker-iso-rosa absolute -left-[1vh] top-[8vh] hidden md:block">
            <Draggable initialPosition={{ x: 0, y: 0 }}>
              <div className="rotate-[23deg] w-[9.69vh] h-[9.69vh] relative">
                <Image src="/sticker-rosa-tempple.png" alt="Temple Beer" fill />
              </div>
            </Draggable>
          </div>
          <div className="sticker-temple-amarillo absolute right-[10vh] top-[30vh] hidden md:block">
            <Draggable initialPosition={{ x: 0, y: 0 }}>
              <div className="-rotate-[14.25deg] w-[16.28vh] h-[3.42vh] relative">
                <Image
                  src="/sticker-temple-amarrillo.png"
                  alt="Temple Beer"
                  fill
                />
              </div>
            </Draggable>
          </div>
        </div>
      )}
    </>
  );
}
