"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import chefBro from "/public/Chef-bro.png";
import Button from "./Button";


function SectionHome() {
  return (
    <section className="h-sectionHome-height bg-yellow-primary ">
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
            <Button className="bg-white text-yellow-primary" nome='Matricule-se'/>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionHome;
