<script setup lang="ts">
import {defineProps, PropType} from "vue"
import controlButton from "@/types/controlButton";

import ControlButton from './ControlButtons.vue'

const props = defineProps({
  pageTitle: {
    type: String,
    required: true
  },
  controlButtonsLayout: {
    type: Array as PropType<controlButton[]>,
    required: true
  }
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

