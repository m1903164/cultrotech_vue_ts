<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

function goToKnives() {
  router.push({name: 'knivesView'})
}
function goToUsers() {
  router.push({name: 'usersView'})
}
</script>

<template>
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
  >
    <el-menu-item index="1">Личный кабинет админа</el-menu-item>
    <el-menu-item index="2" @click="goToKnives">Ножи</el-menu-item>
    <el-menu-item index="3" @click="goToUsers">Пользовтаели</el-menu-item>
    <el-menu-item index="4">Заказы</el-menu-item>
  </el-menu>
</template>