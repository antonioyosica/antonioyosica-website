'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, Mic, Youtube, Lightbulb, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ecosystemItems = [
  {
    icon: Users,
    title: 'LEE Club',
    subtitle: 'Comunidade Exclusiva',
    description: 'Uma comunidade premium para empreendedores que querem aplicar o método LEE e trocar experiências com outros profissionais de sucesso.',
    features: ['Networking qualificado', 'Conteúdo exclusivo', 'Mentorias em grupo', 'Eventos mensais'],
    link: '#',
    badge: 'Exclusivo',
    color: 'from-brand-orange to-brand-cream'
  },
  {
    icon: Mic,
    title: 'Podcast LEE Cast',
    subtitle: 'Conversas que Transformam',
    description: 'Entrevistas semanais com empreendedores, especialistas e líderes que aplicaram estratégias de marca pessoal com sucesso.',
    features: ['Episódios semanais', 'Convidados internacionais', 'Casos reais', 'Dicas práticas'],
    link: '#',
    badge: 'Novo',
    color: 'from-brand-cream to-brand-orange'
  },
  {
    icon: Youtube,
    title: 'Canal YouTube',
    subtitle: 'Conteúdo Educacional',
    description: 'Tutoriais, análises de casos e estratégias avançadas de SEO e marketing digital disponíveis gratuitamente.',
    features: ['Vídeos semanais', 'Tutoriais práticos', 'Análises de mercado', '+50k inscritos'],
    link: '#',
    badge: 'Gratuito',
    color: 'from-brand-orange to-brand-cream'
  },
  {
    icon: Lightbulb,
    title: 'Projetos Sociais',
    subtitle: 'Impacto Social',
    description: 'Iniciativas para capacitar jovens empreendedores angolanos e africanos no marketing digital e empreendedorismo.',
    features: ['Workshops gratuitos', 'Mentoria jovens', 'Bolsas de estudo', 'Parcerias ONGs'],
    link: '#',
    badge: 'Social',
    color: 'from-brand-orange to-brand-cream'
  }
]

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ecossistema <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">António Yosica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um ecossistema completo de conteúdo, comunidade e impacto social 
            para acelerar seu crescimento pessoal e profissional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Badge 
                className={`absolute -top-3 left-6 z-10 bg-gradient-to-r ${item.color}`}
              >
                {item.badge}
              </Badge>
              
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                  <p className="text-brand-orange font-medium">{item.subtitle}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant="outline">
                    <Link href={item.link} className="flex items-center">
                      Explorar
                      <ExternalLink className="ml-2 h-4 w-4" />
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
          className="bg-gradient-to-r from-brand-orange to-brand-cream rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Junte-se ao Ecossistema</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Faça parte de uma comunidade de empreendedores visionários que estão 
            transformando o mercado digital com estratégias inovadoras.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Entrar no LEE Club
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-brand-orange">
              Explorar Conteúdo Gratuito
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
