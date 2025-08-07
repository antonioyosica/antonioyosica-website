'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ChevronLeft, ChevronRight, Moon, Sun, Bookmark, ArrowLeft, Lock, Eye } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'

// Mock book content for different books
const booksContent = {
  'metodo-lee': {
    1: {
      title: 'A Era da Invisibilidade Digital',
      content: `
        <p>Vivemos em uma era paradoxal. Nunca foi tão fácil criar conteúdo, construir uma presença online e alcançar milhões de pessoas. Ao mesmo tempo, nunca foi tão difícil ser verdadeiramente visto, lembrado e escolhido.</p>
        
        <p>Todos os dias, mais de 4 bilhões de pessoas se conectam à internet. São publicados 500 milhões de tweets, 95 milhões de fotos no Instagram e 720.000 horas de vídeo no YouTube. É um oceano infinito de conteúdo onde a maioria dos profissionais talentosos simplesmente desaparece.</p>
        
        <p>Eu chamo isso de <strong>A Era da Invisibilidade Digital</strong>.</p>
        
        <p>Durante meus anos como consultor em SEO e marketing digital, observei um padrão perturbador: profissionais extremamente competentes, com soluções incríveis e histórias inspiradoras, que permaneciam completamente invisíveis online. Eles tinham o talento, tinham a experiência, mas não tinham a visibilidade.</p>
        
        <p>E visibilidade, meu amigo, é tudo no mundo moderno.</p>
        
        <p>Pense comigo: de que adianta ser o melhor profissional do mundo se ninguém sabe que você existe? De que serve ter a solução perfeita se ela nunca chega até quem precisa dela?</p>
        
        <p>Foi essa reflexão que me levou a desenvolver o que hoje chamo de <strong>Método LEE</strong> - uma metodologia sistemática para transformar pessoas invisíveis em referências visíveis.</p>
        
        <p>Mas antes de mergulharmos no método, preciso que você entenda uma verdade fundamental: <em>talento sem visibilidade é como ouro enterrado - ninguém vê, ninguém valoriza.</em></p>
        
        <p>Este livro vai mudar isso para você. Para sempre.</p>
      `,
      free: true
    },
    2: {
      title: 'O Nascimento do Método LEE',
      content: `
        <p>O Método LEE não nasceu de uma teoria acadêmica ou de um insight repentino. Ele emergiu da observação sistemática de centenas de casos reais - sucessos e fracassos que me ensinaram os padrões ocultos da visibilidade digital.</p>
        
        <p>Tudo começou em 2019, quando comecei a documentar meticulosamente os resultados dos meus clientes. Alguns explodiam em visibilidade e autoridade, enquanto outros, igualmente talentosos, permaneciam estagnados.</p>
        
        <p>A pergunta que me atormentava era simples: <strong>Por que alguns profissionais se tornam referências enquanto outros permanecem invisíveis?</strong></p>
        
        <p>Após analisar mais de 500 casos, três padrões cristalinos emergiram:</p>
        
        <h3>1. Os Lembrados</h3>
        <p>Profissionais que se tornaram referências tinham algo em comum: eles eram <strong>memoráveis</strong>. Não necessariamente os mais barulhentos, mas aqueles que criavam uma conexão genuína e duradoura com seu público.</p>
        
        <h3>2. Os Encontrados</h3>
        <p>Eles dominavam a arte de serem <strong>descobertos</strong>. Quando alguém procurava por soluções em seu nicho, eles apareciam. Não por acaso, mas por estratégia.</p>
        
        <h3>3. Os Escolhidos</h3>
        <p>Mais importante: eles convertiam visibilidade em resultados. Ser visto é apenas o começo. Ser <strong>escolhido</strong> é o que realmente importa.</p>
        
        <p>Assim nasceu o acrônimo <strong>LEE</strong>: <strong>L</strong>embrado, <strong>E</strong>ncontrado, <strong>E</strong>scolhido.</p>
        
        <p>Mas o método vai muito além de um simples acrônimo. É um sistema completo, testado e refinado através de centenas de implementações reais.</p>
        
        <p>Nas próximas páginas, você vai descobrir exatamente como aplicar cada um desses pilares para transformar sua presença digital e se tornar uma autoridade reconhecida em seu nicho.</p>
        
        <p>Prepare-se. Sua jornada da invisibilidade para a autoridade começa agora.</p>
      `,
      free: true
    },
    3: {
      title: 'Lembrado: A Arte de Ser Memorável',
      content: `
        <p>Ser lembrado não é sobre ser o mais alto, o mais barulhento ou o mais extravagante. É sobre criar uma impressão duradoura que ressoa profundamente com seu público-alvo.</p>
        
        <p>Pense nas pessoas que marcaram sua vida profissional. Provavelmente não foram aquelas que gritavam mais alto, mas sim aquelas que disseram algo que ficou gravado em sua mente, que ofereceram uma perspectiva única ou que simplesmente foram autenticamente elas mesmas.</p>
        
        <p>O primeiro pilar do Método LEE - <strong>Lembrado</strong> - é construído sobre quatro fundamentos essenciais:</p>
        
        <h3>1. Autenticidade Magnética</h3>
        <p>Sua autenticidade é seu maior diferencial. Em um mundo cheio de cópias, ser genuinamente você é revolucionário. Mas atenção: autenticidade não significa compartilhar tudo sobre sua vida. Significa ser consistente com seus valores, crenças e personalidade em todas as suas interações.</p>
        
        <h3>2. Proposta de Valor Única</h3>
        <p>O que você faz que ninguém mais faz exatamente da mesma forma? Esta não é uma pergunta sobre seu produto ou serviço, mas sobre sua abordagem única, sua perspectiva diferenciada, sua forma particular de resolver problemas.</p>
        
        <h3>3. Storytelling Estratégico</h3>
        <p>Humanos são criaturas narrativas. Não lembramos de dados, lembramos de histórias. Sua jornada, seus fracassos, suas vitórias - tudo isso forma uma narrativa poderosa que conecta você ao seu público de forma emocional.</p>
        
        <h3>4. Consistência Visual e Verbal</h3>
        <p>Ser lembrado também é sobre criar padrões reconhecíveis. Suas cores, sua linguagem, seu tom de voz - tudo deve trabalhar em harmonia para criar uma identidade coesa e memorável.</p>
        
        <p>Mas aqui está o segredo que poucos entendem: <strong>ser lembrado é apenas o primeiro passo</strong>. De nada adianta ser memorável se as pessoas não conseguem te encontrar quando precisam de você.</p>
        
        <p>E é exatamente isso que vamos descobrir no próximo capítulo...</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4>🔒 Conteúdo Premium</h4>
          <p>Para continuar lendo e descobrir os segredos completos do Método LEE, incluindo:</p>
          <ul>
            <li>✨ Estratégias avançadas de SEO</li>
            <li>🎯 Técnicas de conversão comprovadas</li>
            <li>📈 Casos de sucesso detalhados</li>
            <li>🛠️ Ferramentas e templates exclusivos</li>
          </ul>
          <p><strong>Adquira o livro completo por apenas €29</strong></p>
        </div>
      `,
      free: true
    },
    4: {
      title: 'Encontrado: Dominando o SEO Estratégico',
      content: `
        <p>Este capítulo está disponível apenas na versão completa do livro.</p>
        <p>Descubra as estratégias avançadas de SEO que fazem a diferença entre ser invisível e ser encontrado por quem realmente importa.</p>
      `,
      free: false
    }
  },
  'seo-estrategico': {
    1: {
      title: 'Fundamentos do SEO Moderno',
      content: `
        <p>O SEO não é mais sobre truques ou hacks. É sobre entender profundamente como os mecanismos de busca funcionam e como entregar exatamente o que os usuários procuram.</p>
        
        <p>Neste primeiro capítulo, vamos estabelecer as bases sólidas do SEO moderno, desmistificando conceitos e preparando você para as estratégias avançadas que virão.</p>
        
        <h3>O que Realmente é SEO?</h3>
        <p>SEO (Search Engine Optimization) é a arte e ciência de otimizar seu conteúdo para ser encontrado, compreendido e valorizado pelos mecanismos de busca.</p>
        
        <p>Mas aqui está a verdade: <strong>SEO não é sobre enganar o Google</strong>. É sobre criar a melhor experiência possível para seus usuários.</p>
        
        <h3>Os 3 Pilares do SEO Moderno</h3>
        <p><strong>1. Relevância:</strong> Seu conteúdo responde exatamente à pergunta do usuário?</p>
        <p><strong>2. Autoridade:</strong> Você é reconhecido como uma fonte confiável?</p>
        <p><strong>3. Experiência:</strong> Seu site oferece uma experiência excepcional?</p>
        
        <p>Estes pilares guiarão todas as estratégias que você aprenderá neste livro.</p>
      `,
      free: true
    },
    2: {
      title: 'Pesquisa de Palavras-chave Avançada',
      content: `
        <p>A pesquisa de palavras-chave é o alicerce de qualquer estratégia de SEO bem-sucedida. Mas não se trata apenas de encontrar termos com alto volume de busca.</p>
        
        <p>Trata-se de entender a <strong>intenção por trás de cada busca</strong> e criar conteúdo que satisfaça perfeitamente essa necessidade.</p>
        
        <h3>Os 4 Tipos de Intenção de Busca</h3>
        <p><strong>1. Informacional:</strong> O usuário quer aprender algo</p>
        <p><strong>2. Navegacional:</strong> O usuário procura um site específico</p>
        <p><strong>3. Transacional:</strong> O usuário quer comprar algo</p>
        <p><strong>4. Investigação Comercial:</strong> O usuário pesquisa antes de comprar</p>
        
        <p>Compreender essas intenções é fundamental para criar conteúdo que converte.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4>🔒 Conteúdo Premium</h4>
          <p>Para continuar lendo e descobrir:</p>
          <ul>
            <li>🔍 Ferramentas avançadas de pesquisa</li>
            <li>📊 Análise de concorrência</li>
            <li>🎯 Estratégias de long-tail</li>
            <li>📈 Métricas que realmente importam</li>
          </ul>
          <p><strong>Adquira o livro completo por apenas €35</strong></p>
        </div>
      `,
      free: true
    }
  }
}

export default function LerLivroPage() {
  const params = useParams()
  const bookId = params.id as string
  const [currentChapter, setCurrentChapter] = useState(1)
  const [readingMode, setReadingMode] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState(18)
  const [bookmarked, setBookmarked] = useState(false)
  const [progress, setProgress] = useState(0)

  const bookContent = booksContent[bookId as keyof typeof booksContent]
  
  if (!bookContent) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Livro não encontrado</h1>
          <Button asChild>
            <Link href="/livros">Voltar aos Livros</Link>
          </Button>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => Math.min(prev + 0.5, 100))
    }, 1000)
    return () => clearInterval(timer)
  }, [currentChapter])

  const chapter = bookContent[currentChapter as keyof typeof bookContent]
  const canReadChapter = chapter?.free || false
  const maxChapter = Object.keys(bookContent).length

  const nextChapter = () => {
    if (currentChapter < maxChapter) {
      setCurrentChapter(prev => prev + 1)
      setProgress(0)
    }
  }

  const prevChapter = () => {
    if (currentChapter > 1) {
      setCurrentChapter(prev => prev - 1)
      setProgress(0)
    }
  }

  if (readingMode) {
    return (
      <div className={`min-h-screen transition-all duration-500 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-amber-50 text-gray-900'
      }`}>
        {/* Reading Mode Header */}
        <div className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReadingMode(false)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Sair do Modo Leitura
              </Button>
              
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Capítulo {currentChapter} de {maxChapter}
                </div>
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-orange"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setBookmarked(!bookmarked)}
                >
                  <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-brand-orange text-brand-orange' : ''}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Reading Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {canReadChapter ? (
                <>
                  <h1 className="text-4xl font-bold mb-8" style={{ fontSize: fontSize + 8 }}>
                    {chapter.title}
                  </h1>
                  <div 
                    className="prose prose-lg max-w-none leading-relaxed"
                    style={{ fontSize }}
                    dangerouslySetInnerHTML={{ __html: chapter.content }}
                  />
                </>
              ) : (
                <div className="text-center py-16">
                  <Lock className="h-16 w-16 text-brand-orange mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-4">Conteúdo Premium</h2>
                  <p className="text-muted-foreground mb-8">
                    Este capítulo está disponível apenas na versão completa do livro.
                  </p>
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                    Comprar Livro Completo
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t">
            <Button
              variant="outline"
              onClick={prevChapter}
              disabled={currentChapter === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Capítulo Anterior
            </Button>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
              >
                A-
              </Button>
              <span className="text-sm">{fontSize}px</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
              >
                A+
              </Button>
            </div>

            <Button
              variant="outline"
              onClick={nextChapter}
              disabled={currentChapter === maxChapter}
            >
              Próximo Capítulo
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href={`/livros/${bookId}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Livro
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <h3 className="font-semibold flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Índice
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(bookContent).map(([num, chap]) => (
                  <button
                    key={num}
                    onClick={() => setCurrentChapter(parseInt(num))}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentChapter === parseInt(num)
                        ? 'bg-brand-orange text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Cap. {num}</span>
                      {chap.free ? (
                        <Badge className="bg-green-500 text-xs">Grátis</Badge>
                      ) : (
                        <Lock className="h-3 w-3" />
                      )}
                    </div>
                    <div className="text-xs opacity-75 mt-1 line-clamp-2">
                      {chap.title}
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">
                      Capítulo {currentChapter}: {chapter?.title}
                    </h1>
                    {chapter?.free ? (
                      <Badge className="bg-green-500">Leitura Gratuita</Badge>
                    ) : (
                      <Badge variant="secondary">Conteúdo Premium</Badge>
                    )}
                  </div>
                  <Button
                    onClick={() => setReadingMode(true)}
                    className="bg-brand-orange hover:bg-brand-orange/90"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Modo Leitura
                  </Button>
                </div>

                {canReadChapter ? (
                  <div 
                    className="prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: chapter.content }}
                  />
                ) : (
                  <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Lock className="h-16 w-16 text-brand-orange mx-auto mb-6" />
                    <h3 className="text-xl font-bold mb-4">Conteúdo Premium</h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      Este capítulo faz parte do conteúdo premium. Adquira o livro completo 
                      para continuar sua jornada de transformação.
                    </p>
                    <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                      Comprar Livro Completo
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={prevChapter}
                disabled={currentChapter === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Capítulo Anterior
              </Button>

              <Button
                variant="outline"
                onClick={nextChapter}
                disabled={currentChapter === maxChapter}
              >
                Próximo Capítulo
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
