<script setup lang="ts">
import {useUserStore} from "@/stores/user"
import {onMounted} from "vue";

const userStore = useUserStore()

onMounted(() => {
  console.log(userStore.user)
})
</script>

<template>
  <h1>Пользователь</h1>
</template>