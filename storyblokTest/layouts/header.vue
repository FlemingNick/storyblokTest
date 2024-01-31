<template>
  <div class="header">
    <img class="logo" src="@/assets/images/medice-logo.svg" alt="Medice Health Family Logo">

    <div class="menu">
      <button class="menu__button">
        <img src="@/assets/images/burger.svg" alt="Menu">
      </button>

      <div class="content">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/header.scss";
</style>