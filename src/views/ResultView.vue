<script setup lang="ts">
import { useRouter } from "vue-router";
import { imageSrc } from "@/services/constant";
import { useScoreStore } from "@/stores/score";

const router = useRouter();
const { shoot } = useScoreStore();

const handlePlayAgain = () => {
  router.push("/");
};

const params = new URLSearchParams(document.location.search);
const playerPicked = Number(params.get("player"));

const housePicked: Number = Math.floor(Math.random() * 3);

const isWinner = shoot(playerPicked, housePicked);
</script>

<template>
  <div class="wapper">
    <div class="item">
      <span>You Picked</span>
      <div class="circle--base circle--paper">
        <div class="circle--inside">
          <img
            alt="Player picked"
            :src="imageSrc[playerPicked]"
            width="130"
            height="130"
          />
        </div>
      </div>
    </div>
    <div class="middle">
      <span>{{ isWinner }}</span>
      <button v-on:click="handlePlayAgain">Play Again</button>
    </div>
    <div class="item">
      <span>The house Picked</span>
      <div class="circle--base circle--paper">
        <div class="circle--inside">
          <img
            alt="House picked"
            :src="imageSrc[housePicked]"
            width="130"
            height="130"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  font-size: 38px;
}

.wapper {
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #eee;
  font-size: 38px;
}

.middle {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #eee;
  font-size: 38px;
}
</style>
