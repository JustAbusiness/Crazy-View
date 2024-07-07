<template>
    <div>
        <h1> Form Input</h1>
        <p>{{text }}</p>
        <!-- <input :value="text" @input="handleInput"> -->
        <input v-model.lazy="text" >

        <p> Check box:  {{ checked }}</p>
        <input type="checkbox" v-model="checked" true-value="yes" false-value="no" >


        <p> Radio {{ radio }}</p>
        <input type="radio" v-model="radio" :value="firstOption">


        <!-- <p> Select: {{text }}</p>
        <input v-model="text" > -->



    </div>
</template>

<script setup>
    import {ref} from "vue";
    
    const text = ref("Hello");
    const checked = ref(false);
    const radio = ref([]);

    const firstOption = ref("Hello There");
    const handleInput = (e) => {
        text.value = e.target.value;
    }
</script>

<style lang="scss" scoped>

</style>