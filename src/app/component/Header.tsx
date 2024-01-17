import Image from 'next/image'
import React from 'react'
import logo from '/public/logo.png'
import Container from './Container'
import Link from 'next/link'


function Header() {
  const arrayNav = [
  'Início',
  'Pra quem é o curso?',
  'Preços promocionais',
  'Sobre nós',
]
  return (
    <header className='flex h-24 w-full bg-yellow-primary items-center '>
        <Container className='flex items-center justify-between'>
          <div className='flex flex-row items-center'>
              <Image src={logo} className='h-20 w-20' alt={'logo'}/>
              <h1 className='text-white font-bold text-base'>MasterChef Amador</h1>
          </div>
          <nav className='flex gap-10 text-white/70 '>
            {
              arrayNav.map((conteudo,index)=>(
                <Link className='hover:text-white' key={index} href={'#'}>{conteudo}</Link>
              ))
            }
          </nav>
        </Container>

    </header>
  )
}

export default Header