<template>
  <div>
    <p id="count">{{ count }}</p>
    <!-- <p>{{object.array}}</p> -->
    <button @click="increment">Add more count</button>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick } from "vue";
const count = ref(0);
// const object = reactive({
//     count: 2,
//     user: {
//         name: "Huy",
//         age: 25
//     },
//     array: [1,2,3,4,5]
// })

const increment = async () => {
  count.value++;
  //    object.array.push(5);
  console.log(document.getElementById("count").innerText);
  await nextTick();
};
</script>

<style lang="scss" scoped></style>
