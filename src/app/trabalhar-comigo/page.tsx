import { Metadata } from 'next'
import WorkWithMe from '@/components/sections/WorkWithMe'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Trabalhar Comigo | António Yosica',
  description: 'Descubra as diferentes formas de trabalharmos juntos para transformar sua presença digital com o método LEE.',
  keywords: 'trabalhar com António Yosica, consultoria, LEE Club, palestras, workshops',
}

export default function TrabalharComigoPage() {
  return (
    <div className="pt-20">
      <WorkWithMe />
      <ContactSection />
    </div>
  )
}
