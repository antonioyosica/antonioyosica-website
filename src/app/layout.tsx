import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://antonioyosica.com'),
  title: {
    default: 'António Yosica | Especialista em SEO & Método LEE',
    template: '%s | António Yosica'
  },
  description: 'António Yosica é especialista em SEO, engenheiro de software e criador do método LEE. Transforme sua marca pessoal e negócio digital com estratégias comprovadas.',
  verification: {
    google: 'your-google-verification-code',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://antonioyosica.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F26F21" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="António Yosica" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "António Yosica",
              "jobTitle": "Especialista em SEO e Engenheiro de Software",
              "description": "Especialista em SEO, Engenheiro de Software, Empreendedor Angolano e Criador do Método LEE",
              "url": "https://antonioyosica.com",
              "sameAs": [
                "https://linkedin.com/in/antonioyosica",
                "https://x.com/antonioyosica",
                "https://facebook.com/antonioyosica",
                "https://facebook.com/euantonioyosica",
                "https://instagram.com/antonioyosica",
                "https://threads.com/@antonioyosica",
                "https://tiktok.com/@antonioyosica",
                "https://youtube.com/@antonioyosica"
              ],
              "nationality": "Angolan",
              "knowsAbout": ["SEO", "Marketing Digital", "Marca Pessoal", "Desenvolvimento Web", "Empreendedorismo"],
              "alumniOf": {
                "@type": "Organization",
                "name": "Faculdade de Ciências Naturais da Universidade Agostinho Neto"
              }
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    }, function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
