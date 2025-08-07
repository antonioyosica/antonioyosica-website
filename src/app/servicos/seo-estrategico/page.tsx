import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Search, TrendingUp, Target, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'SEO Estratégico | Domine os Resultados de Busca',
  description: 'Serviço premium de SEO estratégico por António Yosica. Auditoria técnica, estratégia de palavras-chave, link building e relatórios detalhados.',
  keywords: 'SEO estratégico, consultoria SEO, auditoria técnica, link building, palavras-chave',
}

const features = [
  {
    icon: Search,
    title: 'Auditoria Técnica Completa',
    description: 'Análise profunda de todos os aspectos técnicos do seu site para identificar oportunidades de melhoria.'
  },
  {
    icon: Target,
    title: 'Estratégia de Palavras-chave',
    description: 'Pesquisa e seleção estratégica das melhores palavras-chave para seu nicho e mercado.'
  },
  {
    icon: TrendingUp,
    title: 'Link Building Premium',
    description: 'Construção de autoridade através de backlinks de alta qualidade e relevância.'
  },
  {
    icon: BarChart3,
    title: 'Relatórios Mensais',
    description: 'Acompanhamento detalhado dos resultados com métricas claras e acionáveis.'
  }
]

const results = [
  { metric: '400%', description: 'Aumento médio no tráfego orgânico' },
  { metric: '85%', description: 'Melhoria no ranking das palavras-chave' },
  { metric: '300%', description: 'Crescimento em conversões orgânicas' },
  { metric: '6 meses', description: 'Tempo médio para resultados significativos' }
]

const packages = [
  {
    name: 'SEO Essencial',
    price: '€2.500',
    period: 'por mês',
    description: 'Ideal para pequenas empresas que querem começar com SEO',
    features: [
      'Auditoria técnica inicial',
      'Otimização on-page (até 10 páginas)',
      'Pesquisa de palavras-chave',
      'Relatório mensal básico',
      'Suporte por email'
    ],
    popular: false
  },
  {
    name: 'SEO Profissional',
    price: '€4.500',
    period: 'por mês',
    description: 'Para empresas que querem resultados consistentes e escaláveis',
    features: [
      'Auditoria técnica completa',
      'Otimização on-page ilimitada',
      'Estratégia de conteúdo SEO',
      'Link building (5 links/mês)',
      'Relatórios detalhados',
      'Consultoria mensal (2h)',
      'Suporte prioritário'
    ],
    popular: true
  },
  {
    name: 'SEO Enterprise',
    price: '€8.500',
    period: 'por mês',
    description: 'Solução completa para grandes empresas e e-commerces',
    features: [
      'Auditoria técnica avançada',
      'SEO técnico completo',
      'Estratégia de conteúdo premium',
      'Link building agressivo (15 links/mês)',
      'SEO local e internacional',
      'Relatórios executivos',
      'Consultoria semanal (4h)',
      'Suporte 24/7'
    ],
    popular: false
  }
]

export default function SEOEstrategicoPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Serviço Premium</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                SEO <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Estratégico</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Domine os resultados de busca com estratégias avançadas de SEO técnico e de conteúdo. 
                Aumente sua visibilidade online e transforme visitantes em clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  Ver Casos de Sucesso
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/seo-strategy-dashboard.png"
                alt="Dashboard de SEO Estratégico"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">O que está incluído</h2>
            <p className="text-xl text-muted-foreground">
              Uma abordagem completa e estratégica para dominar os resultados de busca
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-cream rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Resultados Comprovados</h2>
          <p className="text-xl text-white/90 mb-12">
            Mais de 200 projetos de SEO com resultados mensuráveis e consistentes
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{result.metric}</div>
                <div className="text-white/90">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pacotes de SEO</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o pacote ideal para suas necessidades e orçamento
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
