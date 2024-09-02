<script setup lang="ts">
import {ref} from "vue"
import { useRouter } from "vue-router"
import {useUserStore} from "@/stores/user"

interface FormData {
  email: string;
  password: string;
}

const router = useRouter()
const userStore = useUserStore()

const formData = ref<FormData>({
  email: '',
  password: '',
});


function loginEvent() {
  userStore.loginEvent(formData.value.email, formData.value.password)
}

function signUpEvent() {
  console.log('signUpEvent')
  router.push({name: 'auth'})
}
</script>

<template>
  <div class="page-wrapper">
    <el-card class="box-card">
      <el-form>
        <el-form-item label="Email">
          <el-input v-model="formData.email"/>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="formData.password"/>
        </el-form-item>
      </el-form>
      <div class="btn-wrapper">
        <el-button class="login-btn" @click="loginEvent">Войти</el-button>
        <el-button class="auth-btn" @click="signUpEvent">Зарегистрироваться</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
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
