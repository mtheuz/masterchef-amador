import Image from 'next/image'
import Header from './component/Header'
import SectionHome from './component/SectionHome'
import SectionSecond from './component/SectionSecond'
import SectionPromotion from './component/SectionPromotion'
import SectionPayament from './component/SectionPayament'

export default function Home() {
  return (
    <main>
      <Header/>
      <SectionHome/>
      <SectionSecond/>
      <SectionPromotion/>
      <SectionPayament/>
    </main>
  )
}
