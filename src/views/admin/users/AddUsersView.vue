<script setup lang="ts">
import {onMounted, ref, reactive} from "vue"
import { useRoute, useRouter } from 'vue-router'
import {useRestStore } from "@/stores/rest"

import PageTemplateForAddEdit from '../../../components/admin/common/PageTemplateForAddEdit.vue'
import controlButton from "@/types/controlButton"
import {User} from "@/stores/user"

// export interface User {
//   id?: string
//   name: string
//   email: string
//   password: string
//   role: string
// }

const route = useRoute()
const router = useRouter()
const rest = useRestStore()

const pageTitle = ref<string>('')
const loader = ref<boolean>(false)

const controlButtonsLayout = reactive(<controlButton[]> [
  {
    title: 'Сохранить',
    type: 'success',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-plus',
    disabled: false,
    click: saveButton
  },
  {
    title: 'Назад',
    type: 'info',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-pen-to-square',
    disabled: false,
    click: backButton
  },
])

const formData = ref(<User> {
  name: '',
  email: '',
  password: '',
  role: ''
})

const UserRoles = [
    {label: 'admin'},
    {label: 'client'}
]

function backButton() {
  router.go(-1)
}

const getUserById = async (): Promise<User> => {
  try {
    const res = await rest.axios.get(`/auth/user/${route.params.id}`)
    console.log(res.data)
  }catch (e) {

  }
}

function saveButton() {
  console.log(formData.value)
}

onMounted(async () => {
  loader.value = true

  switch(true) {
    case route.name === 'addUser':
      pageTitle.value = 'Добавить пользователя'
      break
    case route.name === 'editUser':
      pageTitle.value = 'Редактировать пользователя:'
      await getUserById()
      break
  }

  loader.value = false
})
</script>

<template>
  <PageTemplateForAddEdit
      :pageTitle="pageTitle"
      :controlButtonsLayout="controlButtonsLayout"
  >
    <el-form
        label-width="70px"
        label-position="right"
        v-loading="loader"
    >
      <el-card class="box-card">
        <el-form-item label="Имя">
          <el-input v-model="formData.name"/>
        </el-form-item>
        <el-form-item label="Почта">
          <el-input v-model="formData.email"/>
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input v-model="formData.password"/>
        </el-form-item>
        <el-form-item label="Роль">
          <el-select v-model="formData.role"/>
        </el-form-item>
      </el-card>
    </el-form>

  </PageTemplateForAddEdit>
</template>

<style scoped>

</style>