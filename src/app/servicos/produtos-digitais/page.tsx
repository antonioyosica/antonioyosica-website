import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Smartphone, Zap, DollarSign, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Produtos Digitais | Crie Receita Recorrente',
  description: 'Criação e lançamento de produtos digitais por António Yosica. Estratégia de produto, funil de vendas e automação de marketing.',
  keywords: 'produtos digitais, infoprodutos, curso online, ebook, receita recorrente, funil de vendas',
}

const productTypes = [
  {
    icon: Smartphone,
    title: 'Cursos Online',
    description: 'Criação de cursos digitais completos com alta taxa de conversão e engajamento.'
  },
  {
    icon: Zap,
    title: 'E-books e Guias',
    description: 'Desenvolvimento de conteúdo educacional que posiciona você como autoridade.'
  },
  {
    icon: DollarSign,
    title: 'Memberships',
    description: 'Comunidades exclusivas com conteúdo premium e receita recorrente.'
  },
  {
    icon: BarChart3,
    title: 'Ferramentas SaaS',
    description: 'Desenvolvimento de software como serviço para nichos específicos.'
  }
]

const benefits = [
  'Receita recorrente e escalável',
  'Baixo custo de produção',
  'Alcance global 24/7',
  'Posicionamento como autoridade',
  'Liberdade geográfica',
  'Margem de lucro elevada'
]

const process = [
  {
    phase: 'Descoberta',
    title: 'Pesquisa e Validação',
    description: 'Identificamos oportunidades de mercado e validamos a demanda pelo produto.',
    duration: '2-3 semanas'
  },
  {
    phase: 'Estratégia',
    title: 'Planejamento do Produto',
    description: 'Definimos estrutura, conteúdo, preço e estratégia de lançamento.',
    duration: '1-2 semanas'
  },
  {
    phase: 'Criação',
    title: 'Desenvolvimento',
    description: 'Criamos o produto digital com foco na experiência do usuário.',
    duration: '4-8 semanas'
  },
  {
    phase: 'Lançamento',
    title: 'Go-to-Market',
    description: 'Executamos a estratégia de lançamento e otimizamos as conversões.',
    duration: '2-4 semanas'
  }
]

const packages = [
  {
    name: 'Produto Digital Starter',
    price: '€3.200',
    period: 'projeto único',
    description: 'Ideal para quem quer criar seu primeiro produto digital',
    features: [
      'Pesquisa e validação de mercado',
      'Estruturação do produto',
      'Criação de e-book ou mini-curso',
      'Landing page de vendas',
      'Funil básico de vendas',
      'Estratégia de lançamento',
      '3 sessões de consultoria'
    ],
    popular: false
  },
  {
    name: 'Produto Digital Pro',
    price: '€6.500',
    period: 'projeto único',
    description: 'Para quem quer um produto digital completo e profissional',
    features: [
      'Pesquisa avançada de mercado',
      'Curso online completo',
      'Plataforma de ensino (LMS)',
      'Funil de vendas otimizado',
      'Automação de email marketing',
      'Estratégia de afiliados',
      'Suporte ao lançamento',
      '6 sessões de consultoria',
      'Suporte por 3 meses'
    ],
    popular: true
  },
  {
    name: 'Ecossistema Digital',
    price: '€12.500',
    period: 'projeto único',
    description: 'Solução completa para criar um negócio digital escalável',
    features: [
      'Múltiplos produtos digitais',
      'Plataforma completa (LMS + CRM)',
      'Programa de afiliados',
      'Automação avançada',
      'Comunidade exclusiva',
      'App mobile (opcional)',
      'Estratégia de growth hacking',
      '12 sessões de consultoria VIP',
      'Suporte por 6 meses'
    ],
    popular: false
  }
]

export default function ProdutosDigitaisPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Receita Recorrente</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Produtos <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Digitais</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Crie produtos digitais que geram receita recorrente para seu negócio. 
                Transforme seu conhecimento em um ativo digital escalável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href="/contato">
                    Criar Meu Produto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  Ver Exemplos
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/digital-products-dashboard.png"
                alt="Dashboard de Produtos Digitais"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tipos de Produtos Digitais</h2>
            <p className="text-xl text-muted-foreground">
              Criamos diversos tipos de produtos digitais adaptados ao seu nicho
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {productTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-cream rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Por que criar produtos digitais?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Os produtos digitais são a forma mais eficiente de monetizar seu conhecimento 
                e criar um negócio escalável.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Resultados Típicos</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-white">
                  <span>ROI médio no primeiro ano:</span>
                  <span className="font-bold text-2xl">500%</span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span>Tempo para break-even:</span>
                  <span className="font-bold text-2xl">3-6 meses</span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span>Margem de lucro típica:</span>
                  <span className="font-bold text-2xl">80-95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-xl text-muted-foreground">
              Uma metodologia comprovada para criar produtos digitais de sucesso
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="mx-auto mb-4 bg-brand-orange">{item.phase}</Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-brand-orange font-medium">{item.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">Pacotes de Produtos Digitais</h2>
            <p className="text-xl text-muted-foreground">
              Do primeiro produto ao ecossistema completo
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
                  <div className="text-3xl font-bold text-brand-orange mb-2">
                    {pkg.price}
                    <span className="text-sm font-normal text-muted-foreground block">{pkg.period}</span>
                  </div>
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
