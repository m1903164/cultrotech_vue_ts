<script setup lang="ts">
import {onMounted, ref, reactive} from "vue"
import { useRoute, useRouter } from 'vue-router'

import PageTemplateForAddEdit from '../../../components/admin/common/PageTemplateForAddEdit.vue'
import controlButton from "@/types/controlButton"

const route = useRoute()
const router = useRouter()

const pageTitle = ref('')
const loader = ref(false)

const controlButtonsLayout = reactive(<controlButton[]> [
  {
    title: 'Добавить',
    type: 'success',
    plain: true,
    isIconNeeded: true,
    iconName: 'fa-plus',
    disabled: false,
    // click: addButton
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


function backButton() {
  router.go(-1)
}

onMounted(async () => {
  loader.value = true

  switch(true) {
    case route.name === 'addUsers':
      pageTitle.value = 'Добавить пользователя'
      break
      // case route.name === 'catalogueEditTheater':
      //   pageTitle.value = 'Редактировать театр:'
      //   await getTheaterDataById()
      //   break
      // case route.name === 'catalogueCopyTheater':
      //   pageTitle.value = 'Добавить театр:'
      //   await getTheaterDataById()
      //   break
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
          <el-input/>
        </el-form-item>
        <el-form-item label="Фамилия">
          <el-input/>
        </el-form-item>
        <el-form-item label="Почта">
          <el-input/>
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input/>
        </el-form-item>
      </el-card>
    </el-form>

  </PageTemplateForAddEdit>
</template>

<style scoped>

</style>