import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Blog | Insights sobre SEO e Marketing Digital',
  description: 'Artigos exclusivos sobre SEO, marketing digital, marca pessoal e empreendedorismo por António Yosica. Estratégias práticas e casos reais.',
  keywords: 'blog SEO, marketing digital, marca pessoal, empreendedorismo, António Yosica',
}

const blogPosts = [
  {
    id: 1,
    title: 'Como Dominar o SEO em 2024: Guia Completo',
    excerpt: 'Descubra as estratégias mais eficazes de SEO para 2024 e como aplicá-las no seu negócio.',
    image: '/blog-seo-2024.png',
    category: 'SEO',
    date: '2024-01-15',
    author: 'António Yosica',
    readTime: '8 min'
  },
  {
    id: 2,
    title: 'Método LEE: Transformando Profissionais em Autoridades',
    excerpt: 'A metodologia completa para ser lembrado, encontrado e escolhido no mercado digital.',
    image: '/blog-metodo-lee.png',
    category: 'Método LEE',
    date: '2024-01-10',
    author: 'António Yosica',
    readTime: '12 min'
  },
  {
    id: 3,
    title: 'Marca Pessoal: O Ativo Mais Valioso do Empreendedor',
    excerpt: 'Por que investir na sua marca pessoal é fundamental para o sucesso nos negócios.',
    image: '/blog-marca-pessoal.png',
    category: 'Marca Pessoal',
    date: '2024-01-05',
    author: 'António Yosica',
    readTime: '6 min'
  }
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Blog <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estratégias práticas, casos reais e insights exclusivos sobre SEO, 
            marketing digital e empreendedorismo para acelerar seu crescimento.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-brand-orange">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('pt-PT')}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Ler Artigo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
