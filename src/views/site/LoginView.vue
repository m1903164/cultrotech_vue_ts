<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

function singInEvent() {
  router.push({name: 'HomeAdmin'})
}

function authEvent() {
  console.log('authEvent')
  router.push({name: 'auth'})
}
</script>

<template>
  <div class="page-wrapper">
    <el-card class="box-card">
      <el-form>
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-wrapper">
        <el-button class="login-btn" @click="singInEvent">Войти</el-button>
        <el-button class="auth-btn" @click="authEvent">Зарегистрироваться</el-button>
      </div>
    </el-card>
  </div>
</template>

<style>
.page-wrapper {
  height: 100%;
  width: 100%;
  background-color: #C9A378;
  position: absolute;
}

.box-card {
  position: relative;
  top: 45%;
  margin: 0 auto;
  width: 350px;
}

.btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login-btn {
  width: 120px;
  background-color: #C9A378;
  color: white;
}

.auth-btn {
  border: none;
}
</style>
