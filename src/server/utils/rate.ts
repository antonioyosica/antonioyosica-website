const m = new Map<string, number[]>()
export function allow(key: string, n: number, ms: number) { const now = Date.now(), a = (m.get(key) || []).filter(t => now - t < ms); if (a.length >= n) return false; a.push(now); m.set(key, a); return true }
