<script setup lang="ts">
import {defineProps, onMounted, reactive, ref} from "vue"
import controlButton from "@/types/controlButton"

import ControlButton from './ControlButtons.vue'

import { useRestStore } from "@/stores/rest"

const props = defineProps<{
  pageTitle: string;
  controlButtonsLayout: controlButton[];
  dataPathToServer: string
}>()

const rest = useRestStore()

const dataFromServer = reactive<Record<string, any>[]>([])
//Мы используем Record<string, any>[], чтобы указать, что dataFromServer будет хранить массив объектов,
// где ключи объектов - это строки, а значения - любого типа.

const getDataFromServer = async () => {
  try {
    const res = await rest.axios.get<Record<string, any>[]>(props.dataPathToServer)
    res.data.forEach(obj => {
      dataFromServer.push(obj)
    })
    console.log(dataFromServer)
  }catch (e) {
    console.log('PageTemplateForAddEdit || getDataFromServer || error =>', e)
  }
}

onMounted(async () => {
  await getDataFromServer()
})

</script>

<template>
  <div class="container">
    <div class="page-header">
      <h2>{{props.pageTitle}}</h2>
      <div>
        <ControlButton
            v-for="btn in controlButtonsLayout"
            :key="btn"
            :title="btn.title"
            :type='btn.type'
            :plain="btn.plain"

            @click='btn.click'
        />
      </div>
    </div>
    <el-table :data="dataFromServer">
      <template v-for="(value, key) in dataFromServer[0] || {}">
        <el-table-column :label="key">
          <template #default="{ row }">
            {{ row[key] }}
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: solid #dcdfe6 1px;
}

.page-content {
  padding: 20px;
}
</style>

