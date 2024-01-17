import React from "react";
import Container from "./Container";

function SectionPromotion() {
  return (
    <section className="h-sectionHome-height w-full bg-yellow-primary">
      <Container className="flex flex-col h-full justify-center items-center">
        <h1 className="font-bold text-6xl mt-20 mb-10">
          Venha embarcar nessa experiência!
        </h1>
        <div className="w-widhtCard h-heightCard bg-white rounded-2xl"></div>
      </Container>
    </section>
  );
}

export default SectionPromotion;
