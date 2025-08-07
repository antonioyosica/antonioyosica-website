'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Heart, Target, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const values = [
  {
    icon: Heart,
    title: 'Autenticidade',
    description: 'Acredito que ser genuíno é a base de qualquer relacionamento duradouro.'
  },
  {
    icon: Target,
    title: 'Resultados',
    description: 'Foco em estratégias que geram resultados reais e mensuráveis.'
  },
  {
    icon: Zap,
    title: 'Simplicidade',
    description: 'Transformo conceitos complexos em ações simples e práticas.'
  }
]

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Mais sobre <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">mim</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Sou um empreendedor angolano apaixonado por transformar vidas através da tecnologia e do marketing digital. 
                Minha jornada começou como engenheiro de software, mas descobri minha verdadeira vocação ao ajudar pessoas 
                a serem vistas e reconhecidas no mundo digital.
              </p>
              
              <p>
                Depois de anos estudando padrões de sucesso e fracasso online, criei o <strong>Método LEE</strong> - 
                uma metodologia que já ajudou mais de 500 profissionais a se tornarem autoridades em seus nichos.
              </p>
              
              <p>
                Quando não estou trabalhando, você me encontra explorando novas tecnologias, 
                mentorando jovens empreendedores ou planejando minha próxima aventura.
              </p>
            </div>

            <Button size="lg" asChild className="bg-brand-orange hover:bg-brand-orange/90">
              <Link href="/sobre">
                Minha História Completa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Meus Valores</h3>
            
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-cream rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
