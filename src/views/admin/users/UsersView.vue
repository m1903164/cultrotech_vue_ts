<script setup lang="ts">
import { reactive } from "vue"
import { useRouter } from "vue-router"

import PageTemplate from '../../../components/admin/common/PageTempalte.vue'

const router = useRouter()

const pageTitle: string = 'Пользователи'
const controlButtonsLayout = reactive ({
  addButton: {
    title: 'Добавить',
    type: 'info',
    plain: true,
    disabled: false,
    click: addButton
  },
  editButton: {
    title: 'Редактировать',
    type: 'info',
    plain: true,
    disabled: false,
    // click: editButton
  },
  deleteButton: {
    title: 'Удалить',
    type: 'danger',
    plain: true,
    disabled: false,
    // click: deleteButton
  }
})

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