<template>
    <div>
        <h2 v-if="isLoggedIn"> Welcome to Login </h2>
        <h2 v-else> You comeback, mate </h2>
        <button @click="toggleLogin"> {{isLoggedIn ? 'Dang Nhap' : 'Dang Xuat' }}</button>
        <br>
        <h1 v-show="isVisbled"> Noi dung nay an hoac hien thi</h1>
        <button @click="toggleShow"> {{ isVisbled ? "An" : "Hien" }}</button>
    </div>
</template>

<script setup>
    import {ref, reactive } from 'vue';

    const isLoggedIn = ref(false);
    const isVisbled = ref(true);

    const toggleLogin = () => {
        isLoggedIn.value = !isLoggedIn.value
    }

    const toggleShow = () => {
        isVisbled.value = !isVisbled.value
    }
</script>

<style lang="scss" scoped>

</style>