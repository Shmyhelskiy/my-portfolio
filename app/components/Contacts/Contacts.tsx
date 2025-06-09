import Link from "next/link";
import { IconType } from "react-icons";
import { FaTelegramPlane, FaEnvelope, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import ContactActions from "./ContactActions";

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Shmyhelskiy",
    icon: FiGithub,
  },
  {
    name: "Telegram",
    url: "https://t.me/Shmyhelskyi_Oleksandr",
    icon: FaTelegramPlane ,
  },
  {
    name: "Email",
    url: "mailto:shmyhelskyi.o.v@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your-link-here/",
    icon: FaLinkedinIn,
  },
  {
  name: "Phone",
  url: "tel:+380683011136",
  icon: FaPhone,
}
];


const Contacts = () => {
  return (
    <footer 
      className="bg-black w-full h-[20vh] relative"
      id="contact"
    >
      <div
        className="flex justify-center items-center gap-6 h-full"
      >
        {socialLinks.map((item, index) => (
          <Link
            href={item.url}
            target="_blank"
            key={index}
            aria-label={item.name} 
            className="w-12 h-12 p-2 flex justify-center items-center border-2 border-white hover:bg-white rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <item.icon size={32} className="text-blue-500" />
          </Link>
        ))}

        <ContactActions />
      </div>
    </footer>
  )
}

export default Contacts
