<script setup lang="ts">
import { reactive } from "vue"

import PageTemplate from '../../../components/admin/common/PageTempalte.vue'

const pageTitle: string = 'Пользователи'
const controlButtonsLayout = reactive ({
  addButton: {
    title: 'Добавить',
    type: 'primary',
    plain: true,
    disabled: false,
    // click: addButton
  },
  editButton: {
    title: 'Редактировать',
    type: 'primary',
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
</script>


<template>
  <PageTemplate
      :pageTitle="pageTitle"
      :controlButtonsLayout="controlButtonsLayout"
  >
    <div>Knives</div>
  </PageTemplate>
</template>