import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, User, Palette, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Consultoria em Marca Pessoal | Construa sua Autoridade',
  description: 'Consultoria especializada em marca pessoal por António Yosica. Posicionamento estratégico, identidade visual e estratégia de conteúdo.',
  keywords: 'marca pessoal, personal branding, posicionamento estratégico, identidade visual, autoridade online',
}

const benefits = [
  {
    icon: User,
    title: 'Posicionamento Estratégico',
    description: 'Defina seu nicho, proposta de valor única e como se diferenciar da concorrência.'
  },
  {
    icon: Palette,
    title: 'Identidade Visual Profissional',
    description: 'Criação de identidade visual coesa que reflete sua personalidade e valores.'
  },
  {
    icon: MessageSquare,
    title: 'Estratégia de Conteúdo',
    description: 'Planejamento de conteúdo que engaja, educa e converte sua audiência.'
  },
  {
    icon: TrendingUp,
    title: 'Crescimento da Autoridade',
    description: 'Estratégias para se tornar referência reconhecida em seu mercado.'
  }
]

const process = [
  {
    step: '01',
    title: 'Diagnóstico Completo',
    description: 'Análise da sua situação atual, objetivos e mercado de atuação.'
  },
  {
    step: '02',
    title: 'Estratégia Personalizada',
    description: 'Desenvolvimento de estratégia única baseada no seu perfil e metas.'
  },
  {
    step: '03',
    title: 'Implementação Guiada',
    description: 'Acompanhamento na execução das estratégias definidas.'
  },
  {
    step: '04',
    title: 'Otimização Contínua',
    description: 'Ajustes e melhorias baseados nos resultados obtidos.'
  }
]

const packages = [
  {
    name: 'Marca Pessoal Starter',
    price: '€1.800',
    period: 'projeto único',
    description: 'Ideal para profissionais que estão começando a construir sua marca',
    features: [
      'Diagnóstico de marca pessoal',
      'Definição de posicionamento',
      'Identidade visual básica',
      'Estratégia de conteúdo (3 meses)',
      'Otimização de perfis sociais',
      '2 sessões de mentoria'
    ],
    popular: false
  },
  {
    name: 'Marca Pessoal Pro',
    price: '€3.500',
    period: 'projeto único',
    description: 'Para profissionais que querem uma marca pessoal completa e impactante',
    features: [
      'Diagnóstico completo de marca',
      'Posicionamento estratégico avançado',
      'Identidade visual premium',
      'Estratégia de conteúdo (6 meses)',
      'Website/landing page pessoal',
      'Otimização SEO do nome',
      '4 sessões de mentoria',
      'Suporte por 3 meses'
    ],
    popular: true
  },
  {
    name: 'Marca Pessoal VIP',
    price: '€6.500',
    period: 'projeto único',
    description: 'Solução premium para executivos e empreendedores de alto nível',
    features: [
      'Diagnóstico executivo completo',
      'Posicionamento de liderança',
      'Identidade visual executiva',
      'Estratégia de conteúdo (12 meses)',
      'Website profissional completo',
      'Estratégia de PR e mídia',
      'Preparação para palestras',
      '8 sessões de mentoria VIP',
      'Suporte por 6 meses'
    ],
    popular: false
  }
]

export default function MarcaPessoalPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Consultoria Premium</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Consultoria em <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Marca Pessoal</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Construa uma marca pessoal autêntica e poderosa que se destaque no mercado digital. 
                Torne-se uma autoridade reconhecida em seu nicho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href="/contato">
                    Começar Agora
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
                src="/personal-brand-strategy.png"
                alt="Estratégia de Marca Pessoal"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Por que investir na sua marca pessoal?</h2>
            <p className="text-xl text-muted-foreground">
              Uma marca pessoal forte é o ativo mais valioso do profissional moderno
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-cream rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-xl text-muted-foreground">
              Uma metodologia testada e comprovada para construir marcas pessoais de sucesso
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-cream rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
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
            <h2 className="text-3xl font-bold mb-4">Pacotes de Marca Pessoal</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o pacote ideal para seu momento profissional
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
