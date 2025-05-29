'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Locale } from "../types/locale";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";

const isLocale = (value: string): value is Locale => {
  return Object.values(Locale).includes(value as Locale);
};

const localeKey = process.env.NEXT_PUBLIC_LOCALE_COOKIE_KEY;

const NavBar = () => {
  const [locale, setLocale] = useState<Locale | ''>('');
  const router = useRouter();
  const t = useTranslations('NavBar');

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
    <nav className="flex flex-col border-b-2 border-gray-500 gap-2 p-4 mb-4">
      <div 
        className="flex justify-end md:justify-between items-center"
      >
        <h1 
          className="hidden md:flex items-center"
        >
          Hello
        </h1>
        <div className="flex md:gap-2 items-center">
          <button
            className={`p-2 h-fit font-bold rounded-xl text-sm cursor-pointer ${locale === Locale.UK && 'bg-black text-white dark:bg-white dark:text-black border-2 border-green-400'}`}
            onClick={() => changeLocale(Locale.UK)}
          >
            {Locale.UK}
          </button>
          <button
            className={`p-2 h-fit font-bold rounded-xl text-sm cursor-pointer ${locale === Locale.EN && 'bg-black text-white dark:bg-white dark:text-black border-2 border-green-400'}`}
            onClick={() => changeLocale(Locale.EN)}
          >
            {Locale.EN}
          </button>
          <ThemeToggle />
        </div>
      </div>
      <div className="pb-2">
        <ul className="flex gap-1 md:gap-4 justify-center text-sm md:text-base">
          <li>
            <a href="#about"
              className="px-1 md:px-4 md:py-2 border-2 border-black/20 rounded-3xl hover:border-black hover:bg-gray-300 dark:hover:bg-gray-800"
            >
              {t('about')}
            </a>
          </li>
          <li>
            <a href="#skills"
              className="px-1 md:px-4 md:py-2 border-2 border-black/20 rounded-3xl hover:border-black hover:bg-gray-300 dark:hover:bg-gray-800"
            >
              {t('skills')}
            </a>
          </li>
          <li>
            <a href="#projects"  
              className="px-1 md:px-4 md:py-2 border-2 border-black/20 rounded-3xl hover:border-black hover:bg-gray-300 dark:hover:bg-gray-800"
            >
              {t('projects')}
            </a>
          </li>
          <li>
            <a href="#contact"
              className="px-1 md:px-4 md:py-2 border-2 border-black/20 rounded-3xl hover:border-black hover:bg-gray-300 dark:hover:bg-gray-800"
            >
              {t('contact')}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
