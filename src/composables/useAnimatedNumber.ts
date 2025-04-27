import { ref, watch } from 'vue'

export function useAnimatedNumber(
  source: number | Ref<number>,
  duration = 1500
) {
  const animatedValue = ref(0)
  const startTime = ref(0)
  let animationFrame: number

  const animate = (timestamp: number) => {
    if (!startTime.value) startTime.value = timestamp
    const progress = Math.min((timestamp - startTime.value) / duration, 1)

    // Pravilno interpoliramo vrednost bez gubitka decimala
    const targetValue = source instanceof Object ? source.value : source
    animatedValue.value = Number((targetValue * progress).toFixed(2)) // Ograničavamo na 2 decimale

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate)
    }
  }

  watch(
    () => (source instanceof Object ? source.value : source),
    newValue => {
      cancelAnimationFrame(animationFrame)
      startTime.value = 0
      requestAnimationFrame(animate)
    },
    { immediate: true }
  )

  return animatedValue
}
