import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Star, Download, Eye, ArrowRight, Users, Award, Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Mock books data
const books = {
  'metodo-lee': {
    id: 'metodo-lee',
    title: 'Método LEE',
    subtitle: 'O Guia Definitivo para Transformar Pessoas Invisíveis em Referências Visíveis',
    description: 'A metodologia completa que já transformou mais de 500 profissionais em autoridades reconhecidas em seus nichos. Descubra como ser Lembrado, Encontrado e Escolhido no mundo digital.',
    cover: '/livro-metodo-lee-cover.png',
    price: '€29',
    rating: 4.9,
    reviews: 2847,
    readers: '10K+',
    pages: 250,
    publishDate: '2024-01-15',
    category: 'Marca Pessoal',
    status: 'Disponível',
    badges: ['Bestseller #1', 'Mais Popular'],
    freeChapters: 3,
    totalChapters: 10,
    chapters: [
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
  },
  'seo-estrategico': {
    id: 'seo-estrategico',
    title: 'SEO Estratégico',
    subtitle: 'Domine os Resultados de Busca e Transforme Visitantes em Clientes',
    description: 'Estratégias avançadas de SEO técnico e de conteúdo para dominar o Google e gerar resultados consistentes. Mais de 200 técnicas práticas testadas em centenas de projetos.',
    cover: '/livro-seo-estrategico-cover.png',
    price: '€35',
    rating: 4.8,
    reviews: 1523,
    readers: '7K+',
    pages: 320,
    publishDate: '2024-02-20',
    category: 'SEO',
    status: 'Disponível',
    badges: ['Novo'],
    freeChapters: 2,
    totalChapters: 12,
    chapters: [
      { number: 1, title: 'Fundamentos do SEO Moderno', free: true },
      { number: 2, title: 'Pesquisa de Palavras-chave Avançada', free: true },
      { number: 3, title: 'SEO Técnico Completo', free: false },
      { number: 4, title: 'Otimização de Conteúdo', free: false },
      { number: 5, title: 'Link Building Estratégico', free: false },
      { number: 6, title: 'SEO Local e Internacional', free: false },
      { number: 7, title: 'Análise e Monitoramento', free: false },
      { number: 8, title: 'SEO para E-commerce', free: false },
      { number: 9, title: 'Algoritmos e Atualizações', free: false },
      { number: 10, title: 'Ferramentas Essenciais', free: false },
      { number: 11, title: 'Casos Práticos', free: false },
      { number: 12, title: 'Futuro do SEO', free: false }
    ]
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const book = books[params.id as keyof typeof books]
  
  if (!book) {
    return {
      title: 'Livro não encontrado'
    }
  }

  return {
    title: `${book.title} | António Yosica`,
    description: book.description,
    keywords: `${book.title}, ${book.category}, António Yosica, livro digital`,
  }
}

export default function LivroPage({ params }: { params: { id: string } }) {
  const book = books[params.id as keyof typeof books]
  
  if (!book) {
    notFound()
  }

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empreendedora Digital',
      content: `Este livro mudou completamente minha visão sobre ${book.category.toLowerCase()}. Resultados impressionantes!`,
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'CEO, TechStart',
      content: `Aplicamos as estratégias do ${book.title} na empresa e os resultados foram surpreendentes.`,
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Consultora',
      content: `Leitura obrigatória para qualquer profissional que quer se destacar no mercado digital.`,
      rating: 5
    }
  ]

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <Button variant="ghost" asChild>
          <Link href="/livros">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos Livros
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {book.badges.map((badge, index) => (
                  <Badge 
                    key={index}
                    className={`${
                      badge === 'Bestseller #1' ? 'bg-yellow-500' :
                      badge === 'Mais Popular' ? 'bg-brand-orange' :
                      badge === 'Novo' ? 'bg-green-500' :
                      'bg-gray-500'
                    }`}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {book.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                {book.subtitle}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Por <strong>António Yosica</strong>
              </p>
              
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {book.rating}/5 ({book.reviews.toLocaleString()} avaliações)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {book.freeChapters > 0 && (
                  <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white" asChild>
                    <Link href={`/livros/${book.id}/ler`}>
                      <Eye className="mr-2 h-5 w-5" />
                      Ler {book.freeChapters} Capítulos Grátis
                    </Link>
                  </Button>
                )}
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                  <Download className="mr-2 h-5 w-5" />
                  Comprar Livro - {book.price}
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="text-center">
                  <Users className="h-4 w-4 mx-auto mb-1" />
                  <div className="font-medium">{book.readers}</div>
                  <div>Leitores</div>
                </div>
                <div className="text-center">
                  <BookOpen className="h-4 w-4 mx-auto mb-1" />
                  <div className="font-medium">{book.pages}</div>
                  <div>Páginas</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-4 w-4 mx-auto mb-1" />
                  <div className="font-medium">{new Date(book.publishDate).getFullYear()}</div>
                  <div>Publicação</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-cream rounded-2xl blur-2xl opacity-20 animate-pulse" />
                <Image
                  src={book.cover || "/placeholder.svg?height=600&width=400"}
                  alt={`Capa do livro ${book.title}`}
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

      {/* About the Book */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Sobre o Livro</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>{book.description}</p>
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
              {book.freeChapters > 0 && `Leia os ${book.freeChapters} primeiros capítulos gratuitamente`}
            </p>
          </div>

          <div className="space-y-4">
            {book.chapters.map((chapter) => (
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
                        <Link href={`/livros/${book.id}/ler?capitulo=${chapter.number}`}>
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
              Comprar Livro Completo - {book.price}
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
