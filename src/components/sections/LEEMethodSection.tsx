'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Search, Trophy, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const methodSteps = [
  {
    icon: Brain,
    title: 'Lembrado',
    description: 'Crie uma marca pessoal memorável que fica gravada na mente do seu público-alvo.',
    color: 'from-brand-orange to-brand-cream',
    features: ['Storytelling autêntico', 'Identidade visual única', 'Posicionamento estratégico']
  },
  {
    icon: Search,
    title: 'Encontrado',
    description: 'Seja facilmente descoberto através de estratégias avançadas de SEO e marketing digital.',
    color: 'from-brand-cream to-brand-orange',
    features: ['SEO técnico e de conteúdo', 'Presença digital otimizada', 'Autoridade online']
  },
  {
    icon: Trophy,
    title: 'Escolhido',
    description: 'Transforme visitantes em clientes através de estratégias de conversão comprovadas.',
    color: 'from-brand-orange to-brand-cream',
    features: ['Funil de vendas otimizado', 'Prova social estratégica', 'Experiência excepcional']
  }
]

export default function LEEMethodSection() {
  return (
    <section id="lee-method" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            O Método <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">LEE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Uma metodologia revolucionária que transforma profissionais em autoridades reconhecidas 
            no mercado digital. Mais de 500 casos de sucesso comprovam a eficácia do método.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {methodSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
          className="bg-gradient-to-r from-brand-orange to-brand-cream rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Pronto para aplicar o Método LEE?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já transformaram suas carreiras 
            com estratégias comprovadas e resultados mensuráveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="#contact" className="flex items-center">
                Agendar Consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-brand-orange">
              Ver Casos de Sucesso
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
