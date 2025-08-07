'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, User, Smartphone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const featuredServices = [
  {
    icon: Search,
    title: 'SEO Estratégico',
    description: 'Domine os resultados de busca com estratégias avançadas de SEO técnico e de conteúdo.',
    features: ['Auditoria completa', 'Estratégia de palavras-chave', 'Link building premium'],
    price: 'A partir de €2.500',
    href: '/servicos/seo-estrategico',
    popular: true
  },
  {
    icon: User,
    title: 'Marca Pessoal',
    description: 'Construa uma marca pessoal autêntica que se destaque no mercado digital.',
    features: ['Posicionamento estratégico', 'Identidade visual', 'Estratégia de conteúdo'],
    price: 'A partir de €1.800',
    href: '/servicos/marca-pessoal',
    popular: false
  },
  {
    icon: Smartphone,
    title: 'Produtos Digitais',
    description: 'Crie produtos digitais que geram receita recorrente para seu negócio.',
    features: ['Estratégia de produto', 'Funil de vendas', 'Automação de marketing'],
    price: 'A partir de €3.200',
    href: '/servicos/produtos-digitais',
    popular: false
  }
]

export default function FeaturedServices() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Serviços <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções personalizadas para transformar sua presença digital e acelerar 
            o crescimento do seu negócio com estratégias comprovadas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-6 z-10 bg-brand-orange">
                  Mais Popular
                </Badge>
              )}
              
              <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                service.popular ? 'border-brand-orange shadow-lg' : ''
              }`}>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand-orange to-brand-cream flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-brand-orange mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4">
                    <div className="text-2xl font-bold text-brand-orange mb-4">{service.price}</div>
                    <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" asChild>
                      <Link href={service.href}>
                        Saber Mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
          className="text-center"
        >
          <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white" asChild>
            <Link href="/servicos">Ver Todos os Serviços</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
