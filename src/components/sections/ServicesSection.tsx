'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, User, Smartphone, Code, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Search,
    title: 'SEO Estratégico',
    description: 'Estratégias avançadas de SEO para dominar os resultados de busca e aumentar sua visibilidade online.',
    features: ['Auditoria técnica completa', 'Estratégia de palavras-chave', 'Link building premium', 'Relatórios mensais'],
    price: 'A partir de €2.500',
    popular: true
  },
  {
    icon: User,
    title: 'Consultoria em Marca Pessoal',
    description: 'Construa uma marca pessoal autêntica e poderosa que se destaque no mercado digital.',
    features: ['Posicionamento estratégico', 'Identidade visual', 'Estratégia de conteúdo', 'Presença digital'],
    price: 'A partir de €1.800',
    popular: false
  },
  {
    icon: Smartphone,
    title: 'Produtos Digitais',
    description: 'Criação e lançamento de produtos digitais que geram receita recorrente para seu negócio.',
    features: ['Estratégia de produto', 'Funil de vendas', 'Automação de marketing', 'Análise de performance'],
    price: 'A partir de €3.200',
    popular: false
  },
  {
    icon: Code,
    title: 'Web & Software Development',
    description: 'Desenvolvimento de websites e aplicações web modernas, rápidas e otimizadas para conversão.',
    features: ['Design responsivo', 'Performance otimizada', 'SEO técnico', 'Manutenção contínua'],
    price: 'A partir de €4.500',
    popular: false
  },
  {
    icon: Users,
    title: 'Mentoria para Empreendedores',
    description: 'Mentoria personalizada para empreendedores que querem acelerar o crescimento de seus negócios.',
    features: ['Sessões 1:1', 'Plano de ação personalizado', 'Suporte contínuo', 'Rede de contatos'],
    price: 'A partir de €800/mês',
    popular: false
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-6 z-10 bg-gradient-to-r from-brand-orange to-brand-cream">
                  Mais Popular
                </Badge>
              )}
              
              <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                service.popular ? 'border-brand-orange dark:border-brand-orange shadow-lg' : ''
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
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4">
                    <div className="text-2xl font-bold text-brand-orange mb-4">{service.price}</div>
                    <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                      <Link href="#contact" className="flex items-center">
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
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Precisa de uma solução personalizada? Vamos conversar sobre suas necessidades específicas.
          </p>
          <Button size="lg" variant="outline">
            <Link href="#contact">Solicitar Orçamento Personalizado</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
