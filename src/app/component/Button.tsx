import React from 'react'
import { twMerge } from 'tailwind-merge'

interface buttonProps{
    nome: string,
    className ?: string
}

function Button({nome, className}: buttonProps) {
    const defaultClass = "px-16 py-4  rounded-3xl font-bold "
    const classNameFinal = twMerge(defaultClass,className)
    
  return (
    <a href='#sectionPayment' className={classNameFinal}>
    {nome}
  </a>
  )
}

export default Button