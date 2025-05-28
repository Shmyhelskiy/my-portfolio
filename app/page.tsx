import { AbstractIntlMessages, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

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
      <h1>
        {t('title')}
      </h1>
    </main>
  );
}
