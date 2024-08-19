<script setup lang="ts">
import {reactive, ref} from "vue"
import { useRouter } from "vue-router"

import PageTemplate from '../../../components/admin/common/PageTemplate.vue'
import controlButton from "@/types/controlButton"

const router = useRouter()

const pageTitle = ref<string>('Ножи')
const dataPathToServer = ref<string>('/knife')

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

function addButton () {
  router.push({name: 'addKnives'})
}

</script>

<template>
  <PageTemplate
    :pageTitle="pageTitle"
    :controlButtonsLayout="controlButtonsLayout"
    :dataPathToServer="dataPathToServer"
  >
    <div>Knives</div>
  </PageTemplate>
</template>