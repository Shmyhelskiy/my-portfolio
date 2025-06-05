import { FC, ReactNode } from "react";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  ariaLabel: string;
  title: string;
  children: ReactNode;
}

const CustomLink: FC<CustomLinkProps> = ({ href, ariaLabel, title, children }) => {
  return (
    <Link href={href}  target="_blank" aria-label={ariaLabel} className="flex items-center gap-4 hover:text-yellow-300 transition-opacity">
      {children}
      <span className="text-lg font-medium">{title}</span>
    </Link>
  );
};

export default CustomLink;
