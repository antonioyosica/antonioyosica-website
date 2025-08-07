import { Metadata } from 'next'
import LEEMethodSection from '@/components/sections/LEEMethodSection'

export const metadata: Metadata = {
  title: 'Método LEE | Lembrado, Encontrado e Escolhido',
  description: 'Descubra o método LEE criado por António Yosica. Uma metodologia revolucionária para transformar profissionais em autoridades reconhecidas no mercado digital.',
  keywords: 'método LEE, Lembrado Encontrado Escolhido, metodologia marketing digital, autoridade online',
}

export default function MetodoLEEPage() {
  return (
    <div className="pt-20">
      <LEEMethodSection />
    </div>
  )
}
