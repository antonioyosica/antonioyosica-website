// Artigos. Para publicar: nova entrada no topo. '## ' no início = subtítulo.
export type Post = { slug: string; title: string; date: string; cat: string; excerpt: string; body: string[] }
export const posts: Post[] = [
  { slug: 'competencia-nao-basta', title: 'Ser competente não é suficiente', date: '2026-10-01', cat: 'Visibilidade',
    excerpt: 'Visibilidade não é sobre ser famoso. É sobre ser encontrado pelas pessoas certas, no momento certo, pelo motivo certo.',
    body: [ // EXEMPLO montado com textos do teu storytelling: substitui pelo artigo real
      'Eu via talentos incríveis serem ignorados. Pessoas boas, inteligentes e esforçadas, vivendo na sombra de pessoas que, muitas vezes, simplesmente sabiam aparecer melhor.',
      'E aquilo incomodava-me. Queria entender como a atenção funciona. Por que alguns nomes ficam gravados na memória enquanto outros evaporam como se nunca tivessem existido.',
      '## Visibilidade não é fama',
      'Visibilidade não é sobre ser famoso. É sobre ser encontrado pelas pessoas certas, no momento certo, pelo motivo certo.',
      'Porque competência é fundamental. Mas competência, quando ninguém a percebe, dificilmente se transforma em reconhecimento.',
      '## Talvez o problema fosse estratégia',
      'O mundo não escolhe sempre quem é melhor. Muitas vezes, escolhe aquilo que vê, lembra e encontra. Talvez o problema nunca tenha sido falta de talento. Talvez fosse falta de estratégia.'] }
]
