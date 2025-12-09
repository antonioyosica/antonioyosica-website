/**
 * Scroll Progress Composable
 * Tracks scroll progress for progress bars and animations
 */

export const useScrollProgress = () => {
  const progress = ref(0)
  const isScrolled = ref(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    
    progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    isScrolled.value = scrollTop > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    progress,
    isScrolled,
  }
}
