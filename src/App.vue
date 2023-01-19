<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/images/logo.svg" />
    <div class="score">
      <p>score</p>
      <p>12</p>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 60%;
  margin: auto;
  padding: 20px;
  display: flex;
  line-height: 1.5;
  border: 2px solid #eee;
  border-radius: 15px;
  justify-content: space-between;
}

.score {
  background-color: #eee;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

.score p:first-child {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.score p:last-child {
  color: green;
  font-size: 38px;
}
</style>
