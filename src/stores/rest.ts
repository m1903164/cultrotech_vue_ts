import {defineStore} from "pinia"
import axios from "axios"

export const useRestStore = defineStore('axios', {
    state: () => ({
        axios: axios.create({
            baseURL: 'http://localhost:3000',
        }),
    }),
});