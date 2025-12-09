/**
 * Animation Composable
 * Provides utilities for scroll-based animations and intersection observer
 */

export const useAnimation = () => {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  onMounted(() => {
    if (!elementRef.value) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(elementRef.value)

    onUnmounted(() => {
      observer.disconnect()
    })
  })

  return {
    isVisible,
    elementRef,
  }
}

/**
 * Parallax Effect Composable
 * Creates smooth parallax scrolling effects
 */
export const useParallax = (speed: number = 0.5) => {
  const offset = ref(0)
  const elementRef = ref<HTMLElement | null>(null)

  const handleScroll = () => {
    if (!elementRef.value) return
    
    const rect = elementRef.value.getBoundingClientRect()
    const scrolled = window.scrollY
    const elementTop = rect.top + scrolled
    const viewportHeight = window.innerHeight
    
    if (scrolled + viewportHeight > elementTop && scrolled < elementTop + rect.height) {
      offset.value = (scrolled - elementTop) * speed
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    offset,
    elementRef,
    style: computed(() => ({
      transform: `translateY(${offset.value}px)`,
    })),
  }
}

/**
 * Stagger Animation Composable
 * Creates staggered animation delays for lists
 */
export const useStaggerAnimation = (itemCount: number, baseDelay: number = 100) => {
  const delays = computed(() => 
    Array.from({ length: itemCount }, (_, i) => i * baseDelay)
  )

  const getDelay = (index: number) => `${delays.value[index]}ms`

  return {
    delays,
    getDelay,
  }
}
