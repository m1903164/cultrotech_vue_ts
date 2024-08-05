<script setup lang="ts">
import { useRoute } from 'vue-router'

import HomeView from '../src/views/site/HomeView.vue'
import LoginView from '../src/views/site/LoginView.vue'

const currentRoute = useRoute()
</script>

<template>
  <Suspense>
    <template v-if="currentRoute.path === '/login'">
      <LoginView/>
    </template>
    <template v-else>
      <HomeView/>
    </template>
  </Suspense>
</template>
