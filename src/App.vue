<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script setup></script>
<style lang="scss">
  .router {
    text-decoration: none;
    font-size: 18px;
    background-color: black;
    color: #fff;
    padding: 10px 18px;
    border-radius: 5px;
    margin-left: 10px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
