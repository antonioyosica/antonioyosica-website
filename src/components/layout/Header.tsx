'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const servicesMenu = [
  {
    title: 'SEO Estratégico',
    href: '/servicos/seo-estrategico',
    description: 'Estratégias avançadas para dominar os resultados de busca'
  },
  {
    title: 'Consultoria em Marca Pessoal',
    href: '/servicos/marca-pessoal',
    description: 'Construa uma marca pessoal autêntica e poderosa'
  },
  {
    title: 'Produtos Digitais',
    href: '/servicos/produtos-digitais',
    description: 'Criação de produtos que geram receita recorrente'
  },
  {
    title: 'Web & Software Development',
    href: '/servicos/desenvolvimento-web',
    description: 'Websites e aplicações modernas e otimizadas'
  },
  {
    title: 'Mentoria para Empreendedores',
    href: '/servicos/mentoria',
    description: 'Acelere o crescimento do seu negócio'
  }
]

const ecosystemMenu = [
  {
    title: 'LEE Club',
    href: '/ecossistema/lee-club',
    description: 'Comunidade exclusiva de empreendedores'
  },
  {
    title: 'Podcast LEE Cast',
    href: '/ecossistema/podcast',
    description: 'Conversas que transformam carreiras'
  },
  {
    title: 'Canal YouTube',
    href: '/ecossistema/youtube',
    description: 'Conteúdo educacional gratuito'
  },
  {
    title: 'Projetos Sociais',
    href: '/ecossistema/projetos-sociais',
    description: 'Impacto social e capacitação jovem'
  }
]

const navigation = [
  { name: 'Sobre', href: '/sobre' },
  { name: 'Método LEE', href: '/metodo-lee' },
  { name: 'Livros', href: '/livros' },
  { name: 'Blog', href: '/blog' },
  { name: 'Podcast', href: '/ecossistema/podcast' },
  { name: 'YouTube', href: '/ecossistema/youtube' },
  { name: 'Trabalhar Comigo', href: '/trabalhar-comigo' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b' : 'bg-transparent'
    }`}>
      <nav className="flex items-center justify-between p-2 xs:pr-4 sm:pr-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
                src="https://s3.eu-west-2.amazonaws.com/s3.box/antonioyosica/antonioyosica-text.png"
                alt="António Yosica"
                width={96}
                height={32}
                className=""
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="mr-2"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "text-sm font-medium leading-6 px-3 py-2 rounded-md transition-colors",
                      pathname === item.href 
                        ? "text-brand-orange bg-brand-cream/20" 
                        : "text-foreground hover:text-brand-orange"
                    )}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button asChild className="bg-brand-orange hover:bg-brand-orange/90">
            <Link href="/contato">Falar Comigo</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                    src="https://s3.eu-west-2.amazonaws.com/s3.box/antonioyosica/antonioyosica-text.png"
                    alt="António Yosica"
                    width={64}
                    height={32}
                    className=""
                />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-brand-cream/20"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full bg-brand-orange hover:bg-brand-orange/90">
                    <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
                      Falar Comigo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
