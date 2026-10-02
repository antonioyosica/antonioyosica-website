// Ficheiros em /public/galeria. Vídeo: 'yt:ID_DO_YOUTUBE' ou caminho de .mp4.
export type Item = { type: 'foto' | 'video'; src: string; title: string; alt?: string; poster?: string }
export const gallery: Item[] = [
  // { type: 'foto', src: '/galeria/evento-1.jpg', title: 'Meet & Greet', alt: 'Descrição' },
  // { type: 'video', src: 'yt:abcdEFG1234', title: 'Palestra', poster: '/galeria/palestra.jpg' },
]
