<script setup lang="ts">
import {defineProps, defineEmits} from "vue"

const emits =  defineEmits(['click'])

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <el-button
      :type="props.type"
      @click="emits('click')"
  >
    {{props.title}}
  </el-button>
</template>