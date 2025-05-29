import { AbstractIntlMessages, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import About from "./components/About";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const messages: AbstractIntlMessages = await getMessages({ locale });
  const title = messages.TabTitles?.home;

  return {
    title,
  };
}


export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="flex flex-col gap-8 items-center">
      <h1 className="font-bold text-lg md:text-3xl text-center" >
        {t('title')}
      </h1>
      <About />
    </main>
  );
}
