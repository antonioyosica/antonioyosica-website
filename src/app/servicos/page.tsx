import { Metadata } from 'next'
import ServicesSection from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Serviços Premium | SEO, Marca Pessoal e Desenvolvimento Web',
  description: 'Conheça os serviços premium de António Yosica: SEO Estratégico, Consultoria em Marca Pessoal, Produtos Digitais, Desenvolvimento Web e Mentoria.',
  keywords: 'serviços SEO, consultoria marca pessoal, desenvolvimento web, mentoria empreendedores',
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
    </div>
  )
}
