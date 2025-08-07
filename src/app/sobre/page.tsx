import { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'

export const metadata: Metadata = {
  title: 'Sobre António Yosica | História, Missão e Valores',
  description: 'Conheça a história de António Yosica, empreendedor angolano, especialista em SEO e criador do método LEE. Descubra sua missão, visão e valores.',
  keywords: 'António Yosica biografia, empreendedor angolano, história pessoal, missão visão valores',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  )
}
