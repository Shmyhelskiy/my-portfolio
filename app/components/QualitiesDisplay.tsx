'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const QualitiesDisplay = () => {
  const t = useTranslations('QualitiesDisplay');
  const qualities = t.raw('qualities') as string[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % qualities.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [qualities.length]);

  return (
    <section id="about" className="flex w-full h-3/4 pl-20 relative">
      <div className="w-96 text-center text-3xl font-bold flex justify-start">
        <svg
          className="w-90 h-90 fill-yellow-500"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" />
          <polygon
            points="50,50 100,20 100,80"
            className="fill-white dark:fill-black"
          >
            <animate
              attributeName="points"
              values="50,50 100,50 100,50; 50,50 100,20 100,80"
              dur="1s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
        <AnimatePresence mode="wait">
          <motion.div
            key={qualities[index]}
            initial={{ opacity: 0, x: 300, y: 80 }}
            animate={{ opacity: 1, x: 90 }}
            exit={{ opacity: 0, x: 90 }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-0 w-full h-full flex items-center justify-center"
          >
            {qualities[index]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div></div>
    </section>
  );
};

export default QualitiesDisplay;
