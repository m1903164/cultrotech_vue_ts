<script setup lang="ts">
import {onMounted, ref, reactive} from "vue"
import { useRoute, useRouter } from 'vue-router'
import {useRestStore } from "@/stores/rest"
import { useKnifeStore} from "@/stores/knifeStore"
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps, UploadUserFile } from 'element-plus'

import PageTemplateForAddEdit from '../../../components/admin/common/PageTemplateForAddEdit.vue'
import controlButton from "@/types/controlButton"
import { Knife } from '@/stores/knifeStore'

const route = useRoute()
const router = useRouter()
const rest = useRestStore()
const knifeStore = useKnifeStore()

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

const formData = reactive(<Knife> {
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

const getDataById = async (): Promise<Knife> => {
  try {
    const res = await rest.axios.get(`/knife/${route.params.id}`)

    Object.assign(formData, res.data)
    console.log(formData)
  }catch (e) {
    console.log('AddKnivesView || getDataById || error =>,', e)
  }
}

function backButton () {
  router.go(-1)
}

async function saveButton () {
  switch (route.name) {
    case 'addKnives':
      await knifeStore.addKnife(formData)
      break
    case 'editKnives':
      await knifeStore.editKnife(route.params.id, formData)
      break
  }

  await router.push({name: 'knivesView'})
}

onMounted(async () => {
  loader.value = true

  switch(route.name) {
    case 'addKnives':
      pageTitle.value = 'Добавить нож'
      break
    case 'editKnives':
      pageTitle.value = 'Редактировать нож:'
      await getDataById()
      break
  }

  loader.value = false
})

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
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
        <el-upload
            v-model:file-list="fileList"
            action="http://localhost:5174"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
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