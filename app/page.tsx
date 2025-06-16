import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import About from './components/About';
import QualitiesDisplay from './components/QualitiesDisplay';
import SkillsSection from './components/Skills/SkillsSection';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import NavBar from './components/NavBar';

type Props = {
  params: Promise<{ locale: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const resolvedParams = await params;
  const messages = await getMessages({ locale: resolvedParams.locale });
  const tabTitles = messages.TabTitles as { home: string } | undefined;
  const title = tabTitles?.home ?? 'Default title';

  return { title };
};

  export default function Home() {
    return (
      <main className="flex flex-col gap-8 items-center">
        <NavBar />  
        <About />
        {/* <QualitiesDisplay /> */}
        <SkillsSection />
        <Projects />
        <Contacts />
      </main>
    );
  }
