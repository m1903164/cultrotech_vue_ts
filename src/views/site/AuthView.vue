<script setup lang="ts">
import { reactive } from "vue"
import { useRouter } from "vue-router"
import {useUserStore} from "@/stores/user"

interface FormData {
  name: string;
  email: string;
  password: string;
  role: string;
}

const router = useRouter()
const userStore = useUserStore()

const formData = reactive<FormData>({
  name: '',
  email: '',
  password: '',
  role: 'client'
})

const authEvent = async () => {
  await userStore.singUpEvent(formData)
  await router.push({name: 'userProfile'})
}
</script>

<template>
  <div class="page-wrapper">
    <el-card class="box-card">
      <el-form>
        <el-form-item label="Имя">
          <el-input v-model="formData.name"/>
        </el-form-item>
        <el-form-item label="Почта">
          <el-input v-model="formData.email"/>
        </el-form-item>
        <el-form-item label="Паоль">
          <el-input v-model="formData.password"/>
        </el-form-item>
      </el-form>
      <div class="btn-wrapper">
        <el-button class="auth-btn" @click="authEvent">Зарегистрироваться</el-button>
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
  width: 150px;
  background-color: #C9A378;
  color: white;
}
</style>
