<script setup lang="ts">
import { layers, mandamentos, pecados } from '#shared/lee'
useSeoMeta({ title: 'O Método LEE', description: 'LEE: Lembrado, Encontrado, Escolhido. Um núcleo de visibilidade humana e profissional, em sete camadas.', ogTitle: 'O Método LEE — António Yosica' })
const root = ref<HTMLElement>(), step = ref(0), open = ref(0), ask = useState('ask')
const roman = (n: number) => ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV'][n]
const on = (a: number, b = a) => step.value >= a && step.value <= b
function f() {
  const r = root.value!.getBoundingClientRect(), p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)))
  step.value = p < .1 ? 0 : p < .2 ? 1 : p < .3 ? 2 : p < .42 ? 3 : p < .66 ? 4 : p < .78 ? 5 : 6
}
onMounted(() => { addEventListener('scroll', f, { passive: true }); f() })
onBeforeUnmount(() => removeEventListener('scroll', f))
</script>
<template>
  <section ref="root" class="g rv" aria-label="O nascimento do Método LEE">
    <div class="pin">
      <h1 class="mid q" :class="{ on: on(0) }">Como transformar capacidade em reconhecimento?</h1>
      <div class="lt" :class="{ on: on(1, 3) }" aria-hidden="true"><i :class="{ on: step >= 1 }">L</i><i :class="{ on: step >= 2 }">E</i><i :class="{ on: step >= 3 }">E</i></div>
      <div class="wd" :class="{ on: on(4, 5), sub: on(5) }">
        <p>Lembrado<small>Quem não é lembrado, não é encontrado.</small></p>
        <p>Encontrado<small>Quem não é encontrado, não é escolhido.</small></p>
        <p>Escolhido</p>
      </div>
      <div class="mt" :class="{ on: on(6) }"><h2 class="big">O Método LEE</h2><p>LEE não é apenas um método. É um núcleo de visibilidade humana e profissional.</p><a class="cta" href="#camadas">Ver as sete camadas ↓</a></div>
    </div>
  </section>

  <section id="camadas" class="c ly">
    <h2 class="big">Sete camadas.</h2>
    <p class="lede">Cada camada cria uma coisa. Juntas, fazem de ti a escolha.</p>
    <div class="stack">
      <div v-for="(l, i) in layers" :key="l.k" class="lr" :class="{ open: open === i }">
        <button :aria-expanded="open === i" @click="open = i"><b>{{ l.k }}</b><span>{{ l.t }}</span><em>{{ l.c }}</em></button>
        <div class="bd"><div>
          <p class="lq">{{ l.q }}</p>
          <dl><template v-for="[w, m] in l.items" :key="w"><dt>{{ w }}</dt><dd>{{ m }}</dd></template></dl>
          <p class="gold"><span class="hand">Regra de ouro</span>{{ l.r }}</p>
        </div></div>
      </div>
    </div>
  </section>

  <section class="g md">
    <h2 class="big">Os Mandamentos LEE</h2>
    <ol><li v-for="(m, i) in mandamentos" :key="i"><span class="rn">{{ roman(i) }}</span><p>{{ m }}</p></li></ol>
  </section>

  <section class="c pc">
    <h2 class="big">Pecados capitais contra o Método LEE</h2>
    <article v-for="(p, i) in pecados" :key="p.t"><span class="rn">Pecado {{ i + 1 }}</span><h3>{{ p.t }}</h3><p>{{ p.p }}</p><p class="fin">{{ p.f }}</p></article>
  </section>

  <section class="g end">
    <p class="big">Impacte. Influencie. Inspire.</p>
    <p class="lede">Queres saber em que camada estás?</p>
    <button class="cta" @click="ask = true">Perguntar ao site →</button>
  </section>
</template>
<style scoped>
.rv{height:520vh;padding:0}.pin{position:sticky;top:0;height:100svh;display:grid;place-items:center;text-align:center;padding:1.5rem;overflow:hidden}
.pin>*{grid-area:1/1;opacity:0;transform:translateY(1.5rem);transition:opacity .7s,transform .9s cubic-bezier(.2,.7,.2,1)}.pin>.on{opacity:1;transform:none}
.q{max-width:14ch}.lt{font-size:clamp(7rem,34vw,28rem);font-weight:700;letter-spacing:-.06em;line-height:.8}
.lt i{font-style:normal;display:inline-block;opacity:0;transform:scale(.8);transition:all .6s}.lt i.on{opacity:1;transform:none}.lt i:last-child{color:var(--o)}
.wd{font-size:clamp(2.6rem,10vw,9rem);font-weight:700;letter-spacing:-.05em;line-height:.95;display:grid;gap:.4rem;align-content:center}
.wd p{margin:0}.wd p:last-child{color:var(--o)}.wd small{display:block;font-size:clamp(.9rem,1.4vw,1.3rem);letter-spacing:0;font-weight:400;opacity:0;transition:opacity .8s}.wd.sub small{opacity:.7}
.mt p{max-width:34ch;font-size:clamp(1.2rem,2.4vw,1.9rem);margin:1.2rem auto 0}
.lede{font-size:clamp(1.2rem,2.2vw,1.8rem);max-width:30ch;margin:1rem 0 3rem;font-weight:500}
.stack{border-bottom:2px solid currentColor}.lr{border-top:2px solid currentColor}
.lr>button{all:unset;box-sizing:border-box;width:100%;display:grid;grid-template-columns:1fr auto;gap:.1rem 1rem;align-items:baseline;padding:1.2rem 0;cursor:pointer}.lr>button:focus-visible{outline:3px solid var(--o)}
.lr b{font-size:clamp(2rem,6vw,5rem);letter-spacing:-.05em;line-height:1;transition:color .3s,padding .4s}.lr:hover b,.lr.open b{color:var(--o);padding-left:.6rem}
.lr span{grid-column:2;grid-row:1;font-weight:500}.lr em{grid-column:1;font-family:Mynerve,cursive;font-style:normal;color:var(--o);font-size:1.3rem}
.bd{display:grid;grid-template-rows:0fr;transition:grid-template-rows .6s cubic-bezier(.2,.7,.2,1)}.bd>div{overflow:hidden}.lr.open .bd{grid-template-rows:1fr}
.lq{max-width:40ch;font-size:1.2em;margin-bottom:1.5rem}dl{display:grid;grid-template-columns:repeat(auto-fit,minmax(14rem,1fr));gap:1.4rem 2rem;margin:0 0 2rem}
dt{font-weight:700;font-size:1.4rem;letter-spacing:-.02em;border-top:2px solid var(--g);padding-top:.6rem}dd{margin:.2rem 0 0}
.gold{font-size:clamp(1.5rem,3.4vw,2.8rem);font-weight:700;letter-spacing:-.03em;line-height:1.05;max-width:24ch;padding-bottom:2rem}.gold .hand{display:block;font-size:1.2rem;letter-spacing:0}
.md h2,.pc h2{max-width:14ch;margin-bottom:4rem}.md ol{list-style:none;padding:0}.md li{display:grid;grid-template-columns:4.5rem 1fr;gap:1rem;padding:1.6rem 0;border-top:1px solid #F0DFC855}
.rn{font-family:Mynerve,cursive;color:var(--o);font-size:1.5rem}.md p{white-space:pre-line;max-width:34ch;font-size:clamp(1.3rem,2.8vw,2.4rem);font-weight:700;letter-spacing:-.03em;line-height:1.1}
.pc article{display:grid;gap:.6rem;padding:2rem 0;border-top:2px solid var(--g);max-width:44rem}.pc h3{font-size:clamp(2rem,5vw,4rem)}.pc .fin{font-weight:700;font-size:1.2em}
.end{min-height:80svh;display:flex;flex-direction:column;justify-content:center}.end .big{max-width:12ch}
@media(max-width:760px){.md li{grid-template-columns:3rem 1fr}.lr span{grid-column:1;grid-row:3}}
@media(prefers-reduced-motion:reduce){.pin>*,.wd small{transition:none}}
</style>
