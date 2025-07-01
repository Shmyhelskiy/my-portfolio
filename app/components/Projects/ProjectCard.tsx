'use client';
import { FC, useState } from 'react';
import { Project } from '@/app/types';
import { FaAngleDoubleRight, FaGithub, FaPlayCircle  } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import CustomLink from '../CustomLink';
import Link from 'next/link';


interface ProjectProps {
  project: Project;
}

const ProjectCard: FC<ProjectProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-64 bg-gray-800 p-4 rounded-lg flex flex-col justify-center items-center perspective">
      <motion.div
        className="absolute inset-0 w-full h-full flex flex-col justify-center items-center transition-transform duration-500"
      >
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.h3
              key="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white text-center"
            >
              {project.title}
            </motion.h3>
          ) : (
            <motion.div
              key="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-center"
            >
              <p>{project.description}</p>
              <div className=" flex justify-center gap-10 pl-4">
                <CustomLink href={project.demo} ariaLabel={'Demo'} title={'Demo'}> 
                  <FaGithub />
                </CustomLink>
                <CustomLink href={project.code} ariaLabel={'Code'} title={'Code'}>
                  <FaPlayCircle />
                </CustomLink>
              </div>
              <Link href={`/projects/${project.id}`} className="text-red-300">
                <span className="text-lg text-white">Переглянути проєкт</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <button
        className="absolute bottom-2 right-2 text-yellow-500 cursor-pointer hover:scale-110 transition-transform"
        onClick={() => setIsFlipped(!isFlipped)}
        aria-label="More details"
      >
        <FaAngleDoubleRight size={24} />
      </button>
    </div>
  );
};

export default ProjectCard;
