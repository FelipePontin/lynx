"use client";

import React, { useEffect } from "react";

import Image from "next/image";

// animations
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Header from "@/components/Header/Header";
import BannerSectionFull from "@/components/BannerSectionFull/BannerSectionFull";
import Title from "@/components/Title/Title";
import CardInfo from "@/components/CardInfo/CardInfo";
import BannerSection from "@/components/BannerSection/BannerSection";
import CardInfoImage from "@/components/CardInfoImage/CardInfoImage";
import BannerSectionSimple from "@/components/BannerSectionSimple/BannerSectionSimple";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import WhatsappButton from "@/components/WhatsappButton/WhatsappButton";

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
  useEffect(() => {
    AOS.init({
      once: false, // anima toda vez que entra na tela
      mirror: false, // não anima ao sair
      offset: 0, // anima exatamente quando toca a viewport
    });
  }, []);

  return (
    <div className="">
      <Header />
      <BannerSectionFull buttonLink="https://api.whatsapp.com/send?phone=5511982558477&text=Olá! Eu gostaria de fazer um orçamento." />
      <Title
        text="Serviços que"
        coloredText=" Oferecemos"
        description="Criamos soluções digitais completas para marcas que querem se destacar, vender mais e construir autoridade no online."
      />
      <CardInfo
        items={[
          {
            title: "Websites & Landing Pages",
            description:
              "Interfaces rápidas, responsivas e estrategicamente pensadas para transformar visitantes em clientes.",
            icon: <FiLayout className="cardInfo__icon" />,
          },
          {
            title: "Identidade Visual",
            description:
              "Construímos identidades visuais que comunicam valor, posicionamento e profissionalismo, capturando a essência do seu negócio.",
            icon: <MdOutlinePalette className="cardInfo__icon" />,
          },
          {
            title: "Criativos & Social Media",
            description:
              "Criativos estratégicos para redes sociais e campanhas, pensados para aumentar engajamento, fortalecer a marca e gerar conversões.",
            icon: <HiOutlineLightningBolt className="cardInfo__icon" />,
          },
          {
            title: "Lançamentos Visuais",
            description:
              "Tudo o que você precisa para um lançamento visualmente impecável, coerente com a marca e preparado para performar do início ao fim.",
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
          "Sua marca é sua digital no mundo. Uma identidade forte cria reconhecimento instantâneo e confiança."
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
        buttonLink="https://api.whatsapp.com/send?phone=5511982558477&text=Olá! Eu gostaria de fazer um orçamento."
      />
      <Footer />
      <WhatsappButton />
    </div>
  );
}
