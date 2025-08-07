import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Calendar, User, Download, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'LEE Cast Podcast | Conversas que Transformam Carreiras',
  description: 'LEE Cast, o podcast de António Yosica com entrevistas semanais de empreendedores e especialistas. Casos reais, estratégias práticas e insights valiosos.',
  keywords: 'LEE Cast, podcast empreendedorismo, entrevistas, casos sucesso, estratégias negócios',
}

const podcastStats = [
  { number: '150+', label: 'Episódios Publicados' },
  { number: '500K+', label: 'Downloads Mensais' },
  { number: '50+', label: 'Países Ouvintes' },
  { number: '4.9/5', label: 'Avaliação Média' }
]

const recentEpisodes = [
  {
    id: 1,
    title: 'Como Escalar um Negócio Digital de Zero a 7 Dígitos',
    guest: 'Maria Silva, CEO da TechStart',
    duration: '45 min',
    date: '2024-01-15',
    description: 'Maria compartilha sua jornada de crescimento e as estratégias que usou para escalar sua startup.',
    image: '/podcast-episode-1.png'
  },
  {
    id: 2,
    title: 'SEO em 2024: Tendências e Estratégias Avançadas',
    guest: 'João Santos, Especialista em SEO',
    duration: '38 min',
    date: '2024-01-08',
    description: 'Discussão sobre as principais mudanças no SEO e como se adaptar às novas tendências.',
    image: '/podcast-episode-2.png'
  },
  {
    id: 3,
    title: 'Construindo uma Marca Pessoal Autêntica',
    guest: 'Ana Costa, Personal Branding Expert',
    duration: '42 min',
    date: '2024-01-01',
    description: 'Estratégias práticas para construir uma marca pessoal forte e autêntica no mercado digital.',
    image: '/podcast-episode-3.png'
  }
]

const categories = [
  'Empreendedorismo',
  'Marketing Digital',
  'SEO',
  'Marca Pessoal',
  'Liderança',
  'Inovação',
  'Tecnologia',
  'Investimentos'
]

const platforms = [
  { name: 'Spotify', icon: '🎵', link: '#' },
  { name: 'Apple Podcasts', icon: '🍎', link: '#' },
  { name: 'Google Podcasts', icon: '🎧', link: '#' },
  { name: 'YouTube', icon: '📺', link: '#' },
  { name: 'Anchor', icon: '⚓', link: '#' },
  { name: 'Castbox', icon: '📻', link: '#' }
]

export default function PodcastPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-brand-orange">Podcast Semanal</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                LEE <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Cast</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Conversas semanais que transformam carreiras. Entrevistas com empreendedores, 
                especialistas e líderes que aplicaram estratégias de sucesso em seus negócios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href="#episodes">
                    Ouvir Episódios
                    <Play className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  Inscrever-se
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/podcast-studio.png"
                alt="LEE Cast Podcast Studio"
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
          <h2 className="text-3xl font-bold text-white mb-4">LEE Cast em Números</h2>
          <p className="text-xl text-white/90 mb-12">
            Um dos podcasts de empreendedorismo mais ouvidos em português
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {podcastStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Episodes */}
      <section id="episodes" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Episódios Recentes</h2>
            <p className="text-xl text-muted-foreground">
              Conteúdo novo toda semana com insights práticos e estratégias comprovadas
            </p>
          </div>
          
          <div className="space-y-8">
            {recentEpisodes.map((episode) => (
              <Card key={episode.id} className="hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-4 gap-6 p-6">
                  <div className="relative">
                    <Image
                      src={episode.image || "/placeholder.svg?height=200&width=200"}
                      alt={episode.title}
                      width={200}
                      height={200}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <Button 
                      size="sm" 
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-brand-orange hover:bg-brand-orange/90"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="secondary">Episódio #{episode.id}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(episode.date).toLocaleDateString('pt-PT')}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {episode.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                    <p className="text-brand-orange font-medium mb-3">{episode.guest}</p>
                    <p className="text-muted-foreground mb-4">{episode.description}</p>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90">
                        <Play className="h-4 w-4 mr-2" />
                        Ouvir Agora
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
              Ver Todos os Episódios
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Categorias</h2>
            <p className="text-xl text-muted-foreground">
              Explore episódios por temas de seu interesse
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover:bg-brand-orange hover:text-white cursor-pointer transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ouça em Todas as Plataformas</h2>
            <p className="text-xl text-muted-foreground">
              Disponível nas principais plataformas de podcast
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <Link
                key={index}
                href={platform.link}
                className="flex flex-col items-center p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:border-brand-orange"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <div className="font-medium text-center">{platform.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Não Perca Nenhum Episódio
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Inscreva-se para receber notificações sobre novos episódios e conteúdo exclusivo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Inscrever-se no Podcast
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-brand-orange">
              <Link href="/contato">Ser Convidado</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
