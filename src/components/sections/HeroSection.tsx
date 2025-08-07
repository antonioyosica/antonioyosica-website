'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-cream/30 via-white to-brand-orange/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Avaliado por +500 clientes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Seja</span>
              <span className="block bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">
                Lembrado,
              </span>
              <span className="block bg-gradient-to-r from-brand-cream to-brand-orange bg-clip-text text-transparent">
                Encontrado
              </span>
              <span className="block">e Escolhido</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Sou António Yosica, especialista em SEO e criador do método LEE. 
              Transformo marcas pessoais e negócios digitais através de estratégias 
              comprovadas que geram resultados reais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-brand-orange hover:bg-brand-orange/90">
                <Link href="/contato">
                  Quero Ser Escolhido
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                <Play className="mr-2 h-5 w-5" />
                Ver Apresentação
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-2xl text-brand-orange">500+</div>
                <div>Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-brand-orange">95%</div>
                <div>Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-brand-orange">5+</div>
                <div>Anos de Experiência</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-cream rounded-full blur-3xl opacity-20 animate-pulse" />
              <Image
                src="/antonio-yosica-headshot.png"
                alt="António Yosica - Especialista em SEO"
                width={600}
                height={600}
                className="relative z-10 rounded-full shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-brand-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-orange rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
