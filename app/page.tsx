import Banner from "@/components/modal/banner";
import SphereParticleSystem from "@/utils/threejs_particle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

const clientLogos = [
  { src: `${BASE_PATH}/images/client_logo/sumitomo.png`, alt: "Client 1", width: 180, height: 50 },
  { src: `${BASE_PATH}/images/client_logo/tokyo.png`, alt: "Client 2", width: 180, height: 50 },
  { src: `${BASE_PATH}/images/client_logo/stnet.png`, alt: "Client 3", width: 150, height: 50 },
  { src: `${BASE_PATH}/images/client_logo/soundone.png`, alt: "Client 4", width: 280, height: 50 },
  { src: `${BASE_PATH}/images/client_logo/npat.png`, alt: "Client 5", width: 180, height: 50 },
  { src: `${BASE_PATH}/images/client_logo/sagri.png`, alt: "Client 6", width: 120, height: 50 },
  { src: `${BASE_PATH}/images/client_logo/yamaguchi.png`, alt: "Client 7", width: 300, height: 50 },
];
const partnerslogos = [
  { src: `${BASE_PATH}/images/partners_logo/google_logo.png`, alt: "Client 1", width: 350, height: 50 },
  { src: `${BASE_PATH}/images/partners_logo/AWS_Activate_logo.png`, alt: "Client 2", width: 200, height: 50 },
  { src: `${BASE_PATH}/images/partners_logo/microsoft_logo.png`, alt: "Client 3", width: 200, height: 50 },
  { src: `${BASE_PATH}/images/partners_logo/nttpc_communications_logo.png`, alt: "Client 4", width: 230, height: 50 },
  { src: `${BASE_PATH}/images/partners_logo/Socolabo.png`, alt: "Client 5", width: 80, height: 50 },
  { src: `${BASE_PATH}/images/partners_logo/hexagon.png`, alt: "Client 6", width: 120, height: 50 },
  { src: `${BASE_PATH}/images/partners_logo/ICF_logo.png`, alt: "Client 7", width: 180, height: 50 },
];

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <Banner imageSrc={`${BASE_PATH}/images/banner_20240918.png`} altText="生成AI事例への案内バナー" />

      {/* ヒーローセクション */}
      <section id="hero" className="relative w-full h-[900px] ">
        <video src="/videos/hero_20240913.mp4" className="w-full h-full object-cover" autoPlay loop muted />
      </section>

      <section id="client" className="relative w-full h-full">
        <SphereParticleSystem width="100%" height="1280px" />
        <div className="absolute inset-0 flex flex-wrap justify-center max-w-[1280px] mx-auto pt-32 gap-14">
          {/* 主要取引先 */}
          <section className="flex flex-col gap-20">
            <h2 className="text-4xl font-semibold text-center">主要取引先</h2>
            <ul className="flex flex-row flex-wrap gap-x-36 gap-y-16 items-center justify-center">
              {clientLogos.map((logo, index) => (
                <li key={index} className="flex items-center justify-center">
                  <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                </li>
              ))}
            </ul>
          </section>
          {/* Partners */}
          <section className="flex flex-col gap-20">
            <h2 className="text-4xl font-semibold text-center">Partners</h2>
            <ul className="flex flex-row flex-wrap gap-x-36 gap-y-16 items-center justify-center">
              {partnerslogos.map((logo, index) => (
                <li key={index} className="flex items-center justify-center">
                  <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      {/* Services */}
      <section id="hero" className="relative w-full h-full bg-cover bg-[url('/images/service_bg.png')]">
        <div className="flex p-36">
          <section className="flex flex-col gap-16">
            <div className="flex flex-col w-1/2 gap-12">
              <h3 className="text-white text-4xl leading-relaxed">
                京大・松尾研出身者の技術力で創る
                <br />
                製造業特化型 生成AI開発サービス
              </h3>
              <p className="text-white leading-relaxed">
                京都大学大学院でAI研究に従事したメンバーや、東京大学大学院工学系研究科松尾研究室とビジョンを共有する松尾研究所でAI社会実装を経験したメンバーが、多数のハッカソン入賞歴を誇る高いシステム開発力を活かし、貴社に最適なAIソリューションを提供いたします。
              </p>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
              <div className="bg-white shadow-md">
                <Image
                  src="/images/card_image_1.png"
                  alt="Product Image"
                  width={600}
                  height={350}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl text-center font-bold mb-6">
                    製造業向け
                    <br />
                    オーダーメイド
                    <br />
                    生成AI開発
                  </h2>
                  <p className="leading-6 mb-4">
                    製造業のお客様向けに、課題解決や目指す姿に応じたAIをオーダーメイドで開発します。チャットボットや自動報告書作成、設計書確認の効率化など、多数の実績と高い技術力で新たな価値を創出します。
                  </p>
                  <Button className="w-full">詳しくはこちら</Button>
                </div>
              </div>
              <div className="bg-white shadow-md">
                <Image
                  src="/images/card_image_2.png"
                  alt="Product Image"
                  width={600}
                  height={350}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl text-center font-bold mb-6">
                    製造業向け
                    <br />
                    生成AI
                    <br />
                    ワークショップ
                  </h2>
                  <p className="leading-6 mb-4">
                    松尾研究所でのAI社会実装経験と大手法人向けコンサル営業を経た講師が、生成AIの基礎から最先端までを分かりやすく説明、講義やハンズオン演習、活用事例を通じ、カスタマイズワークショップを提供します。
                  </p>
                  <Button className="w-full">詳しくはこちら</Button>
                </div>
              </div>
              <div className="bg-white shadow-md">
                <Image
                  src="/images/card_image_3.png"
                  alt="Product Image"
                  width={600}
                  height={350}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl text-center font-bold mb-6">
                    情報漏洩しない
                    <br />
                    セキュアチャット
                    <br />
                    の提供
                  </h2>
                  <p className="leading-6 mb-4">
                    セキュアに使える社内専用AIチャットボットアプリを開発・提供しています。
                    業務内容や社内環境に合わせたAIを搭載しており、ユーザーの日々の業務をサポートし、業務効率の向上に貢献します。
                  </p>
                  <Button className="w-full">詳しくはこちら</Button>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}
