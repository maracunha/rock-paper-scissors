import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useScoreStore = defineStore("score", () => {
  //state
  const score = ref(0);
  const tries = ref(0);

  //getters
  const doubleWin = computed(() => score.value * 2);

  // actions
  function removeOneScore() {
    score.value--;
  }

  function addOneScore() {
    score.value++;
  }

  function addTry() {
    tries.value++;
  }

  // tie
  // win
  // lose

  // Rock: 0 | Paper: 1 | Scissors: 2
  function shoot(player: number, house: number): string {
    addTry();
    console.log({ player, house });
    console.log(typeof player, typeof house);

    if (player === house) {
      return "It's a tie";
    }

    if ((player + 1) % 3 === house) {
      return "You lose!";
    }

    return "You win";
  }

  return { score, tries, shoot, doubleWin, removeOneScore, addOneScore };
});
