import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Star, Download, Eye, ArrowRight, Users, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Livro: Método LEE | António Yosica',
  description: 'O guia definitivo para transformar pessoas invisíveis em referências visíveis. Aprenda o método LEE completo.',
  keywords: 'livro método LEE, e-book António Yosica, marca pessoal, SEO, autoridade online',
}

const bookStats = [
  { icon: Users, number: '10K+', label: 'Leitores' },
  { icon: Star, number: '4.9/5', label: 'Avaliação' },
  { icon: Award, number: '#1', label: 'Bestseller' },
  { icon: BookOpen, number: '250+', label: 'Páginas' }
]

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Empreendedora Digital',
    content: 'Este livro mudou completamente minha visão sobre marca pessoal. Em 3 meses, triplicou minha visibilidade online.',
    rating: 5
  },
  {
    name: 'João Santos',
    role: 'CEO, TechStart',
    content: 'O método LEE é revolucionário. Aplicamos na empresa e os resultados foram impressionantes.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    role: 'Consultora',
    content: 'Leitura obrigatória para qualquer profissional que quer se destacar no mercado digital.',
    rating: 5
  }
]

const chapters = [
  { number: 1, title: 'A Era da Invisibilidade Digital', free: true },
  { number: 2, title: 'O Nascimento do Método LEE', free: true },
  { number: 3, title: 'Lembrado: A Arte de Ser Memorável', free: true },
  { number: 4, title: 'Encontrado: Dominando o SEO Estratégico', free: false },
  { number: 5, title: 'Escolhido: Convertendo Visibilidade em Resultados', free: false },
  { number: 6, title: 'Casos de Sucesso Reais', free: false },
  { number: 7, title: 'Implementando o Método LEE', free: false },
  { number: 8, title: 'Mantendo a Autoridade', free: false },
  { number: 9, title: 'O Futuro da Visibilidade Digital', free: false },
  { number: 10, title: 'Seu Plano de Ação LEE', free: false }
]

export default function LivroPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Bestseller #1</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Método <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">LEE</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                O Guia Definitivo para Transformar Pessoas Invisíveis em Referências Visíveis
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Por <strong>António Yosica</strong>
              </p>
              
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">4.9/5 (2.847 avaliações)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href="/livro/ler">
                    <Eye className="mr-2 h-5 w-5" />
                    Ler 3 Capítulos Grátis
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  <Download className="mr-2 h-5 w-5" />
                  Comprar Livro Completo - €29
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                📱 Disponível como PWA - Leia offline após a compra<br/>
                🎯 Mais de 10.000 profissionais já aplicaram o método<br/>
                ⚡ Resultados em 90 dias ou menos
              </p>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-cream rounded-2xl blur-2xl opacity-20 animate-pulse" />
                <Image
                  src="/livro-metodo-lee-cover.png"
                  alt="Capa do Livro Método LEE"
                  width={400}
                  height={600}
                  className="relative z-10 rounded-2xl shadow-2xl w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {bookStats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Sobre o Livro</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                Em um mundo onde milhões de profissionais talentosos permanecem invisíveis, 
                o <strong>Método LEE</strong> surge como a solução definitiva para transformar 
                sua presença digital e se tornar uma autoridade reconhecida.
              </p>
              <p>
                Este livro não é apenas teoria. É um guia prático baseado em mais de 500 casos 
                reais de transformação, onde profissionais comuns se tornaram referências em 
                seus nichos usando as estratégias que você vai aprender.
              </p>
              <p>
                <strong>LEE</strong> significa <strong>Lembrado, Encontrado e Escolhido</strong> - 
                os três pilares fundamentais para construir uma presença digital que gera resultados reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Índice do Livro</h2>
            <p className="text-xl text-muted-foreground">
              Leia os 3 primeiros capítulos gratuitamente
            </p>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter) => (
              <Card key={chapter.number} className={`hover:shadow-lg transition-shadow ${
                chapter.free ? 'border-green-200 bg-green-50 dark:bg-green-900/10' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        chapter.free ? 'bg-green-500' : 'bg-gray-400'
                      }`}>
                        {chapter.number}
                      </div>
                      <div>
                        <h3 className="font-semibold">{chapter.title}</h3>
                        {chapter.free && (
                          <Badge className="mt-1 bg-green-500">Grátis</Badge>
                        )}
                      </div>
                    </div>
                    {chapter.free ? (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/livro/ler?capitulo=${chapter.number}`}>
                          Ler Agora
                        </Link>
                      </Button>
                    ) : (
                      <Badge variant="secondary">Premium</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
              Comprar Livro Completo - €29
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">O que os leitores dizem</h2>
            <p className="text-xl text-muted-foreground">
              Mais de 10.000 profissionais já transformaram suas carreiras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
