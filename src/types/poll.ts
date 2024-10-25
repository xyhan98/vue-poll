export interface Poll {
  id?: string
  question: string
  optionA: string
  optionB: string
}

export interface Stats {
  countA: number
  countB: number
}
