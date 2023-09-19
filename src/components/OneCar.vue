<template>
  <div class="car">
    <h1>Car</h1>
    <div class="card mx-auto" style="margin-bottom: 20px">
      <img
        class="mx-auto"
        style="width: 500px"
        :src="car.query.img_url"
        alt="image of car"
      />
      <div class="card-body">
        <h4>name: {{ car.query.name }}</h4>
        <h4>year: {{ car.query.year }}</h4>
        <h4>color: {{ car.query.color }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";
  const car = useRoute();
</script>

<style lang="scss" scoped></style>
