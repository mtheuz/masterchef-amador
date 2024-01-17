import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "/public/logo.png";

function SectionPromotion() {
  return (
    <section className="h-sectionHome-height w-full bg-yellow-primary">
      <Container className="flex flex-col h-full justify-center items-center">
        <h1 className="font-bold text-6xl mt-20 mb-10 text-white">
          Venha embarcar nessa experiência!
        </h1>
        <div className="flex flex-col items-center w-widhtCard h-heightCard bg-white rounded-2xl p-8 shadow-2xl">
          <Image className="h-20 w-20" src={logo} alt="logo" />
          <div className="flex flex-col items-center mt-8">
            <h3 className="text-xl">
              De <span className="line-through text-4xl">R$ 240</span> por
            </h3>
            <h3 className="text-xl">
              3x <span className="text-4xl">R$ 50</span>
            </h3>
            <h3>
                Á Vista R$ 150
            </h3>
            <ul className="text-sm">
              <li>Aulas Presenciais</li>
              <li>Instrutores Qualificados</li>
              <li>Aprendizado Prático em Cozinha</li>
              <li>Material Didático Abrangente</li>
              <li>Experiências Práticas em Restaurantes</li>
  
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionPromotion;
