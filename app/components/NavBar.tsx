'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Locale } from "../types/locale";

const isLocale = (value: string): value is Locale => {
  return Object.values(Locale).includes(value as Locale);
};

const localeKey = process.env.NEXT_PUBLIC_LOCALE_COOKIE_KEY;

const NavBar = () => {
  const [locale, setLocale] = useState<Locale | ''>('');
  const router = useRouter();

  useEffect(() => {
    const cookeiLocale = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${localeKey}=`))
    ?.split('=')[1];

    if ( cookeiLocale) {
      if (cookeiLocale && isLocale(cookeiLocale)) {
        setLocale(cookeiLocale);
      }
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      const defaultLocale = isLocale(browserLocale) ? browserLocale : Locale.EN;
      setLocale(defaultLocale)
      document.cookie = `${localeKey}=${browserLocale}`;
      router.refresh();
    }

  }, [router]);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    document.cookie = `${localeKey}=${newLocale}`;
    router.refresh();
  };

  return (
        <nav className="flex justify-between items-center border-b-2 border-gray-500 p-4 mx-20">
      <h1>Hello</h1>
      <div className="flex gap-2">
        <button
          className={`p-2 font-bold rounded-md text-sm cursor-pointer ${locale === Locale.UK && 'bg-black text-white'}`}
          onClick={() => changeLocale(Locale.UK)}
        >
          {Locale.UK}
        </button>
        <button
          className={`p-2 font-bold rounded-md text-sm cursor-pointer ${locale === Locale.EN && 'bg-black text-white'}`}
          onClick={() => changeLocale(Locale.EN)}
        >
          {Locale.EN}
        </button>
      </div>
    </nav>
  )
}

export default NavBar
