import { defineStore } from 'pinia'

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
    }
  },
})
