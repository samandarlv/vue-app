<template>
  <div class="mt-5">
    <h1>Cars</h1>
    <Cars />
    <router-link class="router" to="/">Home</router-link>
  </div>
</template>

<script setup>
  import Cars from "@/components/Cars.vue";
</script>
