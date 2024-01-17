import React from "react";
import Container from "./Container";
import Label from "./Label";
import { FaCreditCard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import logo from "/public/logo.png";
import Image from "next/image";

function SectionPayament() {
  return (
    <section className="h-sectionHome-height" id='sectionPayment'>
      <Container className="flex flex-col">
        <h1 className="m-24 text-6xl font-bold text-center">
          Complete sua matrícula
        </h1>
        <div className="flex flex-row justify-between">
          <div>
            <form className="w-[613px] space-y-8">
              <Label className="w-full" nome="Nome Completo" />
              <div className="flex flex-row justify-between">
                <Label
                  className="w-[290px]  focus:border-white"
                  nome="E-mail"
                />
                <Label className="w-[290px]" nome="Telefone" />
              </div>
            </form>
            <div className="flex space-x-10 mt-16">
              <a className="flex flex-col p-4  h-34 w-56 bg-yellow-primary rounded-xl space-y-4 cursor-pointer">
                <FaCreditCard className="mt-5" size={25} color="white" />
                <div>
                  <h1 className="text-white font-bold text-base">
                    Cartão de crédito
                  </h1>
                  <p className="text-white  text-base">Até 3x</p>
                </div>
              </a>
              <a className="flex flex-col p-4  h-34 w-56 bg-yellow-primary rounded-xl space-y-4 cursor-pointer">
                <FaPix className="mt-5" size={25} color="white" />
                <div>
                  <h1 className="text-white font-bold text-base">Pix</h1>
                  <p className="text-white  text-base">Á vista</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-widhtPayment w-full space-y-7">
            <h1 className="font-bold text-yellow-primary text-2xl">Resumo</h1>
            <div className="flex gap-28">
              <h2 className="font-bold text-yellow-primary text-2xl">TOTAL</h2>
              <div className=" text-yellow-primary ">
                <p className="font-bold text-2xl">3X de R$ 50,00</p>
                <p className="text-base font-medium">Á vista de R$ 150,00</p>
              </div>
            </div>
            <div className="flex flex-col p-6   w-[365px] h-66 bg-yellow-primary rounded-xl space-y-4 cursor-pointer ">
            <Image className=" h-20 w-20 text-center mx-auto" src={logo} alt='logo'/>
              <ul className="text-sm mt-12 text-white">
                <li className="flex space-x-2">
                  <FaCheckCircle />
                  <h3>Estude por 6 meses</h3>
                </li>
                <li className="flex space-x-2">
                  <FaCheckCircle />
                  <h3>Atividades práticas</h3>
                </li>
                <li className="flex space-x-2">
                  <FaCheckCircle />
                  <h3>Certificado</h3>
                </li>
              </ul>
              <Button className="text-white bg-brown-button" nome="Confirmar Pagamento"/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionPayament;
