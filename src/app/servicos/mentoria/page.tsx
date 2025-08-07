import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Users, Target, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mentoria para Empreendedores | Acelere seu Crescimento',
  description: 'Mentoria personalizada para empreendedores por António Yosica. Sessões 1:1, plano de ação personalizado e suporte contínuo.',
  keywords: 'mentoria empreendedores, coaching empresarial, consultoria negócios, aceleração crescimento',
}

const mentorshipAreas = [
  {
    icon: Target,
    title: 'Estratégia de Negócio',
    description: 'Definição de objetivos, planejamento estratégico e roadmap de crescimento.'
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estratégias de marketing digital, SEO, redes sociais e geração de leads.'
  },
  {
    icon: Users,
    title: 'Liderança e Gestão',
    description: 'Desenvolvimento de habilidades de liderança e gestão de equipes.'
  },
  {
    icon: Calendar,
    title: 'Produtividade',
    description: 'Otimização de processos, gestão do tempo e aumento da produtividade.'
  }
]

const benefits = [
  'Aceleração do crescimento do negócio',
  'Redução de erros e custos desnecessários',
  'Networking qualificado',
  'Accountability e disciplina',
  'Visão estratégica de longo prazo',
  'Desenvolvimento pessoal e profissional'
]

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO, TechStart',
    content: 'A mentoria do António foi fundamental para escalar minha startup. Em 6 meses, triplicamos nossa receita.',
    result: '300% crescimento'
  },
  {
    name: 'Ana Costa',
    role: 'Empreendedora Digital',
    content: 'Com a orientação do António, consegui estruturar meu negócio digital e alcançar 6 dígitos em receita.',
    result: '6 dígitos/ano'
  },
  {
    name: 'Pedro Santos',
    role: 'Fundador, EduTech',
    content: 'A mentoria me ajudou a focar no que realmente importa. Hoje tenho um negócio sustentável e escalável.',
    result: 'Negócio escalável'
  }
]

const packages = [
  {
    name: 'Mentoria Mensal',
    price: '€800',
    period: 'por mês',
    description: 'Ideal para empreendedores que querem orientação contínua',
    features: [
      '2 sessões mensais (1h cada)',
      'Plano de ação personalizado',
      'Suporte via WhatsApp',
      'Materiais exclusivos',
      'Acesso ao grupo VIP',
      'Revisão mensal de resultados'
    ],
    popular: false,
    commitment: 'Mínimo 3 meses'
  },
  {
    name: 'Mentoria Intensiva',
    price: '€1.500',
    period: 'por mês',
    description: 'Para empreendedores que querem resultados acelerados',
    features: [
      '4 sessões mensais (1h cada)',
      'Estratégia personalizada completa',
      'Suporte prioritário 24/7',
      'Análise de métricas e KPIs',
      'Networking exclusivo',
      'Revisão semanal de progresso',
      'Acesso a ferramentas premium'
    ],
    popular: true,
    commitment: 'Mínimo 6 meses'
  },
  {
    name: 'Mentoria VIP',
    price: '€3.000',
    period: 'por mês',
    description: 'Solução premium para grandes empreendedores',
    features: [
      'Sessões ilimitadas',
      'Consultoria estratégica completa',
      'Suporte 24/7 dedicado',
      'Participação em decisões estratégicas',
      'Networking de alto nível',
      'Acesso direto ao mentor',
      'Revisão de investimentos',
      'Conexões com investidores'
    ],
    popular: false,
    commitment: 'Mínimo 12 meses'
  }
]

export default function MentoriaPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Mentoria Premium</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Mentoria para <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Empreendedores</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Mentoria personalizada para empreendedores que querem acelerar o crescimento de seus negócios. 
                Experiência prática, estratégias comprovadas e resultados mensuráveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href="/contato">
                    Agendar Conversa
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
                src="/mentorship-session.png"
                alt="Sessão de Mentoria"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Areas */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Áreas de Mentoria</h2>
            <p className="text-xl text-muted-foreground">
              Orientação especializada nas áreas mais críticas para o sucesso empresarial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mentorshipAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-cream rounded-lg flex items-center justify-center mb-4">
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
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
                Por que investir em mentoria?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                A mentoria acelera seu crescimento, evita erros custosos e proporciona 
                insights valiosos baseados em experiência real.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Resultados dos Mentorados</h2>
            <p className="text-xl text-muted-foreground">
              Veja como a mentoria transformou negócios reais
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

      {/* Packages */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pacotes de Mentoria</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o nível de suporte ideal para seu momento empresarial
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
                    <span className="text-sm font-normal text-muted-foreground">/{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{pkg.description}</p>
                  <Badge variant="secondary" className="text-xs">{pkg.commitment}</Badge>
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
