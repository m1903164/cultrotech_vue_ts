<script setup lang="ts">
import { reactive } from "vue"
import { useRouter } from "vue-router"

import PageTemplate from '../../../components/admin/common/PageTempalte.vue'
import controlButton from "@/types/controlButton"

const router = useRouter()

const pageTitle: string = 'Пользователи'
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
    // click: editButton
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

function addButton() {
  router.push({name: 'addUsers'})
}

</script>


<template>
  <PageTemplate
      :pageTitle="pageTitle"
      :controlButtonsLayout="controlButtonsLayout"
  >
    <div>Users</div>
  </PageTemplate>
</template>