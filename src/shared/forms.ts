export type Field = { k: string; l: string; t?: 'email' | 'date' | 'select' | 'textarea'; req?: boolean; opts?: string[] }
export const forms: Record<string, Field[]> = {
  sessao: [
    { k: 'nome', l: 'Nome', req: true }, { k: 'email', l: 'E-mail', t: 'email', req: true }, { k: 'telefone', l: 'Telefone / WhatsApp' },
    { k: 'tema', l: 'Sobre o quê?', t: 'select', req: true, opts: ['Marca pessoal (profissional)', 'Empresa / organização', 'LEE CiLab', 'LEE Meet & Greet', 'Outro'] },
    { k: 'periodo', l: 'Melhores dias e horários' }, { k: 'mensagem', l: 'O que queres resolver?', t: 'textarea', req: true }],
  evento: [
    { k: 'nome', l: 'Nome', req: true }, { k: 'email', l: 'E-mail', t: 'email', req: true }, { k: 'organizacao', l: 'Organização' },
    { k: 'evento', l: 'Nome do evento', req: true }, { k: 'data', l: 'Data prevista', t: 'date' }, { k: 'local', l: 'Local ou plataforma' },
    { k: 'formato', l: 'Formato', t: 'select', opts: ['Presencial', 'Online', 'Híbrido'] }, { k: 'audiencia', l: 'Público esperado' },
    { k: 'mensagem', l: 'Conta-me mais', t: 'textarea', req: true }]
}
