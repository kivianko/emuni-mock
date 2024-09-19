import FooterLink from "./FooterLink";
import FooterColumn from "./FooterColumn";
import LogoHorizonal from "@/components/Logo/Horizonal";

export default function Footer() {
  const footerColumns = [
    {
      title: "Services",
      links: ["生成AIワークショップ", "オーダーメイドAI", "セキュアチャット"],
    },
    {
      title: "Company",
      links: ["私たちについて", "ニュース"],
    },
    {
      title: "Recruit",
      links: ["採用"],
    },
    {
      title: "Contact",
      links: ["資料請求", "お問い合わせ"],
    },
  ];

  return (
    <footer className="flex flex-col justify-center items-center px-8 py-16 w-full bg-black min-h-[304px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full whitespace-nowrap max-w-[1280px] max-md:max-w-full">
        <div className="flex flex-col text-base font-medium text-blue-600 w-[183px]">
          <div className="w-full text-white">
            <LogoHorizonal useColor={false} />
          </div>
          <div className="mt-4">株式会社エムニ</div>
        </div>
        <nav className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </nav>
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
          <div className="text-xs text-gray-400">Copyright © 2024 - All right reserved by エムニ</div>
          <FooterLink href="/privacy-policy" text="プライバシーポリシー" />
        </div>
      </div>
    </footer>
  );
}
