import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import { Project } from "@/app/types";



interface Projects {
  mainTitle: string;
  projects: { [key: string]: Project };
}

const Projects = () => {
  const t = useTranslations("Projects");
  const projectsData: Projects = {
    mainTitle: t("mainTitle"),
    projects: {
      SkySight: t.raw("SkySight"),
      TaskTamer: t.raw("TaskTamer"),
      NumberCascade: t.raw("NumberCascade"),
      SpotlightPage: t.raw("SpotlightPage"),
    },
  };
  const projectsArray = Object.values(projectsData.projects);
  
  return (
    <section className="h-[100vh] w-full">
      <h2 className="text-center text-2xl front-bold pb-2">{t('mainTitle')}</h2>
      <article className="grid grid-cols-3 gap-8 px-8">
        {projectsArray.map((item, index) => {
          return <ProjectCard project={item} key={index} />
        })}
      </article>
    </section>
  )
}

export default Projects
