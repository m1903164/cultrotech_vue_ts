<script setup lang="ts">
import axios from "axios";
import {onMounted} from "vue";

const fetchPosts =  async () => {
  try {
    const res = await axios.get('http://localhost:3000/knife');
    console.log(res.data)
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

onMounted(async () => {
  await fetchPosts()
})

</script>

<template>
  <RouterView/>
</template>
