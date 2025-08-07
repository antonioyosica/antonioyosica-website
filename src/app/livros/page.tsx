import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Star, Download, Eye, ArrowRight, Users, Award, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Livros | António Yosica',
  description: 'Biblioteca completa de livros de António Yosica sobre SEO, marketing digital, marca pessoal e empreendedorismo.',
  keywords: 'livros António Yosica, e-books, método LEE, SEO, marketing digital, empreendedorismo',
}

const books = [
  {
    id: 'metodo-lee',
    title: 'Método LEE',
    subtitle: 'O Guia Definitivo para Transformar Pessoas Invisíveis em Referências Visíveis',
    description: 'A metodologia completa que já transformou mais de 500 profissionais em autoridades reconhecidas em seus nichos.',
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
    totalChapters: 10
  },
  {
    id: 'seo-estrategico',
    title: 'SEO Estratégico',
    subtitle: 'Domine os Resultados de Busca e Transforme Visitantes em Clientes',
    description: 'Estratégias avançadas de SEO técnico e de conteúdo para dominar o Google e gerar resultados consistentes.',
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
    totalChapters: 12
  },
  {
    id: 'autoridade-digital',
    title: 'Autoridade Digital',
    subtitle: 'Como Construir uma Reputação Online que Gera Oportunidades',
    description: 'O passo a passo completo para se tornar uma autoridade reconhecida no mundo digital.',
    cover: '/livro-autoridade-digital-cover.png',
    price: '€25',
    rating: 4.7,
    reviews: 892,
    readers: '5K+',
    pages: 180,
    publishDate: '2024-03-10',
    category: 'Marketing Digital',
    status: 'Disponível',
    badges: [],
    freeChapters: 3,
    totalChapters: 8
  },
  {
    id: 'empreendedor-digital',
    title: 'O Empreendedor Digital',
    subtitle: 'Da Ideia ao Negócio Escalável no Mundo Online',
    description: 'Guia completo para criar, lançar e escalar negócios digitais de sucesso.',
    cover: '/livro-empreendedor-digital-cover.png',
    price: '€32',
    rating: 0,
    reviews: 0,
    readers: '0',
    pages: 280,
    publishDate: '2024-05-15',
    category: 'Empreendedorismo',
    status: 'Pré-venda',
    badges: ['Em Breve'],
    freeChapters: 0,
    totalChapters: 15
  }
]

const categories = ['Todos', 'Marca Pessoal', 'SEO', 'Marketing Digital', 'Empreendedorismo']

export default function LivrosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Biblioteca <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Digital</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Conhecimento transformador em formato digital. Livros práticos sobre SEO, 
            marketing digital, marca pessoal e empreendedorismo.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="font-bold text-2xl text-brand-orange">4</div>
              <div>Livros Publicados</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-brand-orange">22K+</div>
              <div>Leitores</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-brand-orange">4.8/5</div>
              <div>Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="pb-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.map((book) => (
              <Card key={book.id} className="hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <Image
                    src={book.cover || "/placeholder.svg?height=300&width=200"}
                    alt={`Capa do livro ${book.title}`}
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {book.badges.map((badge, index) => (
                      <Badge 
                        key={index}
                        className={`${
                          badge === 'Bestseller #1' ? 'bg-yellow-500' :
                          badge === 'Mais Popular' ? 'bg-brand-orange' :
                          badge === 'Novo' ? 'bg-green-500' :
                          badge === 'Em Breve' ? 'bg-blue-500' :
                          'bg-gray-500'
                        }`}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="absolute top-4 right-4">
                    <Badge variant={book.status === 'Disponível' ? 'default' : 'secondary'}>
                      {book.status}
                    </Badge>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">Ver Detalhes</p>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {book.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-brand-orange text-brand-orange" />
                      <span className="text-xs text-muted-foreground">
                        {book.rating > 0 ? book.rating : 'Novo'}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">{book.subtitle}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-4">
                    <div className="text-center">
                      <Users className="h-3 w-3 mx-auto mb-1" />
                      {book.readers}
                    </div>
                    <div className="text-center">
                      <BookOpen className="h-3 w-3 mx-auto mb-1" />
                      {book.pages}p
                    </div>
                    <div className="text-center">
                      <Calendar className="h-3 w-3 mx-auto mb-1" />
                      {new Date(book.publishDate).getFullYear()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-brand-orange">{book.price}</div>
                    {book.freeChapters > 0 && (
                      <div className="text-xs text-green-600">
                        {book.freeChapters} cap. grátis
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    {book.status === 'Disponível' ? (
                      <>
                        {book.freeChapters > 0 && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                            asChild
                          >
                            <Link href={`/livros/${book.id}/ler`}>
                              <Eye className="h-4 w-4 mr-2" />
                              Ler Grátis
                            </Link>
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          className="w-full bg-brand-orange hover:bg-brand-orange/90"
                          asChild
                        >
                          <Link href={`/livros/${book.id}`}>
                            Ver Livro
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full"
                        disabled
                      >
                        Em Breve
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Seja o Primeiro a Saber
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Receba notificações sobre novos lançamentos e conteúdo exclusivo
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Inscrever-se na Newsletter
          </Button>
        </div>
      </section>
    </div>
  )
}
