
import ProjectCard from "./ProjectCard";
import { Project } from "@/app/types";
import { useProjectsData } from "@/hooks/useProjectsData";

interface Projects {
  mainTitle: string;
  projects: { [key: string]: Project };
}

const Projects = () => {
  const { mainTitle, projectsArray } = useProjectsData();
  
  return (
    <section className="h-[100vh] w-full scroll-mt-[140px]" id="projects">
      <h2 className="text-center text-2xl front-bold pb-2">{mainTitle}</h2>
      <article className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8">
        {projectsArray.map((item, index) => {
          return <ProjectCard project={item} key={index} />
        })}
      </article>
    </section>
  )
}

export default Projects
