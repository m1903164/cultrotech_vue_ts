import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'test',
      surname: 'testov',
      phone: '89851313263',
      email: 'john@example.com',
      role: 'admin'
    }
  },
  getters: {
    // ...
  },
  actions: {
    // ...
  },
})