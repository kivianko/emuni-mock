import React from "react";

interface FooterLinkProps {
  href: string;
  text: string;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text, className = "" }) => {
  return (
    <a href={href} className={`text-sm text-gray-500 hover:text-blue-600 transition-colors ${className}`}>
      {text}
    </a>
  );
};

export default FooterLink;
