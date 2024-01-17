import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "/public/logo.png";
import Button from "./Button";
import { FaCheckCircle } from "react-icons/fa";

function SectionPromotion() {
  return (
    <section className="h-sectionHome-height pb-20 w-full bg-yellow-primary " id="sectionPromotional">
      <Container className="flex flex-col h-full justify-center items-center">
        <h1 className="font-bold text-6xl mt-20 mb-10 text-white">
          Venha embarcar nessa <span className="text-black">experiência</span>!
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
            <ul className="text-sm mt-12">
              <li className="flex space-x-2"><FaCheckCircle /><h3>Aulas Presenciais</h3></li>
              <li className="flex space-x-2"><FaCheckCircle /><h3>Instrutores Qualificados</h3></li>
              <li className="flex space-x-2"><FaCheckCircle /><h3>Aprendizado Prático em Cozinha</h3></li>
              <li className="flex space-x-2"><FaCheckCircle /><h3>Material Didático Abrangente</h3></li>
              <li className="flex space-x-2"><FaCheckCircle /><h3>Experiências Práticas em Restaurantes</h3></li>
            </ul>
            <Button className="bg-brown-button text-white mt-12" nome='Matricule-se'/>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionPromotion;
