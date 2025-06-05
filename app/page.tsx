import { AbstractIntlMessages } from 'next-intl';
import { getMessages } from 'next-intl/server';
import About from './components/About';
import QualitiesDisplay from './components/QualitiesDisplay';
import SkillsSection from './components/Skills/SkillsSection';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts';

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
  return (
    <main className="flex flex-col gap-8 items-center">
      <About />
      {/* <QualitiesDisplay /> */}
      <SkillsSection />
      <Projects />
      <Contacts />
    </main>
  );
}
