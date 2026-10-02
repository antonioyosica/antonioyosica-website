// Conteúdo do Método LEE (fonte: material base do António). Editar aqui, não nas páginas.
export type Layer = { k: string; t: string; c: string; q: string; items: [string, string][]; r: string }
export const layers: Layer[] = [
  { k: 'RACI', t: 'Emoção', c: 'cria memória', q: 'O que as pessoas sentem quando entram em contacto contigo.', items: [['Raiva', 'Isto desafia o que eu acredito.'], ['Admiração', 'Esta pessoa sabe o que faz.'], ['Curiosidade', 'Quero entender melhor.'], ['Inspiração', 'Quero fazer parte, seguir, aplicar.']], r: 'Sem emoção não há memória.' },
  { k: 'PEEE', t: 'Comportamento', c: 'cria movimento', q: 'Como tu ages no mundo.', items: [['Pensar', 'Estratégia, clareza, intenção.'], ['Escutar', 'Mercado, pessoas, contexto.'], ['Executar', 'Acção visível, consistente.'], ['Evoluir', 'Ajustar, melhorar, crescer.']], r: 'Pensar sem executar é vaidade. Executar sem evoluir é estagnação.' },
  { k: 'VARES', t: 'Percepção externa', c: 'cria escolha', q: 'Como és percebido. O que os outros vêem em ti.', items: [['Visível', 'As pessoas vêem-te.'], ['Autêntico', 'Soas real, não fabricado.'], ['Relevante', 'Fazes sentido agora.'], ['Especialista', 'Dominas algo concreto.'], ['Seleccionável', 'És escolhido, não imploras.']], r: 'As pessoas não escolhem quem existe, escolhem quem se destaca.' },
  { k: 'CONEX', t: 'Relação', c: 'cria vínculo', q: 'O vínculo emocional que faz alguém ficar. Como as pessoas se ligam a ti depois do primeiro contacto.', items: [['Confiança', 'Posso acreditar nesta pessoa.'], ['Orientação', 'Esta pessoa ajuda-me a decidir melhor.'], ['Narrativa', 'Vejo-me dentro da história que ela conta.'], ['Empatia', 'Esta pessoa entende-me.'], ['X, o factor humano', 'Não é apenas marca, é pessoas.']], r: 'Sem conexão, toda atenção é temporária.' },
  { k: 'PROVA', t: 'Credibilidade', c: 'cria confiança', q: 'Porque acreditam em ti mesmo quando não estás presente.', items: [['Projectos', 'Fizeste, não apenas falaste.'], ['Resultados', 'Há impacto mensurável.'], ['Outros falam', 'Testemunhos, referências, boca-a-boca.'], ['Veracidade', 'Não exageras, sustentas.'], ['Autoridade', 'És citado, recomendado, lembrado.']], r: 'Autoridade não se declara. Demonstra-se.' },
  { k: 'ESCALA', t: 'Multiplicação', c: 'cria liberdade', q: 'Quando deixas de depender apenas do teu tempo e presença.', items: [['Estrutura', 'Processos claros.'], ['Sistemas', 'Funciona sem improviso constante.'], ['Continuidade', 'Entrega consistente.'], ['Alavancagem', 'Um esforço gera muitos resultados.'], ['Liderança', 'Outros executam com o teu padrão.'], ['Autonomia', 'O sistema vive.']], r: 'Crescimento sem sistema é esforço repetido.' },
  { k: 'LEGADO', t: 'Impacto', c: 'cria sentido', q: 'O que permanece mesmo quando sais de cena.', items: [['Leitura de mundo', 'Mudaste como alguém pensa.'], ['Evolução alheia', 'Pessoas cresceram contigo.'], ['Geração de líderes', 'Não criaste seguidores, criaste referências.'], ['Alinhamento', 'O que fazes reflecte quem és.'], ['Direcção', 'Deixaste um caminho.'], ['Originalidade', 'Isto apenas poderia vir de ti.']], r: 'Visibilidade dá palco. Legado dá eternidade.' }
]
export const mandamentos = [
  'Não aceitarás ser invisível em lugar algum onde existam decisões.',
  'Não confundirás talento com existência percebida.',
  'Construirás memória antes de exigir reconhecimento.',
  'Organizarás a tua presença para seres encontrado… antes de seres necessário.',
  'Nunca competirás por atenção depois da decisão iniciada.\nA escolha acontece antes do confronto.',
  'Eliminarás tudo o que te torna difícil de localizar, compreender ou escolher.',
  'Não dependerás da descoberta acidental.\nSer encontrado será consequência de arquitectura.',
  'Transformarás valor em sinal claro, acessível e inevitável.',
  'Medirás a tua relevância pela frequência com que és escolhido… não pelo quanto trabalhas.',
  'Tratarás a memória alheia como território estratégico.',
  'Onde não fores lembrado, construirás lembrança.\nOnde não fores encontrado, criarás caminho.\nOnde não fores escolhido, redefinirás posicionamento.',
  'Nunca permitirás que a tua ausência seja irrelevante.',
  'Entenderás que visibilidade sem escolha é ruído…\ne escolha sem repetição é acidente.',
  'Aceitarás que o mundo não te deve atenção.\nMas pode ser estruturado para te dar preferência.',
  'E acima de tudo… existirás sempre dentro do campo onde decisões acontecem.'
]
export const pecados = [
  { t: 'Anonimato Funcional', p: 'Viver sem ser lembrado. Trabalhar sem deixar rastro. Ser invisível mesmo estando presente.', f: 'Quem comete este pecado ignora a primeira regra do mundo: se não existe na memória alheia, não existe de facto.' },
  { t: 'Ocultamento Estrutural', p: 'Não organizar o próprio acesso. Esconder competências, conquistas ou soluções. Não criar caminhos claros para ser encontrado.', f: 'Ser bom e não ser encontrado é equivalente a não existir.' },
  { t: 'Inércia Decisória', p: 'Não ser escolhido quando a oportunidade aparece. Esperar que a atenção ou a decisão venha por acaso. Viver à espera do mundo decidir por si.', f: 'O mercado reage apenas ao que é inevitável, não ao que é opcional.' }
]
