import { Locale } from '@/app/types/locale';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const localeKey = process.env.NEXT_PUBLIC_LOCALE_COOKIE_KEY ?? 'MYLOCALE';
const supportedLocales = Object.values(Locale);

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get(localeKey)?.value || Locale.EN;

  const checkMaintainLocale = (current: string): Locale => {
    return supportedLocales.includes(current as Locale)
      ? (current as Locale)
      : Locale.EN;
  };

  const locale = checkMaintainLocale(cookieLocale);
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
