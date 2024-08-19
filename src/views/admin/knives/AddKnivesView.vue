<script setup lang="ts">
import {onMounted, ref, reactive} from "vue"
import { useRoute, useRouter } from 'vue-router'
import {useRestStore } from "@/stores/rest";

import PageTemplateForAddEdit from '../../../components/admin/common/PageTemplateForAddEdit.vue'
import controlButton from "@/types/controlButton"
import AddKnife from "@/types/knife";

const route = useRoute()
const router = useRouter()
const rest = useRestStore()

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
    click: addButton
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

const formData = reactive(<AddKnife> {
  name: '',
  description: '',
  price: 0,
  quantity: 0,
  category: ''
})

const KnifeCategory = [
  {label: 'Gold Line'},
  {label: 'Silver Line'},
  {label: 'Custom knives'},
  {label: 'Fix blade'}
]

function backButton () {
  router.go(-1)
}

async function addButton () {
  console.log(formData)

  try {
    await rest.axios.post('/knife', formData)
  }catch (e) {
    console.log('AddKnivesView || addButton || error =>,', e)
  }
}

onMounted(async () => {
  loader.value = true

  switch(true) {
    case route.name === 'addKnives':
      pageTitle.value = 'Добавить нож'
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
      </el-card>
      <el-card class="box-card">
        <el-form-item label="Название">
          <el-input v-model="formData.name"/>
        </el-form-item>
        <el-form-item label="Описание">
          <el-input
              v-model="formData.description"
              :rows="2"
              type="textarea"
          />
        </el-form-item>
        <el-form-item label="Количество">
          <el-input-number v-model="formData.quantity"/>
        </el-form-item>
        <el-form-item label="Цена">
          <el-input-number v-model="formData.price"/>
        </el-form-item>
        <el-form-item label="Категрия">
          <el-select v-model="formData.category">
            <el-option
              v-for="item in KnifeCategory"
              :label="item.label"
              :key="item.label"
              :value="item.label"
            />
          </el-select>
        </el-form-item>
      </el-card>
    </el-form>
  </PageTemplateForAddEdit>
</template>

<style>
.box-card {
  margin-bottom: 10px;
}

.box-card:last-child {
  margin-bottom: 0;
}
</style>