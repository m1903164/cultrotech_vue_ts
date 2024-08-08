<script setup lang="ts">
import { reactive } from "vue"

import PageTemplate from '../../../components/admin/common/PageTempalte.vue'

const pageTitle: string = 'Ножи'
const controlButtonsLayout = reactive ({
  addButton: {
    title: 'Добавить',
    type: 'primary',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-plus',
    disabled: false,
    // click: addButton
  },
  editButton: {
    title: 'Редактировать',
    type: 'primary',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-pen-to-square',
    disabled: false,
    // click: editButton
  },
  copyButton: {
    title: 'Дублировать',
    type: 'primary',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-copy',
    disabled: false,
    // click: copyButton
  },
  deleteButton: {
    title: 'Удалить',
    type: 'danger',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-trash-can',
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