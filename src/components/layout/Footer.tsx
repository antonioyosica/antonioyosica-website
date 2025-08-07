import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'SEO Estratégico', href: '#services' },
    { name: 'Marca Pessoal', href: '#services' },
    { name: 'Produtos Digitais', href: '#services' },
    { name: 'Desenvolvimento Web', href: '#services' },
    { name: 'Mentoria', href: '#services' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Método LEE', href: '#lee-method' },
    { name: 'Casos de Sucesso', href: '#testimonials' },
    { name: 'LEE Club', href: '#ecosystem' },
    { name: 'Podcast', href: '#ecosystem' }
  ],
  company: [
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
    { name: 'Política de Privacidade', href: '/privacy' },
    { name: 'Termos de Uso', href: '/terms' },
    { name: 'Cookies', href: '/cookies' }
  ]
}

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'Twitter', href: '#', icon: Twitter }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 block">
              António Yosica
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              Especialista em SEO, criador do método LEE e mentor de empreendedores digitais. 
              Transformando marcas pessoais em autoridades reconhecidas.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                antonio@yosica.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +244 900 000 000
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Luanda, Angola
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} António Yosica. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
