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
    <div className="bg-gray-800 p-3 rounded-lg w-48 mx-auto sm:w-full">
      <h2 className={`${colorClass} text-center text-base font-semibold mb-3 sm:text-2xl sm:font-bold sm:mb-4`}>{title}</h2>
      <ul className="text-white text-lg sm:space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {skills.map((skill) => (
            <li key={skill} 
              className={clsx(
+               "w-fit pl-3 pr-2 py-1 cursor-pointer rounded bg-gray-700 transition-transform duration-300 hover:scale-105 hover:font-semibold hover:translate-x-1",
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
