'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, BookOpen, Mic, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const featuredContent = [
  {
    type: 'Artigo',
    icon: BookOpen,
    title: 'Como Dominar o SEO em 2024',
    description: 'Guia completo com as estratégias mais eficazes para dominar os resultados de busca.',
    image: '/blog-seo-2024.png',
    link: '/blog/1',
    badge: 'Mais Lido'
  },
  {
    type: 'Vídeo',
    icon: Play,
    title: 'Método LEE Explicado',
    description: 'Vídeo completo explicando como funciona a metodologia que transforma carreiras.',
    image: '/youtube-video-lee.png',
    link: '/ecossistema/youtube',
    badge: 'Novo'
  },
  {
    type: 'Podcast',
    icon: Mic,
    title: 'Construindo Autoridade Online',
    description: 'Episódio sobre como se tornar uma referência reconhecida em seu nicho.',
    image: '/podcast-episode-autoridade.png',
    link: '/ecossistema/podcast',
    badge: 'Popular'
  }
]

export default function FeaturedContent() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Conteúdo em <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Artigos, vídeos e podcasts que vão acelerar sua jornada para se tornar uma autoridade reconhecida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <Image
                    src={content.image || "/placeholder.svg?height=200&width=400"}
                    alt={content.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center">
                      <content.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-brand-orange">
                    {content.badge}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <content.icon className="h-4 w-4 text-brand-orange" />
                    <span className="text-sm text-brand-orange font-medium">{content.type}</span>
                  </div>
                  <CardTitle className="text-xl">{content.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">{content.description}</p>
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" asChild>
                    <Link href={content.link}>
                      Ver Conteúdo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white" asChild>
            <Link href="/blog">Ver Todo o Conteúdo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
