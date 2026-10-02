// DADOS FICTÍCIOS: loja em modo demonstração. Substituir pelo catálogo real (ou pelo backoffice).
import { mandamentos, pecados } from './lee'
export type Variant = { id: string; label: string; price?: number }
export type Product = { slug: string; name: string; type: 'livro' | 'curso' | 'vestuario' | 'brinde' | 'ingresso'; fmt?: 'digital' | 'fisico'; price: number; desc: string; tone: 'g' | 'c' | 'o'; variants?: Variant[]; stock?: number; read?: boolean }
export const types: Record<string, string> = { livro: 'Livros', curso: 'Cursos', ingresso: 'Ingressos', vestuario: 'Vestuário', brinde: 'Brindes' }
export const products: Product[] = [
  { slug: 'mandamentos-lee-demo', name: 'Os Mandamentos LEE', type: 'livro', fmt: 'digital', price: 0, read: true, tone: 'g', desc: 'Livro gratuito de demonstração, com os 15 mandamentos. Lê-o aqui, no site.' },
  { slug: 'pecados-lee-demo', name: 'Os Pecados Capitais', type: 'livro', fmt: 'digital', price: 0, read: true, tone: 'c', desc: 'Livro gratuito de demonstração, com os 3 pecados contra o Método LEE. Lê-o aqui, no site.' },
  { slug: 'lee-edicao-completa-demo', name: 'Método LEE, edição completa', type: 'livro', fmt: 'digital', price: 9500, tone: 'c', desc: 'E-book fictício. Download assim que o pagamento for confirmado.' },
  { slug: 'lee-livro-fisico-demo', name: 'Método LEE, edição impressa', type: 'livro', fmt: 'fisico', price: 15000, stock: 24, tone: 'g', desc: 'Livro físico fictício, com envio ou levantamento em eventos.' },
  { slug: 'curso-lee-academy-demo', name: 'LEE Academy, curso em vídeo', type: 'curso', fmt: 'digital', price: 45000, tone: 'g', desc: 'Curso em vídeo fictício, com acesso à área do aluno depois da compra.' },
  { slug: 'camisola-lee-demo', name: 'Camisola Y', type: 'vestuario', fmt: 'fisico', price: 8500, stock: 40, tone: 'o', variants: ['S', 'M', 'L', 'XL'].map(s => ({ id: s, label: s })), desc: 'Camisola fictícia com o símbolo Y.' },
  { slug: 'bone-y-demo', name: 'Boné Y', type: 'vestuario', fmt: 'fisico', price: 5000, stock: 30, tone: 'o', desc: 'Boné fictício, tamanho único.' },
  { slug: 'caneca-lee-demo', name: 'Caneca LEE', type: 'brinde', fmt: 'fisico', price: 3500, stock: 60, tone: 'c', desc: 'Brinde fictício: Lembrado. Encontrado. Escolhido.' },
  { slug: 'ingresso-meet-greet-demo', name: 'Ingresso LEE Meet & Greet', type: 'ingresso', price: 7500, tone: 'g', variants: [{ id: 'normal', label: 'Normal', price: 7500 }, { id: 'vip', label: 'VIP', price: 15000 }], desc: 'Bilhete fictício com QR code. Data e local a definir.' }
]
export const kz = (n: number) => n === 0 ? 'Grátis' : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Kz'
const rom = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV']
// Livros gratuitos legíveis no site (usam o teu conteúdo de shared/lee.ts)
export const books: Record<string, { title: string; chapters: { t: string; p: string[] }[] }> = {
  'mandamentos-lee-demo': { title: 'Os Mandamentos LEE', chapters: [[0, 5], [5, 10], [10, 15]].map(([a, b]) => ({ t: `Mandamentos ${rom[a]} a ${rom[b - 1]}`, p: mandamentos.slice(a, b).flatMap((m, i) => [rom[a + i], ...m.split('\n')]) })) },
  'pecados-lee-demo': { title: 'Os Pecados Capitais', chapters: pecados.map((x, i) => ({ t: `Pecado ${i + 1}: ${x.t}`, p: [x.p, x.f] })) }
}
