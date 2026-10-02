import { products } from '#shared/loja'
export type Line = { id: string; v: string; q: number }
export function useCart() {
  const lines = useState<Line[]>('cart', () => [])
  const items = computed(() => lines.value.map(l => { const p = products.find(x => x.slug === l.id)!, v = p?.variants?.find(x => x.id === l.v); return { ...l, p, vl: v?.label ?? '', unit: v?.price ?? p?.price ?? 0 } }).filter(i => i.p))
  const total = computed(() => items.value.reduce((s, i) => s + i.unit * i.q, 0))
  const count = computed(() => lines.value.reduce((s, l) => s + l.q, 0))
  const add = (id: string, v = '', q = 1) => { const l = lines.value.find(x => x.id === id && x.v === v); l ? (l.q = Math.min(10, l.q + q)) : lines.value.push({ id, v, q }) }
  const setQty = (id: string, v: string, q: number) => { const l = lines.value.find(x => x.id === id && x.v === v); if (l) l.q = Math.min(10, Math.max(1, q)) }
  const remove = (id: string, v: string) => { lines.value = lines.value.filter(x => !(x.id === id && x.v === v)) }
  return { lines, items, total, count, add, setQty, remove, clear: () => { lines.value = [] } }
}
