import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Mock blog posts data
const blogPosts = {
  1: {
    id: 1,
    title: 'Como Dominar o SEO em 2024: Guia Completo',
    content: `
      <p>O SEO continua sendo uma das estratégias mais importantes para qualquer negócio digital. Em 2024, as regras mudaram e é crucial estar atualizado com as melhores práticas.</p>
      
      <h2>1. Foque na Experiência do Usuário</h2>
      <p>O Google agora prioriza sites que oferecem uma excelente experiência do usuário. Isso inclui velocidade de carregamento, design responsivo e navegação intuitiva.</p>
      
      <h2>2. Conteúdo de Qualidade é Rei</h2>
      <p>Criar conteúdo que realmente ajuda seu público-alvo é fundamental. Não se trata apenas de palavras-chave, mas de fornecer valor real.</p>
      
      <h2>3. SEO Técnico Não Pode Ser Ignorado</h2>
      <p>Aspectos técnicos como Core Web Vitals, estrutura de dados e otimização para mobile são essenciais para o sucesso.</p>
      
      <h2>Conclusão</h2>
      <p>O SEO em 2024 é sobre equilibrar técnica, conteúdo e experiência do usuário. Foque nesses três pilares e você verá resultados consistentes.</p>
    `,
    excerpt: 'Descubra as estratégias mais eficazes de SEO para 2024 e como aplicá-las no seu negócio.',
    image: '/blog-seo-2024.png',
    category: 'SEO',
    date: '2024-01-15',
    author: 'António Yosica',
    readTime: '8 min'
  },
  2: {
    id: 2,
    title: 'Método LEE: Transformando Profissionais em Autoridades',
    content: `
      <p>O Método LEE nasceu da observação de centenas de casos de sucesso e fracasso no mundo digital. Descobri que existe um padrão claro entre aqueles que conseguem se destacar.</p>
      
      <h2>L - Lembrado</h2>
      <p>Ser lembrado não é sobre ser o mais barulhento, mas sobre criar uma conexão genuína com seu público. Isso começa com uma história autêntica e uma proposta de valor clara.</p>
      
      <h2>E - Encontrado</h2>
      <p>De que adianta ter a melhor solução se ninguém consegue te encontrar? Aqui entra o SEO estratégico, não apenas técnico, mas pensado para conectar você com quem realmente precisa do que você oferece.</p>
      
      <h2>E - Escolhido</h2>
      <p>Ser encontrado é só o começo. Ser escolhido é sobre demonstrar autoridade, credibilidade e resultados. É sobre transformar visitantes em clientes fiéis.</p>
      
      <h2>Aplicando o Método LEE</h2>
      <p>Já ajudei mais de 500 profissionais a aplicarem este método. Os resultados falam por si: aumento médio de 400% no tráfego orgânico e 300% nas conversões.</p>
    `,
    excerpt: 'A metodologia completa para ser lembrado, encontrado e escolhido no mercado digital.',
    image: '/blog-metodo-lee.png',
    category: 'Método LEE',
    date: '2024-01-10',
    author: 'António Yosica',
    readTime: '12 min'
  },
  3: {
    id: 3,
    title: 'Marca Pessoal: O Ativo Mais Valioso do Empreendedor',
    content: `
      <p>Sua marca pessoal é o que as pessoas dizem sobre você quando você não está na sala. É sua reputação, sua credibilidade, sua autoridade no mercado.</p>
      
      <h2>Por que Marca Pessoal Importa?</h2>
      <p>Em um mundo saturado de informações, as pessoas compram de quem confiam. E confiança se constrói através de uma marca pessoal sólida e autêntica.</p>
      
      <h2>Os 4 Pilares de uma Marca Pessoal Forte</h2>
      <h3>1. Autenticidade</h3>
      <p>Seja genuíno. As pessoas conseguem perceber quando você está sendo falso.</p>
      
      <h3>2. Consistência</h3>
      <p>Sua mensagem deve ser consistente em todos os canais.</p>
      
      <h3>3. Valor</h3>
      <p>Sempre entregue valor antes de pedir algo em troca.</p>
      
      <h3>4. Visibilidade</h3>
      <p>De nada adianta ter uma marca forte se ninguém te conhece.</p>
      
      <h2>Começando Hoje</h2>
      <p>Comece definindo sua proposta de valor única. O que você faz melhor que ninguém? Essa é a base da sua marca pessoal.</p>
    `,
    excerpt: 'Por que investir na sua marca pessoal é fundamental para o sucesso nos negócios.',
    image: '/blog-marca-pessoal.png',
    category: 'Marca Pessoal',
    date: '2024-01-05',
    author: 'António Yosica',
    readTime: '6 min'
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts[params.id as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Artigo não encontrado'
    }
  }

  return {
    title: `${post.title} | António Yosica`,
    description: post.excerpt,
    keywords: `${post.category}, António Yosica, ${post.title}`,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-brand-orange">{post.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString('pt-PT')}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground">{post.excerpt}</p>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src={post.image || "/placeholder.svg?height=400&width=800"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Gostou do artigo?</h3>
              <p className="text-muted-foreground">Compartilhe com sua rede!</p>
            </div>
            <Button className="bg-brand-orange hover:bg-brand-orange/90">
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>

        {/* Author Bio */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/antonio-yosica-headshot.png"
                alt="António Yosica"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">António Yosica</h3>
                <p className="text-muted-foreground mb-2">
                  Especialista em SEO, criador do método LEE e mentor de empreendedores digitais.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/sobre">Saber Mais</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  )
}
