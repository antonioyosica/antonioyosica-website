import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Eye, ThumbsUp, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Canal YouTube | Conteúdo Educacional Gratuito',
  description: 'Canal YouTube de António Yosica com tutoriais, análises de casos e estratégias avançadas de SEO e marketing digital. Conteúdo gratuito e de alta qualidade.',
  keywords: 'YouTube António Yosica, tutoriais SEO, marketing digital, análises casos, conteúdo gratuito',
}

const channelStats = [
  { number: '50K+', label: 'Inscritos' },
  { number: '2M+', label: 'Visualizações' },
  { number: '200+', label: 'Vídeos Publicados' },
  { number: '4.8/5', label: 'Avaliação Média' }
]

const videoCategories = [
  {
    title: 'Tutoriais de SEO',
    description: 'Guias passo a passo para dominar o SEO',
    videoCount: '50+ vídeos',
    color: 'from-brand-orange to-brand-cream'
  },
  {
    title: 'Análises de Casos',
    description: 'Estudos detalhados de casos reais de sucesso',
    videoCount: '30+ vídeos',
    color: 'from-brand-cream to-brand-orange'
  },
  {
    title: 'Marketing Digital',
    description: 'Estratégias avançadas de marketing digital',
    videoCount: '40+ vídeos',
    color: 'from-brand-orange to-brand-cream'
  },
  {
    title: 'Empreendedorismo',
    description: 'Dicas e insights para empreendedores',
    videoCount: '35+ vídeos',
    color: 'from-brand-cream to-brand-orange'
  }
]

const featuredVideos = [
  {
    id: 1,
    title: 'SEO em 2024: Guia Completo para Iniciantes',
    views: '125K',
    likes: '3.2K',
    duration: '28:45',
    publishDate: '2024-01-10',
    thumbnail: '/youtube-video-1.png',
    description: 'Aprenda SEO do zero com este guia completo e atualizado para 2024.'
  },
  {
    id: 2,
    title: 'Como Criar uma Marca Pessoal Forte em 30 Dias',
    views: '89K',
    likes: '2.8K',
    duration: '22:15',
    publishDate: '2024-01-05',
    thumbnail: '/youtube-video-2.png',
    description: 'Estratégias práticas para construir uma marca pessoal impactante.'
  },
  {
    id: 3,
    title: 'Análise: Como Esta Empresa Aumentou 400% o Tráfego',
    views: '156K',
    likes: '4.1K',
    duration: '35:20',
    publishDate: '2023-12-28',
    thumbnail: '/youtube-video-3.png',
    description: 'Análise detalhada de um caso real de crescimento orgânico.'
  }
]

const playlists = [
  {
    name: 'SEO para Iniciantes',
    videoCount: 15,
    totalDuration: '6h 30min',
    thumbnail: '/playlist-seo-beginners.png'
  },
  {
    name: 'Marca Pessoal Masterclass',
    videoCount: 12,
    totalDuration: '4h 45min',
    thumbnail: '/playlist-personal-brand.png'
  },
  {
    name: 'Casos de Sucesso',
    videoCount: 20,
    totalDuration: '8h 15min',
    thumbnail: '/playlist-case-studies.png'
  },
  {
    name: 'Marketing Digital Avançado',
    videoCount: 18,
    totalDuration: '7h 20min',
    thumbnail: '/playlist-advanced-marketing.png'
  }
]

export default function YouTubePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Conteúdo Gratuito</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Canal <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">YouTube</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Tutoriais práticos, análises de casos e estratégias avançadas de SEO e marketing digital. 
                Conteúdo educacional gratuito e de alta qualidade para acelerar seu crescimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="https://youtube.com/@antonioyosica" target="_blank">
                    <Play className="mr-2 h-5 w-5" />
                    Inscrever-se
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  Ver Playlists
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/youtube-channel-banner.png"
                alt="Canal YouTube António Yosica"
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
          <h2 className="text-3xl font-bold text-white mb-4">Canal em Números</h2>
          <p className="text-xl text-white/90 mb-12">
            Uma das maiores comunidades de SEO e marketing digital em português
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {channelStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Categorias de Conteúdo</h2>
            <p className="text-xl text-muted-foreground">
              Conteúdo organizado por temas para facilitar seu aprendizado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {videoCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{category.videoCount}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Vídeos em Destaque</h2>
            <p className="text-xl text-muted-foreground">
              Os vídeos mais populares e úteis do canal
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg?height=200&width=350"}
                    alt={video.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black/80 text-white">
                    {video.duration}
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {video.views}
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {video.likes}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(video.publishDate).toLocaleDateString('pt-PT')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Playlists Organizadas</h2>
            <p className="text-xl text-muted-foreground">
              Conteúdo estruturado para um aprendizado progressivo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={playlist.thumbnail || "/placeholder.svg?height=150&width=250"}
                    alt={playlist.name}
                    width={250}
                    height={150}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button className="bg-brand-orange hover:bg-brand-orange/90 rounded-full">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">{playlist.name}</h3>
                  <div className="text-sm text-muted-foreground">
                    <div>{playlist.videoCount} vídeos</div>
                    <div>{playlist.totalDuration}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Não Perca Nenhum Conteúdo
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Inscreva-se no canal e ative as notificações para receber todo o conteúdo novo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6" asChild>
              <Link href="https://youtube.com/@antonioyosica" target="_blank">
                <Play className="mr-2 h-5 w-5" />
                Inscrever-se Agora
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-brand-orange">
              Ver Todos os Vídeos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
