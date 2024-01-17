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
          <nav className='flex gap-10 text-white '>
          <Link className='hover:text-white' href={'/'}>Início</Link>
          <Link className='hover:text-white' href={'#sectiondSecond'}>Pra quem é o curso?</Link>
          <Link className='hover:text-white' href={'#sectionPromotional'}>Preços promocionais</Link>
          <Link className='hover:text-white' href={'#'}>Sobre nós</Link>
         
          </nav>
        </Container>

    </header>
  )
}

export default Header