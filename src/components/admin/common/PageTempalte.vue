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
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
  >
    <el-menu-item><h1>{{props.pageTitle}}</h1></el-menu-item>
    <el-menu-item>
      <ControlButton
          v-for="btn in controlButtonsLayout"
          :key="btn"
          :title="btn.title"
          :type='btn.type'

          @click='btn.click'
      />
    </el-menu-item>
<!--    <ControlButton/>-->
  </el-menu>
</template>

