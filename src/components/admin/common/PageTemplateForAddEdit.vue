<script setup lang="ts">
import {defineProps} from "vue"

import ControlButton from '../common/ControlButton.vue'

interface ControlButtonItem {
  title: string;
  type: string;
  plain: boolean;
  isIconNeeded: boolean;
  iconName: string;
  disabled: boolean;
}

const props = defineProps<{
  pageTitle: string;
  controlButtonsLayout: ControlButtonItem;
}>()

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
    <div class='page-content'>
      <slot></slot>
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
