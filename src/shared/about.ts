// Edita aqui: cada entrada nova aparece sozinha no site, ordenada por ano.
// Para contar um ano novo, acrescenta uma linha a `timeline`. Os anos em falta aparecem como "…" (muda SHOW_GAPS para false para os esconder).
export const SHOW_GAPS = true
export type Entry = { year: string; title: string; text?: string; to?: string }
export const timeline: Entry[] = [
  { year: '1997', title: 'Nasci' },
  { year: '1998', title: 'Primeiro aniversário' },
  // { year: '1999', title: '…', text: '…' },  ← acrescenta aqui os anos que faltam
  { year: '2017', title: 'Nómadas digitais e SEO', text: 'Descobri o conceito de nómadas digitais, o que mais tarde nos levou a iniciar a Vaawel. No mesmo ano, descobri a existência do SEO: um cliente queixou-se de não ver o site no Google quando o pesquisava.' },
  { year: '2019', title: 'Vaawel', text: 'Constituímos a empresa Vaawel.', to: '/negocios/vaawel' },
  { year: '2020', title: 'A pandemia e a semente do LEE', text: 'Com a pandemia da Covid-19, comecei a pensar naquilo a que hoje chamamos Método LEE.', to: '/lee' },
  { year: '2021', title: 'Filosofia', text: 'Comecei a frequentar Filosofia na UniEX.' },
  { year: '2022', title: 'Digital Factory', text: 'Comecei a trabalhar na Digital Factory.' },
  { year: '2024', title: 'Ucall', text: 'Mudei-me para a Ucall.' },
  { year: '2025', title: 'Monografia', text: 'Apresentei a minha monografia para a obtenção do grau de licenciado em Ciências da Computação, na Faculdade de Ciências Naturais (ex-Faculdade de Ciências) da Universidade Agostinho Neto.' },
  { year: '2026', title: 'Academia BAI', text: 'Mudei-me para a Academia BAI, como Técnico Principal de Desenvolvimento e Inovação.' }
]
export const career = [
  { org: 'Academia BAI', period: '2026 – hoje', role: 'Técnico Principal de Desenvolvimento e Inovação', now: true },
  { org: 'Ucall', period: '2024 – 2026', role: '', note: 'Mais de dois anos, em regime remoto, numa Direcção reconhecida como Melhor Direcção de Suporte 2025.' },
  { org: 'Digital Factory', period: '2022 – 2024', role: '' },
  { org: 'Vaawel', period: '2019 – hoje', role: 'Sócio-Gerente', now: true, slug: 'vaawel' }
]
export const education = [
  { school: 'Universidade Agostinho Neto, Faculdade de Ciências Naturais (ex-Faculdade de Ciências)', course: 'Ciências da Computação', note: 'Monografia apresentada em 2025.' },
  { school: 'UniEX', course: 'Filosofia', note: 'Iniciou em 2021.' }
]
export const businesses = [
  { slug: 'vaawel', name: 'Vaawel', role: 'Sócio-Gerente', tagline: 'Marketing Digital, Comunicação e Transformação Digital', text: '', url: '' }
]
