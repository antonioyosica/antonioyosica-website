'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Award, Users } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2019',
    title: 'Início da Jornada',
    description: 'Começou como desenvolvedor web em Luanda, Angola, descobrindo a paixão por SEO.'
  },
  {
    year: '2020',
    title: 'Primeiros Sucessos',
    description: 'Primeiros projetos de SEO com resultados impressionantes, aumentando tráfego em 300%.'
  },
  {
    year: '2021',
    title: 'Expansão Internacional',
    description: 'Começou a atender clientes internacionais, especializando-se em mercados lusófonos.'
  },
  {
    year: '2022',
    title: 'Criação do Método LEE',
    description: 'Desenvolveu a metodologia LEE após analisar padrões de sucesso em centenas de projetos.'
  },
  {
    year: '2023',
    title: 'Reconhecimento Global',
    description: 'Tornou-se referência em SEO para mercados africanos e palestrante internacional.'
  },
  {
    year: '2024',
    title: 'Ecossistema Completo',
    description: 'Lançou o LEE Club e expandiu para mentoria e produtos digitais educacionais.'
  }
]

const achievements = [
  { icon: Users, number: '500+', label: 'Clientes Atendidos' },
  { icon: Award, number: '95%', label: 'Taxa de Sucesso' },
  { icon: MapPin, number: '15+', label: 'Países Atendidos' },
  { icon: Calendar, number: '5+', label: 'Anos de Experiência' }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Sobre <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">António Yosica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A jornada de um empreendedor angolano que revolucionou o marketing digital 
            através da inovação, persistência e resultados comprovados.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image
                src="/african-entrepreneur-office.png"
                alt="António Yosica"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <Badge variant="secondary" className="text-sm font-medium">
                  🇦🇴 Orgulhosamente Angolano
                </Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Missão, Visão e Valores</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-brand-orange mb-2">Missão</h4>
                <p className="text-muted-foreground">
                  Capacitar empreendedores e profissionais a construírem marcas pessoais 
                  autênticas e negócios digitais sustentáveis através do método LEE.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-brand-orange mb-2">Visão</h4>
                <p className="text-muted-foreground">
                  Ser a referência global em estratégias de marca pessoal e SEO, 
                  especialmente nos mercados lusófonos e africanos.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-brand-orange mb-2">Valores</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• <strong>Autenticidade:</strong> Ser genuíno em todas as interações</li>
                  <li>• <strong>Excelência:</strong> Buscar sempre a melhor qualidade</li>
                  <li>• <strong>Inovação:</strong> Estar na vanguarda das tendências</li>
                  <li>• <strong>Impacto:</strong> Gerar resultados transformadores</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-orange to-brand-cream rounded-full flex items-center justify-center">
                <achievement.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{achievement.number}</div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Jornada de Sucesso</h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-orange to-brand-cream rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3">{item.year}</Badge>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 w-4 h-4 bg-white border-4 border-brand-orange rounded-full" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
