// import ServiceCard from "./ServiceCard";

// interface ServiceData {
//   title: string;
//   description: string;
//   buttonText: string;
// }

// const services: ServiceData[] = [
//   {
//     title: "製造業向け オーダーメイド 生成AI開発",
//     description:
//       "製造業のお客様向けに、課題解決や目指す姿に応じたAIをオーダーメイドで開発します。チャットボットや自動報告書作成、設計書確認の効率化など、多数の実績と高い技術力で新たな価値を創出します。",
//     buttonText: "詳しくはこちら",
//   },
//   {
//     title: "製造業向け 生成AI ワークショップ",
//     description:
//       "松尾研究所でのAI社会実装経験と大手法人向けコンサル営業を経た講師が、生成AIの基礎から最先端までを分かりやすく説明、講義やハンズオン演習、活用事例を通じ、カスタマイズワークショップを提供します。",
//     buttonText: "詳しくはこちら",
//   },
//   {
//     title: "情報漏洩しない セキュアチャット の提供",
//     description:
//       "セキュアに使える社内専用AIチャットボットアプリを開発・提供しています。業務内容や社内環境に合わせたAIを搭載しており、ユーザーの日々の業務をサポートし、業務効率の向上に貢献します。",
//     buttonText: "詳しくはこちら",
//   },
// ];

export default function HeroSection() {
  return (
    <section className="flex relative flex-col justify-center items-start h-screen bg-[url('/images/service_bg.png')]">
      <div className="flex relative flex-col max-w-full w-[950px]">
        <h1 className="self-start text-4xl text-white leading-[53px] tracking-[2.05px] max-md:max-w-full">
          京大・松尾研出身者の技術力で創る 製造業特化型 生成AI開発サービス
        </h1>
        <p className="self-start mt-14 text-base tracking-wider leading-6 text-white max-md:mt-10 max-md:max-w-full">
          京都大学大学院でAI研究に従事したメンバーや、東京大学大学院工学系研究科松尾研究室とビジョンを共有する松尾研究所でAI社会実装を経験したメンバーが、多数のハッカソン入賞歴を誇る高いシステム開発力を活かし、貴社に最適なAIソリューションを提供いたします。
        </p>

        {/* <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
