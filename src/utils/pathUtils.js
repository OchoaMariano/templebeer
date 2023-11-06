// Importa i18n y otras dependencias si es necesario
import { i18n } from '../i18n-config';

export const createLocalePath = (path, pathname) => {
  const currentPathSegments = pathname.split('/');
  const firstSegment = currentPathSegments[1];
  const isLocale = i18n.locales.includes(firstSegment);

  if (isLocale && !path.startsWith(`/${firstSegment}`)) {
    return `/${firstSegment}${path}`;
  }

  return path;
};