"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import chefBro from "/public/Chef-bro.png";


function SectionHome() {
  return (
    <section className="h-sectionHome-height bg-yellow-primary border-t-2 border-t-white">
      <Container>
        <h1 className="text-center text-white/70 font-bold text-4xl pt-24">
          Curso focado em gastronomia e cunilária
        </h1>
        <div className="flex flex-row items-center justify-between">
          <Image
            className="h-heightChefBro w-widhtChefBro"
            src={chefBro}
            alt="chef-bro"
          />
          <div>
            <p className="text-white text-5xl font-bold">
              Transforme ingredientes simples em obras-primas culinárias!
              <span className="text-black">
                Descubra o chef que existe em você.
              </span>
            </p>
            <button className="px-16 py-4 mt-10 bg-white text-yellow-primary rounded-3xl font-bold ">
              Inscreva-se
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionHome;
