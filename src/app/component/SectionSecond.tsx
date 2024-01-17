"use client";
import Image from "next/image";
import Container from "./Container";
import React, { useRef, useEffect } from "react";
import cookingBro from "/public/Cooking-bro.png";
import gsap from "gsap";
function SectionSecond() {
  const TiltlePrincipalRef = useRef(null);
  const SectionRef = useRef(null);
  const TextRef = useRef(null);
  const ImageChefRef = useRef(null);
  useEffect(() => {
    const TitlePrincipal = TiltlePrincipalRef.current;
    const Section = SectionRef.current;
    const Text = TextRef.current;
    const ImageChef = ImageChefRef.current;
    gsap.fromTo(
      TitlePrincipal,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 100,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: Section,
          start: "0px center",
          end: "80%",
          markers: true,
        },
      }
    );
    gsap.fromTo(
      Text,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: Section,
          start: "0px center",
          end: "80%",
          markers: true,
        },
      }
    );
    gsap.fromTo(
      ImageChef,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: Section,
          start: "0px center",
          end: "80%",
          markers: true,
        },
      }
    );
  });

  return (
    <Container>
      <section
        className="w-full h-sectionHome-height"
        id="sectiondSecond"
        ref={SectionRef}
      >
        <h1
          className="text-7xl text-center font-bold mt-20 opacity-0"
          ref={TiltlePrincipalRef}
        >
          Para quem é o curso
        </h1>
        <div className="flex flex-row ">
          <div
            className="max-w-widhtText  w-full space-y-6 mt-[14rem] opacity-0 "
            ref={TextRef}
          >
            <h2 className="text-yellow-primary font-extrabold text-xl ">
              Descubra o Sabor da Experiência Culinária:
              <br /> Curso para Todos os Níveis!
            </h2>
            <p className="font-medium text-xl">
              Se você é um{" "}
              <span className="font-extrabold text-black/70">iniciante</span>{" "}
              ansioso para explorar os segredos da cozinha ou um cozinheiro{" "}
              <span className="font-extrabold text-black/70">experiente</span>{" "}
              procurando aprimorar suas habilidades, nosso curso de culinária é
              projetado para atender a todas as faixas de habilidade. Em um
              ambiente acolhedor e envolvente, nossos instrutores dedicados
              guiarão você em uma jornada culinária, proporcionando uma
              experiência que se adapta ao seu nível de habilidade.
            </p>
          </div>
          <Image
            className="w-[632px] h-[632px] mt-[3rem]"
            src={cookingBro}
            alt="cookingBro"
            ref={ImageChefRef}
          />
        </div>
      </section>
    </Container>
  );
}

export default SectionSecond;
