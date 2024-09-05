<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="nav-list">
      <RouterLink to="/" class="link">Главная</RouterLink>
      <RouterLink to="/catalogue" class="link">Каталог</RouterLink>
      <RouterLink to="/login" class="link">Войти</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.link {
  margin-right: 10px;
}
</style>