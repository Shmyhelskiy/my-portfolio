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
   <section id="skills" className="w-full py-10">
      <div className="flex justify-around gap-8 px-8">
          {skillsDataArray.map((skill, index) => {
              return <SkillsCard key={skill.title} title={skill.title} skills={skill.technologies} color={colors[index]} />
          })}
      </div>
    </section>
  )
}

export default SkillsSection
