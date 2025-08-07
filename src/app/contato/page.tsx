import { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contato | Fale com António Yosica',
  description: 'Entre em contato com António Yosica para transformar sua marca pessoal e acelerar seu negócio digital. Consultoria personalizada e resultados garantidos.',
  keywords: 'contato António Yosica, consultoria SEO, orçamento personalizado',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  )
}
