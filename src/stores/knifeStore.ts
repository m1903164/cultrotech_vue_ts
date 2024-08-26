import {defineStore} from "pinia"
import { useRestStore } from "@/stores/rest"
import { ElMessage, ElMessageBox } from 'element-plus'
import {ref} from "vue";

export interface Knife {
    id?: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    category: string
}

export const useKnifeStore = defineStore('knife', () => {
    const rest = useRestStore()

    const message = ref<string>('')

    const addKnife = async (knife: Omit<Knife, 'id'>) => {
        try{
            await rest.axios.post('/knife', knife)

            message.value = 'Нож добавлен'

            ElMessage({
                type: 'success',
                message,
                duration: 2000
            })
        }catch (e) {
            console.log('knifeStore || addKnife || error =>,', e)
        }
    }

    const editKnife = async (id: string, knife: Knife) => {
        console.log(id)
        console.log(knife)
        try {
            await rest.axios.put(`/knife/${id}`, knife)

            message.value = 'Нож изменен'

            ElMessage({
                type: 'success',
                message,
                duration: 2000
            })
        }catch (e) {
            console.log('knifeStore || editKnife || error =>,', e)
        }
    }

    const deleteKnife = async (id: string) => {
        try {
            await rest.axios.delete(`/knife/${id}`)

            message.value = 'Нож удален'

            ElMessage({
                type: 'success',
                message,
                duration: 2000
            })
        }catch (e) {
            console.log('knifeStore || deleteKnife || error =>,', e)
        }
    }

    return {
        addKnife,
        editKnife,
        deleteKnife
    }
})