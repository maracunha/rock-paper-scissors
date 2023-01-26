<script setup lang="ts">
import { RouterView } from "vue-router";
import { useScoreStore } from "@/stores/score";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const scoreStore = useScoreStore();
const { score, tries } = storeToRefs(scoreStore);

const showRules = ref(false);
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/images/logo.svg" />
    <div class="cards">
      <div class="score">
        <p>tries</p>
        <p style="color: blue">{{ tries }}</p>
      </div>
      <div class="score">
        <p>score</p>
        <p>{{ score }}</p>
      </div>
    </div>
  </header>

  <button class="rules--btn" v-on:click="showRules = !showRules">RULES</button>
  <div v-show="showRules" class="rules">
    <div>
      <span>RULES</span>
      <button v-on:click="showRules = !showRules">X</button>
    </div>
    <img
      alt="rules"
      class="image--rules"
      src="@/assets/images/image-rules.svg"
    />
  </div>

  <RouterView />
</template>

<style scoped>
header {
  width: 70%;
  margin: auto;
  padding: 20px;
  display: flex;
  line-height: 1.5;
  border: 2px solid #eee;
  border-radius: 15px;
  justify-content: space-between;
}

.cards {
  display: flex;
  gap: 20px;
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

.rules {
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  position: absolute;
  left: 35%;
  z-index: 5;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.rules div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: 24px;
}

.rules button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}

.rules button:hover,
.rules button:focus {
  color: black;
  box-shadow: none;
}

.rules--btn {
  font-size: 32px;
  border: 2px solid #888;
  border-radius: 10px;
  width: 150px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  top: 900px;
  right: -1000px;
}

.image--rules {
  position: relative;
  z-index: 3;
  margin: auto;
}
</style>
