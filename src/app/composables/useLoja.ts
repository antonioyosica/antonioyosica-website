// A loja vive em /loja/* (dev) e na raiz do subdomínio loja.* (produção). Links e detecção passam por aqui.
export function useLoja() {
  const route = useRoute(), onHost = useRequestURL().host.startsWith('loja.')
  const isLoja = computed(() => onHost || /^\/(loja|produto|ler|carrinho|checkout)(\/|$)/.test(route.path))
  const to = (p: string) => onHost ? p : p === '/' ? '/loja' : '/loja' + p
  return { onHost, isLoja, to }
}
