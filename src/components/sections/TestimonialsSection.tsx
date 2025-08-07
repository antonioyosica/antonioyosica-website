'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'CEO, TechStart Angola',
    image: '/professional-woman-ceo.png',
    content: 'O método LEE transformou completamente nossa presença digital. Em 6 meses, aumentamos nosso tráfego orgânico em 400% e as conversões triplicaram.',
    rating: 5,
    company: 'TechStart'
  },
  {
    name: 'João Santos',
    role: 'Empreendedor Digital',
    image: '/professional-entrepreneur.png',
    content: 'António não é apenas um consultor, é um verdadeiro mentor. Sua abordagem estratégica me ajudou a posicionar minha marca pessoal como autoridade no mercado.',
    rating: 5,
    company: 'Digital Ventures'
  },
  {
    name: 'Ana Costa',
    role: 'Diretora de Marketing',
    image: '/professional-woman-marketing-director.png',
    content: 'A consultoria em SEO do António gerou resultados impressionantes. Nossa empresa agora aparece na primeira página para todas as palavras-chave estratégicas.',
    rating: 5,
    company: 'Inovação Ltda'
  },
  {
    name: 'Carlos Mendes',
    role: 'Fundador, EduTech',
    image: '/professional-man-founder.png',
    content: 'O desenvolvimento do nosso site foi excepcional. Rápido, otimizado e com uma taxa de conversão 3x maior que o anterior. Recomendo sem hesitar.',
    rating: 5,
    company: 'EduTech Solutions'
  },
  {
    name: 'Luisa Fernandes',
    role: 'Coach Executiva',
    image: '/professional-woman-executive-coach.png',
    content: 'A mentoria do António foi fundamental para estruturar meu negócio digital. Hoje tenho uma marca pessoal sólida e receita recorrente consistente.',
    rating: 5,
    company: 'Leadership Coach'
  },
  {
    name: 'Pedro Oliveira',
    role: 'Diretor Comercial',
    image: '/professional-man-commercial-director.png',
    content: 'Os produtos digitais criados pela equipe do António superaram todas as expectativas. ROI de 500% no primeiro ano de lançamento.',
    rating: 5,
    company: 'Sales Pro'
  }
]

const companies = [
  { name: 'TechStart', logo: '/abstract-tech-logo.png' },
  { name: 'Digital Ventures', logo: '/digital-company-logo.png' },
  { name: 'Inovação Ltda', logo: '/innovation-company-logo.png' },
  { name: 'EduTech', logo: '/education-tech-logo.png' },
  { name: 'Leadership Coach', logo: '/coaching-company-logo.png' },
  { name: 'Sales Pro', logo: '/sales-company-logo.png' }
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-orange to-brand-cream dark:from-gray-800 dark:to-gray-900">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                      <div className="text-xs text-brand-orange">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-muted-foreground">
            Empresas que confiam no nosso trabalho
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
