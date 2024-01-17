"use client";
import React, { useRef, useEffect } from "react";
import Container from "./Container";
import Image from "next/image";
import chefBro from "/public/Chef-bro.png";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

gsap.registerPlugin(ScrollTrigger);

function SectionHome() {
  const TitleRef = useRef(null);
  const ImagePrincipalRef = useRef(null);
  const TextHomeRef = useRef(null);

  useEffect(() => {
    const Title = TitleRef.current;
    const ImagePrincipal = ImagePrincipalRef.current;
    const TextHome = TextHomeRef.current;
    gsap.fromTo(
      Title,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 100,
        y: 0,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      ImagePrincipal,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
      }
    );
    gsap.fromTo(
      TextHome,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
      }
    );
  });

  return (
    <section className="h-sectionHome-height bg-yellow-primary ">
      <Container>
        <h1
          className="text-center text-white/70 font-bold text-4xl pt-24 opacity-0"
          ref={TitleRef}
        >
          Curso focado em gastronomia e cunilária
        </h1>
        <div className="flex flex-row items-center justify-between">
          <Image
            className="h-heightChefBro w-widhtChefBro opacity-0"
            src={chefBro}
            alt="chef-bro"
            ref={ImagePrincipalRef}
          />
          <div ref={TextHomeRef} className="opacity-0">
            <p className="text-white text-5xl font-bold mb-10">
              Transforme ingredientes simples em obras-primas culinárias!
              <span className="text-black">
                Descubra o chef que existe em você.
              </span>
            </p>
            <Button
              className="bg-white text-yellow-primary"
              nome="Matricule-se"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionHome;
