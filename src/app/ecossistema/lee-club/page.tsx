import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Users, Crown, Calendar, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'LEE Club | Comunidade Exclusiva de Empreendedores',
  description: 'Junte-se ao LEE Club, a comunidade exclusiva de empreendedores que aplicam o método LEE. Networking qualificado, conteúdo premium e mentorias em grupo.',
  keywords: 'LEE Club, comunidade empreendedores, networking, método LEE, mentoria grupo',
}

const benefits = [
  {
    icon: Users,
    title: 'Networking Qualificado',
    description: 'Conecte-se com empreendedores de alto nível que compartilham os mesmos valores e objetivos.'
  },
  {
    icon: Crown,
    title: 'Conteúdo Exclusivo',
    description: 'Acesso a materiais premium, casos de estudo e estratégias não disponíveis publicamente.'
  },
  {
    icon: Calendar,
    title: 'Eventos Mensais',
    description: 'Workshops, masterclasses e encontros presenciais com especialistas renomados.'
  },
  {
    icon: MessageSquare,
    title: 'Mentorias em Grupo',
    description: 'Sessões de mentoria coletiva com António Yosica e outros mentores especialistas.'
  }
]

const memberStats = [
  { number: '500+', label: 'Membros Ativos' },
  { number: '50+', label: 'Países Representados' },
  { number: '€2M+', label: 'Receita Gerada pelos Membros' },
  { number: '95%', label: 'Taxa de Satisfação' }
]

const membershipTiers = [
  {
    name: 'LEE Member',
    price: '€97',
    period: 'por mês',
    description: 'Acesso básico à comunidade e conteúdos essenciais',
    features: [
      'Acesso ao grupo privado',
      'Conteúdo semanal exclusivo',
      'Networking com outros membros',
      'Biblioteca de recursos',
      'Suporte da comunidade'
    ],
    popular: false
  },
  {
    name: 'LEE Pro',
    price: '€197',
    period: 'por mês',
    description: 'Experiência completa com acesso a todos os benefícios',
    features: [
      'Tudo do LEE Member',
      'Mentoria mensal em grupo',
      'Acesso aos eventos ao vivo',
      'Materiais de implementação',
      'Suporte prioritário',
      'Acesso ao arquivo completo'
    ],
    popular: true
  },
  {
    name: 'LEE VIP',
    price: '€497',
    period: 'por mês',
    description: 'Experiência premium com acesso direto ao António',
    features: [
      'Tudo do LEE Pro',
      'Sessão 1:1 mensal com António',
      'Acesso VIP aos eventos',
      'Revisão personalizada de estratégias',
      'Networking exclusivo VIP',
      'Convites para jantares privados'
    ],
    popular: false
  }
]

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Empreendedora Digital',
    content: 'O LEE Club transformou minha visão de negócios. O networking aqui é incomparável.',
    result: 'Aumentou receita em 300%'
  },
  {
    name: 'João Silva',
    role: 'CEO, TechStart',
    content: 'As conexões que fiz no LEE Club resultaram em parcerias estratégicas valiosas.',
    result: '3 parcerias estratégicas'
  },
  {
    name: 'Ana Costa',
    role: 'Consultora',
    content: 'O conteúdo exclusivo e as mentorias me ajudaram a escalar meu negócio rapidamente.',
    result: 'Escalou para 6 dígitos'
  }
]

export default function LEEClubPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Comunidade Exclusiva</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                LEE <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Club</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A comunidade exclusiva para empreendedores que querem aplicar o método LEE 
                e acelerar seus resultados através de networking qualificado e conteúdo premium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href="/contato">
                    Candidatar-se Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  Ver Depoimentos
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/lee-club-community.png"
                alt="LEE Club Community"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">LEE Club em Números</h2>
          <p className="text-xl text-white/90 mb-12">
            Uma comunidade próspera de empreendedores de sucesso
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {memberStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Por que fazer parte do LEE Club?</h2>
            <p className="text-xl text-muted-foreground">
              Benefícios exclusivos para acelerar seu crescimento empresarial
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

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">O que dizem nossos membros</h2>
            <p className="text-xl text-muted-foreground">
              Resultados reais de empreendedores que fazem parte do LEE Club
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-brand-orange">{testimonial.result}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Níveis de Membership</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o nível de acesso ideal para suas necessidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-brand-orange shadow-xl scale-105' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-orange">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-brand-orange mb-2">
                    {tier.price}
                    <span className="text-sm font-normal text-muted-foreground">/{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-brand-orange hover:bg-brand-orange/90' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/contato">Candidatar-se</Link>
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
