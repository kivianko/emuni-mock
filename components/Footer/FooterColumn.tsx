import React from "react";
import FooterLink from "./FooterLink";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <h2 className="self-start text-xl font-bold text-center text-blue-600">{title}</h2>
      <div className="flex gap-2.5 mt-4 text-sm font-medium text-white">
        <div className="flex shrink-0 w-0.5 bg-blue-800" style={{ height: `${links.length * 25 + 20}px` }} />
        <div className="flex flex-col self-start">
          {links.map((link, index) => (
            <FooterLink key={index} href={`#${link}`} text={link} className={index > 0 ? "mt-4" : ""} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterColumn;
