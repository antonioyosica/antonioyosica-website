'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, BookOpen, Mic, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const workOptions = [
  {
    icon: Users,
    title: 'Consultoria 1:1',
    description: 'Trabalhe diretamente comigo para transformar sua marca pessoal e negócio.',
    features: ['Estratégia personalizada', 'Implementação guiada', 'Resultados garantidos'],
    cta: 'Agendar Conversa',
    link: '/contato',
    popular: true
  },
  {
    icon: BookOpen,
    title: 'LEE Club',
    description: 'Comunidade exclusiva para aplicar o método LEE com outros empreendedores.',
    features: ['Networking qualificado', 'Conteúdo exclusivo', 'Mentorias em grupo'],
    cta: 'Conhecer o Club',
    link: '/ecossistema/lee-club',
    popular: false
  },
  {
    icon: Mic,
    title: 'Palestras & Workshops',
    description: 'Leve o método LEE para sua empresa ou evento com palestras impactantes.',
    features: ['Conteúdo customizado', 'Experiência interativa', 'Resultados práticos'],
    cta: 'Solicitar Palestra',
    link: '/contato',
    popular: false
  }
]

export default function WorkWithMe() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Trabalhe <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Comigo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diferentes formas de aplicarmos o método LEE e transformarmos sua presença digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {workOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-6 z-10 bg-brand-orange">
                  Mais Popular
                </Badge>
              )}
              
              <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                option.popular ? 'border-brand-orange shadow-lg scale-105' : ''
              }`}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-cream rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{option.title}</CardTitle>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-brand-orange mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${option.popular ? 'bg-brand-orange hover:bg-brand-orange/90' : ''}`}
                    variant={option.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href={option.link}>
                      {option.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-orange to-brand-cream rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Não tem certeza qual opção é ideal?</h3>
            <p className="text-lg opacity-90 mb-6">
              Vamos conversar! Posso te ajudar a escolher o melhor caminho para seus objetivos.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">Agendar Conversa Gratuita</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
