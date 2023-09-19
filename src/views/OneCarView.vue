<template>
  <div class="mt-5">
    <OneCar />
    <router-link class="router" to="/cars">Back</router-link>
    <router-link class="router" to="/">Home</router-link>
  </div>
</template>

<script setup>
  import OneCar from "@/components/OneCar.vue";
</script>
