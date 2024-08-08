<script setup lang="ts">
import {defineProps} from "vue"

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
  >
    {{props.title}}
  </el-button>
</template>