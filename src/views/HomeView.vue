<script setup lang="ts"></script>

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
      <div class="circle--base circle--paper">
        <img
          alt="triangle"
          class="figure"
          src="@/assets/images/icon-paper.svg"
          width="30"
          height="50"
        />
      </div>
      <div class="circle--base circle--scissors">S</div>
      <div class="circle--base circle--rock">R</div>
    </div>
  </main>
</template>

<style scoped>
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
  border: 1px solid #000;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle--paper {
  background: var(--color-background-paper);
}

.circle--scissors {
  background: var(--color-background-scissors);
  grid-column: 3;
}

.circle--rock {
  background: var(--color-background-rock);
  grid-row: 2;
  grid-column: 2;
}

.figure {
  border-radius: 50%;
  border: 1px solid #000;
  width: 70px;
  height: 70px;
  background: #eee;
  padding: 15px;
}
</style>
