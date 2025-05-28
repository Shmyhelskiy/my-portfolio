import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const localeKey = process.env.NEXT_PUBLIC_LOCALE_COOKIE_KEY;

export default getRequestConfig(async () => {
    const cookieLocale = (await cookies()).get(`${localeKey}`)?.value || 'en';
    const locale = cookieLocale;
    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    }
})