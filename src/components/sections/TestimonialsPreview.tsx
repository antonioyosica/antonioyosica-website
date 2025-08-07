'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Star, Quote, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'CEO, TechStart Angola',
    image: '/professional-woman-ceo.png',
    content: 'O método LEE transformou completamente nossa presença digital. Em 6 meses, aumentamos nosso tráfego orgânico em 400%.',
    rating: 5
  },
  {
    name: 'João Santos',
    role: 'Empreendedor Digital',
    image: '/professional-entrepreneur.png',
    content: 'António não é apenas um consultor, é um verdadeiro mentor. Sua abordagem estratégica me posicionou como autoridade no mercado.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    role: 'Diretora de Marketing',
    image: '/professional-woman-marketing-director.png',
    content: 'A consultoria em SEO gerou resultados impressionantes. Nossa empresa agora aparece na primeira página para todas as palavras-chave.',
    rating: 5
  }
]

export default function TestimonialsPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-cream/20 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            O que dizem nossos <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 profissionais e empresas já transformaram seus negócios 
            com nossas estratégias. Veja alguns depoimentos reais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-brand-orange mb-4" />
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
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
            <Link href="/sobre#depoimentos">
              Ver Mais Depoimentos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
