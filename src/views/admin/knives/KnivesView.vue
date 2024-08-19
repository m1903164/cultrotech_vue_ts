<script setup lang="ts">
import {onMounted, reactive, ref} from "vue"
import { useRouter } from "vue-router"
import { ElNotification, ElMessageBox, ElMessage } from 'element-plus'

import PageTemplate from '../../../components/admin/common/PageTemplate.vue'
import controlButton from "@/types/controlButton"

const router = useRouter()

const pageTitle = ref<string>('Ножи')
const dataPathToServer = ref<string>('/knife')
const currentRow = ref<{} | any>({})

const controlButtonsLayout = reactive(<controlButton[]> [
  {
    title: 'Добавить',
    type: 'info',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-plus',
    // disabled: false,
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
    title: 'Дублировать',
    type: 'info',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-copy',
    disabled: false,
    // click: copyButton
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

function addButton () {
  router.push({name: 'addKnives'})
}

function editButton () {
  if(!Object.keys(currentRow.value).length) {
    ElNotification({
      customClass: 'notification',
      title: 'Внимание',
      message: 'Выберите нож для редактирования',
      type: 'error',
      duration: 2000
    })
    return
  }
  console.log(currentRow.value._id)
  router.push({
    name: 'editKnives',
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
    <div>Knives</div>
  </PageTemplate>
</template>