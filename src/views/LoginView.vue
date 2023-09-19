<template>
  <div class="login mt-5">
    <h1>Login page</h1>
    <Login />
    <router-link class="router" to="/">Back</router-link>
  </div>
</template>
<script setup>
  import Login from "@/components/Login.vue";
</script>
