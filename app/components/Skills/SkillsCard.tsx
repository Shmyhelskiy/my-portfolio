import { FC } from "react";

interface SkillsCardProps {
    title: string;
    skills: string[];
    color: string;
}

const SkillsCard:FC<SkillsCardProps> = ({ title, skills, color }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg w-full">
      <h2 className={`text-${color}-500 text-2xl font-bold mb-4`}>{title}</h2>
      <ul className="text-white space-y-2">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
