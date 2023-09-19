<template>
  <div class="cars">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>T/R</th>
          <th>Name</th>
          <th>Year</th>
          <th>Color</th>
          <th>About</th>
        </tr>
      </thead>
      <tbody v-for="(car, index) in cars" :key="index">
        <tr class="pt-5">
          <th>{{ car.id }}</th>
          <td>{{ car.name }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.color }}</td>
          <td>
            <router-link
              :to="{ name: 'car', params: { id: car.id }, query: car }"
            >
              <button class="btn btn-success">Batafsil</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const cars = ref([
    {
      id: 1,
      name: "BMW",
      year: 2020,
      color: "Blue",
      img_url: "https://live.staticflickr.com/2580/3990910269_27571de67b_b.jpg",
    },
    {
      id: 2,
      name: "Malibu",
      year: 2019,
      color: "White",
      img_url: "https://asacar.uz/uploads/car_color/KK/KK/KL/1632744135.png",
    },
    {
      id: 3,
      name: "Nexia",
      year: 2017,
      color: "White",
      img_url:
        "https://www.autostrada.uz/wp-content/uploads/2021/09/chevrolet-nexia-sport-edition-e1632412893709.png",
    },
    {
      id: 4,
      name: "Spark",
      year: 2018,
      color: "White",
      img_url: "https://www.chevrolet.uz/assets/images/spark/colors/oq.webp",
    },
    {
      id: 5,
      name: "BMW",
      year: 2019,
      color: "Yellow",
      img_url: "https://www.chevrolet.uz/assets/images/spark/colors/oq.webp",
    },
    {
      id: 6,
      name: "Tahoe",
      year: 2020,
      color: "Black",
      img_url:
        "https://www.major-auto.ru/images/models/chevrolet/tahoe%202021/28332/28332_medium.jpg",
    },
  ]);
</script>

<style lang="scss" scoped></style>
