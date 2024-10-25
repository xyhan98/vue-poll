import { defineStore } from 'pinia'
import { type Stats } from '@/types/poll'

export const usePollsStore = defineStore('polls', {
  state() {
    return {
      polls: [
        {
          id: '1',
          question: 'Python or Java?',
          optionA: 'Python',
          optionB: 'Java',
        },
        {
          id: '2',
          question: 'Vue or React?',
          optionA: 'Vue',
          optionB: 'React',
        },
      ],
      stats: {
        '1': { countA: 0, countB: 0 },
        '2': { countA: 0, countB: 0 },
      } as Record<string, Stats>,
    }
  },
})
