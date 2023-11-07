import React from 'react';
import Image from 'next/image';

export default function BannerWithFloatingLinks() {
  return (
    <div className="banner-wrapper relative overflow-hidden">
      <div className="banner-background">
        <Image
          src="/playlists.png"
          alt="Playlists"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          unoptimized={true}
        />
      </div>
      <div
        className="banner-links flex flex-row w-[250vh] items-center absolute h-[7.64vh] z-10 gap-x-[3.11vh]"
        style={{
          animation: 'moveLinks 10s linear infinite',
          willChange: 'transform',
        }}
      >
        {/* Enlace 1 */}
        <a href="https://open.spotify.com/playlist/34gBtrKbpSqurt0qcYPVmL?si=9bca1e42f3db4f07&nd=1" target="_blank" className="banner-link  gap-x-[1.6vh]" style={{ flex: 'none' }}>
          <span className="text-white uppercase text-[1.6vh]">UNA BIRRA CON NACHO ELIZALDE</span>
          <img src="/nacho.png" alt="Icono" style={{ width: '16vh', height: '3.96vh' }} />
        </a>
        {/* Enlace 2 */}
        <a href="https://open.spotify.com/playlist/71DWHTy6jLdZzDZ7YAghTA?si=4809547697394242&nd=1" target="_blank" className="banner-link gap-x-[1.6vh]" style={{ flex: 'none' }}>
          <span className="text-white uppercase text-[1.6vh]"> Riko x pai</span>
          <img src="/sppotify-3.png" alt="Icono" style={{ width: '16vh', height: '3.96vh' }} />
        </a>
        {/* Enlace 3 */}
        <a href="https://open.spotify.com/playlist/6VAEpT3UkmoFvrWBYMVa0u?si=75d019bdd0bb4496&nd=1" target="_blank" className="banner-link gap-x-[1.6vh]" style={{ flex: 'none' }}>
          <span className="text-white uppercase text-[1.6vh]">Full data</span>
          <img src="/spotify-2.png" alt="Icono" style={{ width: '16vh', height: '3.96vh' }} />
        </a>
        {/* Enlace 1 */}
        <a href="https://open.spotify.com/playlist/34gBtrKbpSqurt0qcYPVmL?si=9bca1e42f3db4f07&nd=1" target="_blank" className="banner-link  gap-x-[1.6vh]" style={{ flex: 'none' }}>
          <span className="text-white uppercase text-[1.6vh]">UNA BIRRA CON NACHO ELIZALDE</span>
          <img src="/nacho.png" alt="Icono" style={{ width: '16vh', height: '3.96vh' }} />
        </a>
        {/* Enlace 2 */}
        <a href="https://open.spotify.com/playlist/71DWHTy6jLdZzDZ7YAghTA?si=4809547697394242&nd=1" target="_blank" className="banner-link gap-x-[1.6vh]" style={{ flex: 'none' }}>
          <span className="text-white uppercase text-[1.6vh]"> Riko x pai</span>
          <img src="/sppotify-3.png" alt="Icono" style={{ width: '16vh', height: '3.96vh' }} />
        </a>
        {/* Enlace 3 */}
        <a href="https://open.spotify.com/playlist/6VAEpT3UkmoFvrWBYMVa0u?si=75d019bdd0bb4496&nd=1" target="_blank" className="banner-link gap-x-[1.6vh]" style={{ flex: 'none' }}>
          <span className="text-white uppercase text-[1.6vh]">Full data</span>
          <img src="/spotify-2.png" alt="Icono" style={{ width: '16vh', height: '3.96vh' }} />
        </a>
      </div>
    </div>
  );
}
