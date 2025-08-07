'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Gift, CheckCircle, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  'Estratégias exclusivas de SEO',
  'Casos de estudo detalhados',
  'Tendências do mercado digital',
  'Dicas de marca pessoal',
  'Acesso antecipado a conteúdos'
]

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubscribed(true)
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 5000)
  }

  return (
    <section className="py-24 bg-gradient-to-r from-brand-orange via-brand-cream to-brand-orange relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <Gift className="h-4 w-4 mr-2" />
            Lead Magnet Gratuito
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Receba o Guia Completo do Método LEE
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Inscreva-se na nossa newsletter e receba gratuitamente o e-book 
            "Como Ser Lembrado, Encontrado e Escolhido em 90 Dias" + conteúdo exclusivo semanal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <CardContent className="p-8">
              {isSubscribed ? (
                <div className="text-center text-white">
                  <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-400" />
                  <h3 className="text-2xl font-bold mb-2">Bem-vindo à família LEE!</h3>
                  <p className="mb-4">Verifique seu email para baixar o guia gratuito.</p>
                  <Button variant="secondary" className="bg-white text-brand-orange hover:bg-gray-100">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Guia Agora
                  </Button>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Seu melhor email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 text-lg py-6"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-orange mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Mail className="h-5 w-5 mr-2" />
                          Quero o Guia Gratuito
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 text-sm text-white/90">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white/80 text-sm"
        >
          <p>
            🔒 Seus dados estão seguros. Não enviamos spam e você pode cancelar a qualquer momento.
          </p>
          <p className="mt-2">
            Junte-se a mais de <strong>10.000 empreendedores</strong> que já recebem nosso conteúdo exclusivo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
