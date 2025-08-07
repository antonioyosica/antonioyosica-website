import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Code, Smartphone, Zap, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Desenvolvimento Web | Sites Modernos e Otimizados',
  description: 'Desenvolvimento de websites e aplicações web por António Yosica. Design responsivo, performance otimizada e SEO técnico.',
  keywords: 'desenvolvimento web, website, aplicação web, design responsivo, performance, SEO técnico',
}

const technologies = [
  {
    icon: Code,
    title: 'Tecnologias Modernas',
    description: 'React, Next.js, TypeScript e outras tecnologias de ponta para máxima performance.'
  },
  {
    icon: Smartphone,
    title: 'Design Responsivo',
    description: 'Websites que funcionam perfeitamente em todos os dispositivos e tamanhos de tela.'
  },
  {
    icon: Zap,
    title: 'Performance Otimizada',
    description: 'Sites ultra-rápidos com pontuação 90+ no Google PageSpeed Insights.'
  },
  {
    icon: Shield,
    title: 'Segurança Avançada',
    description: 'Implementação de melhores práticas de segurança e proteção contra ameaças.'
  }
]

const features = [
  'Design responsivo e mobile-first',
  'SEO técnico otimizado',
  'Performance superior (90+ PageSpeed)',
  'Integração com CMS',
  'E-commerce completo',
  'Automação de marketing',
  'Analytics e tracking',
  'Manutenção e suporte'
]

const projectTypes = [
  {
    type: 'Website Institucional',
    description: 'Sites corporativos profissionais que transmitem credibilidade e convertem visitantes.',
    price: 'A partir de €2.500',
    timeline: '2-4 semanas'
  },
  {
    type: 'E-commerce',
    description: 'Lojas online completas com sistema de pagamento, gestão de produtos e pedidos.',
    price: 'A partir de €4.500',
    timeline: '4-8 semanas'
  },
  {
    type: 'Landing Pages',
    description: 'Páginas de conversão otimizadas para campanhas de marketing e geração de leads.',
    price: 'A partir de €800',
    timeline: '1-2 semanas'
  },
  {
    type: 'Aplicação Web',
    description: 'Sistemas web personalizados para automatizar processos e melhorar produtividade.',
    price: 'A partir de €8.500',
    timeline: '8-16 semanas'
  }
]

const packages = [
  {
    name: 'Website Essencial',
    price: '€2.500',
    description: 'Ideal para pequenas empresas e profissionais liberais',
    features: [
      'Design responsivo profissional',
      'Até 5 páginas',
      'SEO básico otimizado',
      'Formulário de contato',
      'Integração Google Analytics',
      'SSL e hospedagem (1 ano)',
      'Suporte por 3 meses'
    ],
    popular: false
  },
  {
    name: 'Website Profissional',
    price: '€4.500',
    description: 'Para empresas que querem se destacar online',
    features: [
      'Design personalizado premium',
      'Até 10 páginas',
      'SEO avançado',
      'Blog integrado',
      'Área de membros',
      'Integração CRM',
      'Performance otimizada',
      'SSL e hospedagem (1 ano)',
      'Suporte por 6 meses'
    ],
    popular: true
  },
  {
    name: 'Solução Completa',
    price: '€8.500',
    description: 'Solução completa para empresas em crescimento',
    features: [
      'Design e desenvolvimento custom',
      'Páginas ilimitadas',
      'E-commerce integrado',
      'Sistema de gestão completo',
      'Automação de marketing',
      'Integrações avançadas',
      'App mobile (PWA)',
      'SSL e hospedagem (2 anos)',
      'Suporte por 12 meses'
    ],
    popular: false
  }
]

export default function DesenvolvimentoWebPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Desenvolvimento Premium</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Web & Software <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Desenvolvimento de websites e aplicações web modernas, rápidas e otimizadas para conversão. 
                Tecnologia de ponta com foco em resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  Ver Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/web-development-code.png"
                alt="Desenvolvimento Web"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tecnologias e Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Utilizamos as melhores tecnologias do mercado para criar soluções robustas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-cream rounded-lg flex items-center justify-center mb-4">
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                O que está incluído em todos os projetos
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Cada projeto é desenvolvido com atenção aos detalhes e foco na experiência do usuário.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tipos de Projetos</h2>
            <p className="text-xl text-muted-foreground">
              Desenvolvemos soluções personalizadas para cada necessidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.type}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-brand-orange">{project.price}</span>
                    <Badge variant="secondary">{project.timeline}</Badge>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contato">Solicitar Orçamento</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pacotes de Desenvolvimento</h2>
            <p className="text-xl text-muted-foreground">
              Soluções completas para diferentes necessidades e orçamentos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-brand-orange shadow-xl scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-orange">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-brand-orange mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-brand-orange hover:bg-brand-orange/90' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/contato">Escolher Pacote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
