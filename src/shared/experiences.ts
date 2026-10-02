export const experiences: Record<string, { name: string; tag: string; keys: string[]; cta?: [string, string]; soon?: boolean; blocks: { h: string; p: string }[] }> = {
  'lee-cilab': { name: 'LEE CiLab', tag: 'Laboratório de clareza, visibilidade e diferenciação.', keys: ['Clareza', 'Visibilidade', 'Diferenciação'], cta: ['Agendar uma sessão', '/agendar'], blocks: [] },
  'lee-meet-greet': { name: 'LEE Meet & Greet', tag: 'Experiências e conversas.', keys: ['Experiências', 'Conversas'], cta: ['Agendar uma sessão', '/agendar'], blocks: [] },
  'clube-lee': { name: 'Clube LEE', tag: 'Comunidade.', keys: [], soon: true, blocks: [] },
  'lee-academy': { name: 'LEE Academy', tag: 'Educação.', keys: [], soon: true, blocks: [] }
  // blocks: [{ h: 'Para quem', p: '…' }, { h: 'Formato', p: '…' }]  ← preenche quando quiseres detalhar
}
