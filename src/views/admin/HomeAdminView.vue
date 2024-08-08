<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

import AdminHeader from "@/components/admin/AdminHeader.vue"

const route = useRoute()
const router = useRouter()
</script>

<template>
  <AdminHeader/>
  <router-view></router-view>
</template>