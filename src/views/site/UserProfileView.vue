<script setup lang="ts">
import {useUserStore} from "@/stores/user"
import {onMounted} from "vue";

const userStore = useUserStore()

onMounted(() => {
  console.log(userStore.user)
})
</script>

<template>
  <h1>{{userStore.user.name}}</h1>
</template>