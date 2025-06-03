import { FC } from "react";
import clsx from "clsx";

interface SkillsCardProps {
    title: string;
    skills: string[];
    color: string;
}

const SkillsCard:FC<SkillsCardProps> = ({ title, skills, color }) => {
  const colorClass = clsx({
    "text-yellow-500": color === "yellow",
    "text-blue-500": color === "blue",
    "text-red-500": color === "red"
  });
  return (
    <div className="bg-gray-800 p-4 rounded-lg w-full">
      <h2 className={`${colorClass} text-center text-2xl font-bold mb-4`}>{title}</h2>
      <ul className="text-white text-xl space-y-2 grid grid-cols-2 gap-1">
        {skills.map((skill) => (
            <li key={skill} 
              className={clsx(
                "w-fit pl-5 cursor-pointer hover:scale-105 hover:font-bold hover:translate-x-2 transition-transform duration-300 ",
                {
                  "hover:text-yellow-500": colorClass === "text-yellow-500",
                  "hover:text-blue-500": colorClass === "text-blue-500",
                  "hover:text-red-500": colorClass === "text-red-500"
                }
              )}
            >
              {skill}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
