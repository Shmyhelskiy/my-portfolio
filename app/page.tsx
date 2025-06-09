import { getMessages } from 'next-intl/server';
import About from './components/About';
// import QualitiesDisplay from './components/QualitiesDisplay';
import SkillsSection from './components/Skills/SkillsSection';
import Projects from './components/Projects/Projects';
  import Contacts from './components/Contacts/Contacts';
import NavBar from './components/NavBar';


interface MessagesType {
  TabTitles: {
    home: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const messages = (await getMessages({ locale })) as MessagesType;
  const title = messages.TabTitles.home;

  return {
    title,
  };
}

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
