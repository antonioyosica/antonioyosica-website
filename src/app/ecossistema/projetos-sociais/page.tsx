import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, BookOpen, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projetos Sociais | Impacto Social e Capacitação Jovem',
  description: 'Conheça os projetos sociais de António Yosica para capacitar jovens empreendedores angolanos e africanos no marketing digital e empreendedorismo.',
  keywords: 'projetos sociais, capacitação jovens, empreendedorismo Angola, impacto social, educação digital',
}

const impactStats = [
  { number: '1000+', label: 'Jovens Capacitados' },
  { number: '50+', label: 'Workshops Realizados' },
  { number: '15+', label: 'Parcerias com ONGs' },
  { number: '85%', label: 'Taxa de Empregabilidade' }
]

const projects = [
  {
    icon: BookOpen,
    title: 'LEE Academy',
    description: 'Programa de capacitação gratuita em marketing digital para jovens de 18-25 anos.',
    beneficiaries: '500+ jovens',
    duration: '6 meses',
    status: 'Ativo',
    image: '/project-lee-academy.png'
  },
  {
    icon: Users,
    title: 'Mentoria Jovem',
    description: 'Programa de mentoria individual para jovens empreendedores com ideias inovadoras.',
    beneficiaries: '200+ mentorados',
    duration: '12 meses',
    status: 'Ativo',
    image: '/project-mentoria-jovem.png'
  },
  {
    icon: Award,
    title: 'Bolsas LEE',
    description: 'Bolsas de estudo para cursos premium de marketing digital e empreendedorismo.',
    beneficiaries: '100+ bolsistas',
    duration: 'Contínuo',
    status: 'Ativo',
    image: '/project-bolsas-lee.png'
  },
  {
    icon: Heart,
    title: 'Digital Angola',
    description: 'Iniciativa para digitalizar pequenos negócios em comunidades rurais de Angola.',
    beneficiaries: '300+ negócios',
    duration: '24 meses',
    status: 'Em Desenvolvimento',
    image: '/project-digital-angola.png'
  }
]

const testimonials = [
  {
    name: 'Maria João',
    age: 23,
    location: 'Luanda, Angola',
    story: 'Através da LEE Academy, aprendi marketing digital e hoje tenho minha própria agência.',
    result: 'Criou sua própria agência',
    image: '/testimonial-maria-joao.png'
  },
  {
    name: 'Carlos Silva',
    age: 25,
    location: 'Benguela, Angola',
    story: 'A mentoria me ajudou a estruturar minha startup de tecnologia e conseguir investimento.',
    result: 'Recebeu investimento de €50K',
    image: '/testimonial-carlos-silva.png'
  },
  {
    name: 'Ana Costa',
    age: 22,
    location: 'Huambo, Angola',
    story: 'Com a bolsa LEE, fiz o curso de SEO e hoje trabalho como especialista em uma empresa internacional.',
    result: 'Emprego internacional',
    image: '/testimonial-ana-costa.png'
  }
]

const partners = [
  { name: 'UNICEF Angola', logo: '/partner-unicef.png' },
  { name: 'Fundação Lwini', logo: '/partner-lwini.png' },
  { name: 'Instituto Camões', logo: '/partner-camoes.png' },
  { name: 'Banco BAI', logo: '/partner-bai.png' },
  { name: 'Sonangol', logo: '/partner-sonangol.png' },
  { name: 'Unitel', logo: '/partner-unitel.png' }
]

export default function ProjetosSociaisPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Impacto Social</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Projetos <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Sociais</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Iniciativas para capacitar jovens empreendedores angolanos e africanos no marketing digital 
                e empreendedorismo, criando oportunidades e transformando vidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href="/contato">
                    Participar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  Apoiar Projetos
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/social-projects-hero.png"
                alt="Projetos Sociais António Yosica"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Nosso Impacto</h2>
          <p className="text-xl text-white/90 mb-12">
            Transformando vidas através da educação digital e empreendedorismo
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossos Projetos</h2>
            <p className="text-xl text-muted-foreground">
              Iniciativas que estão transformando o futuro dos jovens africanos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg?height=200&width=400"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === 'Ativo' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-orange to-brand-cream rounded-lg flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Beneficiários:</span>
                      <div className="text-brand-orange">{project.beneficiaries}</div>
                    </div>
                    <div>
                      <span className="font-medium">Duração:</span>
                      <div className="text-brand-orange">{project.duration}</div>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold mb-4">Histórias de Transformação</h2>
            <p className="text-xl text-muted-foreground">
              Vidas que foram transformadas através dos nossos projetos sociais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg?height=80&width=80"}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.age} anos • {testimonial.location}
                  </p>
                  <Badge className="bg-brand-orange">{testimonial.result}</Badge>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground italic text-center">
                    "{testimonial.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossos Parceiros</h2>
            <p className="text-xl text-muted-foreground">
              Organizações que apoiam nossa missão de transformação social
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg?height=60&width=120"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Faça Parte da Transformação
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a nós para criar mais oportunidades e transformar vidas através da educação digital
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contato">Quero Participar</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-brand-orange">
              Apoiar Financeiramente
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
