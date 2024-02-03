type ShuffleProps = {
  min?: number
  max: number
}

export function shuffle({ min = 1, max }: ShuffleProps) {
  return Math.round(min + Math.random() * max)
}