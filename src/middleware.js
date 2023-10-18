import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['en', 'es'];
let defaultLocale = 'es';

function getLocale(request) {
  const headers = { 'accept-language': request.headers.get('accept-language') || '' };
  const languages = new Negotiator({ headers }).languages();
  
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  console.log('Middleware ejecutado');

  const pathname = request.nextUrl.pathname;

  // Si la solicitud parece ser para un recurso estático, no interferimos
  if (pathname.match(/\.(jpg|jpeg|png|svg|css|js|woff2?|ttf|eot|json)$/)) {
    return NextResponse.next();
  }

  // Intenta obtener el locale de los headers
  const locale = getLocale(request);

  // Verificar el locale en la URL
  const pathnameIsMissingLocale = locales.every(
    (loc) => !pathname.startsWith(`/${loc}/`) && pathname !== `/${loc}`
  );

  // Si el locale falta en la URL
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(`${request.nextUrl.origin}/${locale}${pathname}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
};
