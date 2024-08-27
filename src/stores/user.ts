import {defineStore} from "pinia"
import {useRestStore } from "@/stores/rest"
import {ref} from "vue"

export interface User {
  id: string,
  name: string,
  email: string,
  password: string,
  role: string
}

export const useUserStore = defineStore('user', () => {
  const rest = useRestStore()

  const user = ref<User | {}>({})
  const token = ref(localStorage.getItem('cultrotech.token') || null)

  const loginEvent = async (email: string, password: string): Promise<void> => {
    try {
      const res = await rest.axios.post('/auth/login', {
        email,
        password,
      })
      console.log(res.data)

      if (res.status === 201) {
        console.log(res.data.user)
        // rest.setToken(res.data.access_token)
        Object.assign(user.value, res.data.user)
        console.log(user.value)
      }
    } catch (e) {
      console.log('userStore login error =>', e)
    }
  }

  // const setToken = (key) => {
  //   token.value = key
  //   window.localStorage.setItem('profTicket_dilyaver.token', token.value)
  //   rest.axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
  // }

  return {
    loginEvent
  }
})