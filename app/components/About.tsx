'use client';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Theme } from '../types/theme';
import { useMounted } from '@/hooks/useMounted';

const About = () => {
  const t = useTranslations('About');
  const { theme } = useTheme();

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <section
      id="about"
      className="min-h-[20vh] sm:min-h-[75vh] scroll-mt-[140px] text-center text-3xl flex flex-col items-center gap-6"
    >
      <h1 className="font-bold text-lg md:text-3xl">{t('title')}</h1>
      <h2 className="text-base md:text-xl font-medium text-gray-800">
        {t('subTitle')}
      </h2>
      <div className="w-48 h-48 md:w-80 md:h-80 overflow-hidden flex items-center justify-center">
        <Image
          src={
            theme === Theme.light ? '/AboutImage.png' : '/AboutImageDark.png'
          }
          width={300}
          height={300}
          alt="Picture of the author"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default About;
