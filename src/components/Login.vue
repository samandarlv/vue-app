<template>
  <div class="container mt-3">
    <form class="col-6 offset-3">
      <div class="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          class="form-control"
          placeholder="Email address"
        />
      </div>

      <div class="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          class="form-control"
          placeholder="Password"
        />
      </div>

      <router-link to="/cars"
        ><button type="button" class="btn btn-primary btn-block mb-4" style="font-size: 18px;">
          Sign in
        </button></router-link
      >
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
