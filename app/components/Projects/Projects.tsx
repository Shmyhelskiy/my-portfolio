import { useTranslations } from "next-intl";

interface Project {
  title: string;
  description: string;
  demo: string;
  code: string;
}

interface Projects {
  mainTitle: string;
  projects: { [key: string]: Project };
}

const Projects = () => {
  const t = useTranslations("Projects");
  const projectsDataArray: Projects[] = Object.values({
    SkySight: t.raw("SkySight"),
    TaskTamer: t.raw("TaskTamer"),
    NumberCascade: t.raw("NumberCascade"),
    SpotlightPage: t.raw("SpotlightPage")
  });

  return (
    <section className="h-[100vh]">
      <h2 className="text-center text-2xl front-bold"> {t('mainTitle')}</h2>
      <article>

      </article>
    </section>
  )
}

export default Projects
