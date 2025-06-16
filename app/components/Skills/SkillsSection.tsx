import { useTranslations } from "next-intl";
import SkillsCard from "./SkillsCard";

interface SkillCategory {
  title: string;
  technologies: string[];
}

const SkillsSection = () => {
  const t = useTranslations('Skills');
  const skillsDataArray: SkillCategory[] = Object.values({
    frontend: t.raw("frontend"),
    backend: t.raw("backend"),
    databases: t.raw("databases")
  });

  const colors = ['yellow', 'blue', 'red'];

  return (
   <section id="skills" className="w-full scroll-mt-[140px]">
      <div className="flex flex-col sm:flex-row sm:justify-around gap-6 sm:gap-8 sm:px-8">
          {skillsDataArray.map((skill, index) => {
              return <SkillsCard key={skill.title} title={skill.title} skills={skill.technologies} color={colors[index]} />
          })}
      </div>
    </section>
  )
}

export default SkillsSection
