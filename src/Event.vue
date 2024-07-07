<template>
    <div>
        <h1> Event handling</h1>
        <!-- <button v-on:click="count++"> Add an event </button>    
        <p>{{ count }}</p>
        <button @click="greet">Chào</button>
        <button @click="sayHi('A')">Chào A</button> -->
        <!-- <button @click="sayHi1">
            <button @click.stop="sayHi2"> say hi 2</button>
            say hi 1
        </button> -->

        <input @keyup.enter="submit" type="text" name="" placeholder="Nhap ten nguoi dung">
        
    </div>
</template>

<script setup>
    import { ref, reactive } from "vue";

    const count = ref(0);
    const sayHi1 = (event) => {
        alert(` Xin chao ${event.type} 1`)
    }

    const sayHi2 = (name) => {
        alert(`Xin chao ${name} 2`)
    }

    const submit = () => {
        alert('Submit r ne');
    }

    

</script>

<style lang="scss" scoped>

</style>