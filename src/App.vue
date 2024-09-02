<script setup lang="ts">
import { useUserStore } from "@/stores/user"

const userStore = useUserStore()

const savedUser = localStorage.getItem('cultrotech-user')
if (savedUser) {
  userStore.user = JSON.parse(savedUser)
}
</script>

<template>
  <RouterView/>
</template>
