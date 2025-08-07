'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'antonio@yosica.com',
    link: 'mailto:antonio@yosica.com'
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    value: '+244 900 000 000',
    link: 'https://wa.me/244900000000'
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Luanda, Angola',
    link: '#'
  },
  {
    icon: Calendar,
    title: 'Agendar Reunião',
    value: 'Calendly',
    link: 'https://calendly.com/antonioyosica'
  }
]

const services = [
  'SEO Estratégico',
  'Consultoria em Marca Pessoal',
  'Produtos Digitais',
  'Web & Software Development',
  'Mentoria para Empreendedores',
  'Palestra/Workshop',
  'Outro'
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Vamos <span className="bg-gradient-to-r from-brand-orange to-brand-cream bg-clip-text text-transparent">conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua marca pessoal e acelerar seu negócio? 
            Entre em contato e vamos descobrir como posso ajudá-lo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Solicitar Orçamento</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e receba uma proposta personalizada em até 24 horas.
                </p>
              </CardHeader>
              
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
                    <p className="text-muted-foreground">
                      Obrigado pelo seu interesse. Entrarei em contato em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Nome Completo *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Empresa/Projeto</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Nome da sua empresa ou projeto"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Serviço de Interesse *</label>
                        <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Orçamento Disponível</label>
                        <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Faixa de investimento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1000-2500">€1.000 - €2.500</SelectItem>
                            <SelectItem value="2500-5000">€2.500 - €5.000</SelectItem>
                            <SelectItem value="5000-10000">€5.000 - €10.000</SelectItem>
                            <SelectItem value="10000+">€10.000+</SelectItem>
                            <SelectItem value="custom">Orçamento personalizado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Prazo Desejado</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Quando precisa começar?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">O mais rápido possível</SelectItem>
                          <SelectItem value="1month">Dentro de 1 mês</SelectItem>
                          <SelectItem value="3months">Dentro de 3 meses</SelectItem>
                          <SelectItem value="6months">Dentro de 6 meses</SelectItem>
                          <SelectItem value="flexible">Flexível</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Mensagem *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Conte-me mais sobre seu projeto, objetivos e desafios..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full text-lg py-6" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Outras formas de contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-cream rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">{info.title}</div>
                      <div className="font-semibold">{info.value}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-orange to-brand-cream rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Resposta Garantida</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Resposta em até 24 horas
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Consultoria inicial gratuita
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Proposta personalizada
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Sem compromisso
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Siga-me nas redes sociais</h4>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white hover:bg-brand-orange/90 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <span className="text-sm font-bold">ig</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                  <span className="text-sm font-bold">yt</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <span className="text-sm font-bold">x</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
