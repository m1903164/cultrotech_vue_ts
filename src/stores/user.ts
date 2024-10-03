import { defineStore } from 'pinia'
import { useRestStore } from '@/stores/rest'
import { useRouter } from "vue-router"
import { ref, watch } from 'vue'
import {ElMessage} from "element-plus"
import type {User} from "@/types/user"

// export interface User {
//   id?: string
//   name: string
//   email: string
//   password: string
//   role: string
// }

export const useUserStore = defineStore('user', () => {
  const rest = useRestStore()
  const router = useRouter()

  const user = ref<User | null>(null)
  const token = ref<string | null>(null)

  const message = ref<string>('')

  const loginEvent = async (email: string, password: string): Promise<void> => {
    try {
      const res = await rest.axios.post('/auth/login', {
        email,
        password,
      })

      if (res.status === 201) {
        user.value = res.data.user
        token.value = res.data.token

        localStorage.setItem("cultrotech-user",JSON.stringify(user.value))
        localStorage.setItem("cultrotech-user-token",JSON.stringify(token.value))

        switch (user.value.role) {
          case 'client':
            await router.push({name: 'userProfile'})
                break
          case 'admin':
            await  router.push({name: 'HomeAdmin'})
                break
        }
      }
    } catch (e) {
      console.log('userStore loginEvent error =>', e)
    }
  }

  const singUpEvent = async (user: Omit<User, 'id'>): Promise<User> => {
    console.log(user)
    try {
      await rest.axios.post('/auth/signup', user)

      message.value = 'Пользователь добавлен'

      ElMessage({
        type: 'success',
        message,
        duration: 2000
      })
    }catch (e) {
      console.log('userStore singUpEvent error =>', e)
    }
  }

  const editUserEvent = async (id: string, user: User): Promise<User> => {
    try {
      await rest.axios.put(`/auth/user/${id}`, user)

      message.value = 'Пользователь изменен'

      ElMessage({
        type: 'success',
        message,
        duration: 2000
      })
    }catch (e) {
      console.log('userStore editUserEvent error =>', e)
    }
  }

  return {
    loginEvent,
    singUpEvent,
    editUserEvent,
    user,
    token,
  }
})