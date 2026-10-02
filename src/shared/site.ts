// Fonte única de conteúdo: alimenta as páginas E o concierge de IA.
export type Block = { h: string; p: string; tag?: string; to?: string }
export type SitePage = { title: string; intro: string; tone: 'g' | 'c'; blocks: Block[] }
export const stages = ['lembrado', 'encontrado', 'escolhido'] as const
export const pages: Record<string, SitePage> = {
  lee: { title: 'O Método LEE', intro: 'Como transformar capacidade em reconhecimento? Lembrado. Encontrado. Escolhido.', tone: 'g', blocks: [
    { h: 'Lembrado', p: 'A batalha pela memória. Como fazer as pessoas certas lembrarem-se de ti?' },
    { h: 'Encontrado', p: 'A batalha pela descoberta. Como fazer com que as pessoas certas encontrem-te?' },
    { h: 'Escolhido', p: 'A batalha pela decisão. Por que razão alguém escolhe-te entre alternativas?' },
    { h: 'RACI', p: 'Raiva, Admiração, Curiosidade, Inspiração: a camada emocional da atenção.' }] },
  ideias: { title: 'Ideias', intro: 'Ser competente não é suficiente. Visibilidade não é fama.', tone: 'c', blocks: ['Carreira', 'Visibilidade', 'Estratégia', 'Tecnologia', 'Marca pessoal', 'LEE', 'Liderança'].map(h => ({ h, p: 'Textos a caminho.', tag: 'em breve' })) },
  experiencias: { title: 'Entre no universo LEE', intro: 'Experiências em construção.', tone: 'g', blocks: [
    { h: 'LEE CiLab', p: 'Laboratório de clareza, visibilidade e diferenciação.', tag: 'em construção' },
    { h: 'LEE Meet & Greet', p: 'Experiências e conversas.', tag: 'em construção' },
    { h: 'Clube LEE', p: 'Comunidade.', tag: 'em construção' },
    { h: 'LEE Academy', p: 'Educação.', tag: 'em construção' }] },
  sobre: { title: 'Sobre', intro: 'Eu passei anos tentando entender por que algumas pessoas são escolhidas e outras não.', tone: 'c', blocks: [
    { h: 'A pergunta', p: 'Vi talentos incríveis serem ignorados, na sombra de quem, muitas vezes, simplesmente sabia aparecer melhor.' },
    { h: 'O caminho', p: 'A programação aguçou a minha lógica. O SEO deu-me alcance. A vida deu-me histórias. E tudo começou a fazer sentido.' },
    { h: 'António Yosica', p: 'Engenheiro de Software, Estrategista, Criador do Método LEE. Mais de 15 anos entre tecnologia, negócios e estratégia. Sócio-Gerente da Vaawel.' }] },
  'trabalhe-comigo': { title: 'Trabalhe comigo', intro: 'Três caminhos.', tone: 'c', blocks: [
    { h: 'Profissionais', p: 'Quero ser mais lembrado, encontrado e escolhido.', to: '/agendar' },
    { h: 'Empresas', p: 'Quero tornar a minha organização mais visível e estratégica.', to: '/agendar' },
    { h: 'Eventos', p: 'Quero António Yosica no meu evento.', to: '/convidar' }] },
  loja: { title: 'Loja', intro: 'Livros, cursos, ingressos e brindes. Os livros gratuitos lêem-se no próprio site. Modo demonstração.', tone: 'g', blocks: [] },
  contacto: { title: 'Vamos conversar.', intro: 'Talvez tenhas uma pergunta. Talvez tenhas uma ideia. Talvez tenhas um problema que ainda não conseguiste resolver. Comecemos por aí.', tone: 'g', blocks: [] }
}
export const routes = ['/', ...Object.keys(pages).map(k => '/' + k), '/lee', '/agendar', '/convidar', '/galeria', '/experiencias/lee-cilab', '/experiencias/lee-meet-greet', '/negocios/vaawel', '/ideias/competencia-nao-basta']
