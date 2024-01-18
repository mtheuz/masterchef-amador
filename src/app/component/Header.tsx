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
    <header className='flex h-20 w-full bg-yellow-primary items-center fixed  bg-opacity-95 border-b-2 border-b-white z-10'>
        <Container className='flex items-center justify-between'>
          <Link href="/" className='flex flex-row items-center'>
              <Image src={logo} className='h-20 w-20' alt={'logo'}/>
              <h1 className='text-white font-bold text-base'>MasterChef Amador</h1>
          </Link>
          <nav className='flex gap-8 text-white '>
          <Link className='px-4 py-2 rounded-full hover:bg-white/90 hover:text-yellow-primary transition ease-in-out delay-200 duration-200' href={'/'}>Início</Link>
          <Link className='px-4 py-2 rounded-full hover:bg-white/90 hover:text-yellow-primary transition ease-in-out delay-200 duration-200' href={'#sectiondSecond'}>Pra quem é o curso?</Link>
          <Link className='px-4 py-2 rounded-full hover:bg-white/90 hover:text-yellow-primary transition ease-in-out delay-200 duration-200' href={'#sectionPromotional'}>Preços promocionais</Link>
          <Link className='px-4 py-2 rounded-full hover:bg-white/90 hover:text-yellow-primary transition ease-in-out delay-200 duration-200' href={'#'}>Sobre nós</Link>
         
          </nav>
        </Container>

    </header>
  )
}

export default Header