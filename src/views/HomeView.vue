<script setup lang="ts">
import { useRouter } from "vue-router";
import { figures } from "@/services/constant";

const router = useRouter();

const handleResult = (picked: String): void => {
  const player = figures.indexOf(picked);
  router.push({ path: "/result", query: { player } });
};
</script>

<template>
  <main>
    <img
      alt="triangle"
      class="triangle"
      src="@/assets/images/bg-triangle.svg"
      width="600"
      height="600"
    />
    <div class="container">
      <button
        v-on:click="handleResult('paper')"
        class="circle--base circle--paper"
      >
        <div class="circle--inside">
          <img
            alt="paper"
            src="@/assets/images/icon-paper.svg"
            width="130"
            height="130"
          />
        </div>
      </button>
      <button
        v-on:click="handleResult('scissors')"
        class="circle--base circle--scissors"
      >
        <div class="circle--inside">
          <img
            alt="scissors"
            src="@/assets/images/icon-scissors.svg"
            width="130"
            height="130"
          />
        </div>
      </button>
      <button
        v-on:click="handleResult('rock')"
        class="circle--base circle--rock"
      >
        <div class="circle--inside">
          <img
            alt="rock"
            src="@/assets/images/icon-rock.svg"
            width="130"
            height="130"
          />
        </div>
      </button>
    </div>
  </main>
</template>

<style>
main {
  margin-top: 200px;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 200px;
  position: relative;
  top: -700px;
  width: 750px;
  margin: auto;
}

.triangle {
  display: flex;
  margin: auto;
  position: relative;
  z-index: -1;
}

.circle--base {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle--inside {
  position: relative;
  border-radius: 50%;
  border: 1px solid lightgrey;
  width: 200px;
  height: 200px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -6px 0 0 lightgrey;
}

.circle--paper {
  background: var(--color-background-paper);
  box-shadow: 0 8px 0 0 hsl(230, 89%, 58%);
  border: 1px solid hsl(230, 89%, 62%);
}

.circle--scissors {
  background: var(--color-background-scissors);
  grid-column: 3;
  box-shadow: 0 8px 0 0 hsl(40, 84%, 30%);
  border: 1px solid hsl(39, 89%, 29%);
}

.circle--rock {
  background: var(--color-background-rock);
  grid-row: 2;
  grid-column: 2;
  box-shadow: 2px 15px 0 -6px hsl(349, 71%, 30%);
  border: 1px solid hsl(349, 71%, 51%);
}

button:hover {
  cursor: pointer;
  background: #999;
  border-color: grey;
  box-shadow: 0 12px 10px #999;
}
</style>
