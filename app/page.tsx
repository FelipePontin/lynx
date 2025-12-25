import Image from "next/image";

// components
import AlertBar from "@/components/AlertBar/AlertBar";
import BannerSectionFull from "@/components/BannerSectionFull/BannerSectionFull";
import Title from "@/components/Title/Title";
import CardInfo from "@/components/CardInfo/CardInfo";
import BannerSection from "@/components/BannerSection/BannerSection";
import CardInfoImage from "@/components/CardInfoImage/CardInfoImage";
import BannerSectionSimple from "@/components/BannerSectionSimple/BannerSectionSimple";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";

// icons
import { FiLayout } from "react-icons/fi";
import { MdOutlinePalette } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FaRegCircleCheck } from "react-icons/fa6";

// images
import ImageIV from "../images/ecosystem-identity.png";
import ImageWeb from "../images/ecosystem-website.png";
import ImageDigital from "../images/ecosystem-presence.png";
import CallToActionBackground from "../images/call-to-action.png";

export default function Home() {
  return (
    <div className="">
      <AlertBar />
      <BannerSectionFull />
      <Title
        text="Serviços que"
        coloredText=" Oferecemos"
        description="Criamos sites, landing pages, identidades visuais, criativos, materiais para redes sociais e tudo o que você precisa para um lançamento visualmente impecável."
      />
      <CardInfo
        items={[
          {
            title: "Websites & Landing Pages",
            description:
              "Interfaces de alta conversão com estética Apple e performance impecável.",
            icon: <FiLayout className="cardInfo__icon" />,
          },
          {
            title: "Identidade Visual",
            description:
              "Criamos marcas memoráveis que capturam a essência do seu negócio e dominam o mercado.",
            icon: <MdOutlinePalette className="cardInfo__icon" />,
          },
          {
            title: "Criativos & Social Media",
            description:
              "Materiais visuais impecáveis para redes sociais e campanhas que convertem olhares em clientes.",
            icon: <HiOutlineLightningBolt className="cardInfo__icon" />,
          },
          {
            title: "Lançamentos Visuais",
            description:
              "Tudo o que você precisa para um lançamento visualmente impecável e estrategicamente sólido.",
            icon: <FaRegCircleCheck className="cardInfo__icon" />,
          },
        ]}
      />
      <BannerSection />
      <CardInfoImage />
      <Title
        text="O Poder do"
        coloredText=" Ecossistema Digital"
        description="No mundo moderno, sua presença digital não é um luxo, é a base da sua sobrevivência e crescimento."
      />
      <BannerSectionSimple
        title={"Identidade Visual"}
        subtitle={
          "Sua marca é sua digital no mundo. Uma identidade forte cria reconhecimento instantâneo e confiança inabalável."
        }
        imageLeft={true}
        imageLink={ImageIV.src}
        altImage={"Identidade Visual"}
      />
      <BannerSectionSimple
        title={"Website de Elite"}
        subtitle={
          "Seu site é sua vitrine 24/7. Não é apenas sobre estar online, é sobre como você se apresenta ao mundo."
        }
        imageLeft={false}
        imageLink={ImageWeb.src}
        altImage={"Website de Elite"}
      />
      <BannerSectionSimple
        title={"Presença Digital"}
        subtitle={
          "Quem não é visto, não é lembrado. Uma presença estratégica coloca você onde seus clientes estão."
        }
        imageLeft={true}
        imageLink={ImageDigital.src}
        altImage={"Identidade Visual"}
      />
      <CallToAction
        title={"Sua marca está pronta para subir de nível?"}
        subtitle={
          "Junte-se às marcas que já estão definindo o futuro do mercado com a Lynx Dsn. O próximo nível começa aqui."
        }
        background={CallToActionBackground.src}
        buttonText={"Iniciar Minha Jornada"}
        buttonLink={""}
      />
      <Footer />
    </div>
  );
}
