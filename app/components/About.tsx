import { useTranslations } from "next-intl";
import Image from 'next/image'

const About = () => {
  const t = useTranslations('About');
  return (
    <div className="min-h-[80vh] text-center text-3xl flex flex-col items-center gap-6">
        <h1 className="font-bold text-lg md:text-3xl" >
          {t('title')}
        </h1>
        <h2 className="text-base md:text-xl font-medium text-gray-800">
          {t('subTitle')}
        </h2>
        <div className="w-48 h-48 md:w-80 md:h-80 overflow-hidden flex items-center justify-center">
          <Image
            src="/AboutImage.png"
            width={300}
            height={300}
            alt="Picture of the author"
            objectFit="cover"
          />
        </div>
    </div>
  )
}

export default About
