import { Metadata } from 'next'
import PersonalHeroSection from '@/components/sections/PersonalHeroSection'
import AboutPreview from '@/components/sections/AboutPreview'
import LEEMethodSection from '@/components/sections/LEEMethodSection'
import FeaturedContent from '@/components/sections/FeaturedContent'
import WorkWithMe from '@/components/sections/WorkWithMe'
import NewsletterSection from '@/components/sections/NewsletterSection'

export const metadata: Metadata = {
  title: 'António Yosica | Especialista em SEO & Método LEE',
  description: 'Especialista em SEO, Engenheiro de Software e Criador do Método LEE — uma metodologia que garante que pessoas e marcas sejam lembradas, encontradas e escolhidas.',
  keywords: 'António Yosica, Especialista SEO Angola, Engenheiro de Software Angola, Método LEE, Branding Pessoal, Visibilidade Digital, Empreendedorismo Digital',
  authors: [{ name: 'António Yosica' }],
  creator: 'António Yosica',
  publisher: 'António Yosica',
  openGraph: {
    title: 'António Yosica | Especialista em SEO & Método LEE',
    description: 'Especialista em SEO, Engenheiro de Software e Criador do Método LEE — uma metodologia que garante que pessoas e marcas sejam lembradas, encontradas e escolhidas.',
    url: 'https://antonioyosica.com',
    siteName: 'António Yosica',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'António Yosica - Especialista em SEO & Método LEE',
      },
    ],
    locale: 'pt_AO',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <PersonalHeroSection />
      <AboutPreview />
      <LEEMethodSection />
      <FeaturedContent />
      <WorkWithMe />
      <NewsletterSection />
    </>
  )
}
