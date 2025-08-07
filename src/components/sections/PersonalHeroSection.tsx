'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PersonalHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with colorful blocks inspired by Pat Flynn */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-brand-orange to-brand-cream opacity-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-15" />
        <div className="absolute top-1/4 left-1/4 w-1/6 h-1/4 bg-gradient-to-br from-green-400 to-blue-500 opacity-10" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block font-bold bg-clip-text my-2" style={{fontSize: '32px'}}>
                Olá! Sou
              </span><span className="block font-bold text-brand-orange my-2" style={{fontSize: '64px'}}>
                António Yosica
              </span><span className="block font-bold bg-clip-text my-2" style={{fontSize: '32px', lineHeight: '38px'}}>
                Especialista em SEO, Engenheiro de Software e Criador do Método LEE.
              </span>
            </motion.h1>

            <motion.div 
              className="w-16 h-1 bg-gradient-to-r from-brand-orange to-brand-cream mx-auto lg:mx-0 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.p 
              className="text-xl sm:text-2xl font-medium mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Transformo pessoas invisíveis em referências visíveis. 
              <span className="block mt-2 text-brand-orange">
                Porque talento sem visibilidade é como ouro enterrado: 
                ninguém vê, ninguém valoriza.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-brand-orange hover:bg-brand-orange/90">
                <Link href="/trabalhar-comigo">
                  Trabalhar Comigo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                <Play className="mr-2 h-5 w-5" />
                Conhecer o Método LEE
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-sm text-muted-foreground"
            >
              <p>
                ✨ Mais de <strong>500 profissionais</strong> já transformaram suas carreiras<br/>
                🚀 <strong>95% de taxa de sucesso</strong> com o método LEE<br/>
                🌍 Presente em <strong>15+ países</strong>
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-orange to-brand-cream rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
              
              <Image
                src="/antonio-yosica-headshot.png"
                alt="António Yosica - Especialista em SEO e criador do método LEE"
                width={500}
                height={500}
                className="relative z-10 rounded-2xl shadow-2xl w-full"
                priority
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-orange">LEE</div>
                  <div className="text-xs text-muted-foreground">Método</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-sm text-muted-foreground mb-2">Descubra mais sobre mim</p>
        <ChevronDown className="w-6 h-6 text-brand-orange animate-bounce mx-auto" />
      </motion.div>
    </section>
  )
}
