<template>
    <div>
        <h2> Watchers </h2>
        <p> Hoi 1 cau co the tra loi bang "yes" or "no"</p>
        <input v-model="question" :disabled="isLoading" />
        <p>{{ answer }} </p>
        <!-- <button @click="increment">Increment</button> -->
    </div>
</template>

<script setup>
    import { ref, watch } from "vue";
    const question = ref("");
    const isLoading = ref(false);
    const answer = ref("");

    // const count = ref(0);

    // const increment = () => {
    //     count.value++;
    // }

    watch(question, async (newQuestion, oldQuestion) => {
      if (newQuestion.includes('?')) {
        isLoading.value = true;
        answer.value = "Đang suy nghĩ...";
        try {
            const response = await fetch("https://yesno.wtf/api")
            answer.value = (await response.json()).answer;
        }
        catch(error){
            answer.value = "Error! Không thể call api"
        }
        finally{
            isLoading.value = false;
        }
      }
    });

</script>

<style lang="scss" scoped>

</style>