import React from "react";
import { twMerge } from "tailwind-merge";
interface LabelProps {
  nome: string;
  className?: string;
}

function Label({ nome, className }: LabelProps) {
    const defaultClass = " bg-gray-label h-10 py-2 px-4 rounded-2xl text-white "
    const classNameFinal = twMerge(defaultClass,className)
  return (
 
      <div className="flex flex-col">
          <h2 className="text-black text-xl mb-2 ml-2 ">{nome}</h2>
          <input className={classNameFinal} type="text" name="nome" />
      </div>
  );
}

export default Label;
