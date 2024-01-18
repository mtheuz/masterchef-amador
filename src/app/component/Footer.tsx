import React from 'react'
import Container from './Container'

function Footer() {
  return (
    <section className='bg-black h-16 w-full'>
        <Container className='flex items-center justify-center h-full'>
            <h1 className=' text-white text-center '>© 2024 Matheus Mota. Todos os direitos reservados.</h1>
        </Container>
    </section>
  )
}

export default Footer