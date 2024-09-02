<script setup lang="ts">
import {reactive, ref} from "vue"
import { useRouter } from "vue-router"

import PageTemplate from '../../../components/admin/common/PageTemplate.vue'
import controlButton from "@/types/controlButton"
import {ElNotification} from "element-plus";

const router = useRouter()

const pageTitle = ref<string>('Пользователи')
const dataPathToServer = ref<string>('/auth/users')
const currentRow = ref<{} | any>({})
const controlButtonsLayout = reactive(<controlButton[]> [
  {
    title: 'Добавить',
    type: 'info',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-plus',
    disabled: false,
    click: addButton
  },
  {
    title: 'Редактировать',
    type: 'info',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-pen-to-square',
    disabled: false,
    click: editButton
  },
  {
    title: 'Удалить',
    type: 'danger',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-trash-can',
    disabled: false,
    // click: deleteButton
  }
])

const currentRowChange = (row) => {
  currentRow.value = row
}

function addButton() {
  router.push({name: 'addUsers'})
}

function editButton() {
  if(!Object.keys(currentRow.value).length) {
    ElNotification({
      customClass: 'notification',
      title: 'Внимание',
      message: 'Выберите пользователя для редактирования',
      type: 'error',
      duration: 2000
    })
    return
  }
  console.log(currentRow.value._id)
  router.push({
    name: 'editUser',
    params: {
      id: currentRow.value._id,
    }
  })
}

</script>


<template>
  <PageTemplate
      :pageTitle="pageTitle"
      :controlButtonsLayout="controlButtonsLayout"
      :dataPathToServer="dataPathToServer"

      @currentRowChange='currentRowChange'
  >
  </PageTemplate>
</template>