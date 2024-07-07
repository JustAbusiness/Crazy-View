<template>
    <div>   
        <h1> Template refs</h1>
        <input ref="inputRef" />
        
        <ul>
            <li v-for="(item, index) in list" :key="index" ref="itemRefs" style="opacity: 0">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
    import { onMounted, reactive, ref } from "vue";
    const inputRef = reactive(null);
    const list = ref(['Item 1', 'Item 2', 'Item 3']);
    const itemRefs = ref([]);

    onMounted(() => {
        inputRef.value.focus();

        itemRefs.value.forEach((item) => {
            item.style.transition = 'opacity 1s';
            item.style.opacity = 1;
        });
    });

</script>

<style lang="scss" scoped>

</style>