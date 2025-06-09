import { useTranslations } from "next-intl";
import Link from "next/link";

const ContactActions = () => {
  const t = useTranslations("ContactsActions");
  return (
    <div className="absolute top-[-30] w-96">
      <div className="flex items-center justify-between rounded-2xl gap-8 px-10 h-16 bg-red-400">
        <div className="border-2 border-blue-400 rounded-full hover:bg-blue-400 p-2 transition-colors duration-300 cursor-pointer">
          <Link href={'/contactForm'}>{t('email')}</Link>
        </div>
        <div className="border-2 border-blue-400 rounded-full hover:bg-blue-400 p-2 transition-colors duration-300 cursor-pointer">
          <Link href="/CV_Oleksandr_Shmyhelskyi_Front-end developer.pdf" download>{t('cv')}</Link>
        </div>
      </div>
    </div>
  )
}

export default ContactActions
