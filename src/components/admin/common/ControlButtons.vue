<script setup lang="ts">
import {defineProps, defineEmits} from "vue"

const emits =  defineEmits(['click'])

const props = defineProps<{
  title: string
  type: string
  plain?: boolean
}>()
</script>

<template>
  <el-button
      :type="props.type"
      @click="emits('click')"
      :plain="props.plain"
  >
    {{props.title}}
  </el-button>
</template>