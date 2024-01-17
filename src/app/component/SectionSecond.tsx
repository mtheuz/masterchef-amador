import Image from "next/image";
import Container from "./Container";
import React from "react";
import cookingBro from "/public/Cooking-bro.png";

function SectionSecond() {
  return (
    <Container>
      <section className="w-full h-sectionHome-height" id="sectiondSecond">
        <h1 className="text-7xl text-center font-bold mt-20">
          Para quem é o curso
        </h1>
        <div className="flex flex-row ">
          <div className="max-w-widhtText  w-full space-y-6 mt-[14rem]">
            <h2 className="text-yellow-primary font-extrabold text-xl ">
              Descubra o Sabor da Experiência Culinária:
              <br /> Curso para Todos os Níveis!
            </h2>
            <p className="font-medium text-xl">
              Se você é um <span className="font-extrabold text-black/70">iniciante</span> ansioso para explorar os
              segredos da cozinha ou um cozinheiro <span  className="font-extrabold text-black/70">experiente</span>{" "}
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
          />
        </div>
      </section>
    </Container>
  );
}

export default SectionSecond;
