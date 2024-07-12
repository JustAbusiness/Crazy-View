<template>
    <div>
        <button @click="changeActive" class="button" :class="classObject"> {{ isActived ? 'Active' : 'Deactive' }}</button>
    </div>
</template>

<script setup>
    import { ref, computed, reactive } from 'vue';

    const isActived = ref(false);
    const hasError  = ref(true);

    const classObject = computed(() => ({
        active: isActived.value && !hasError.value,
        'has-error' : hasError.value
    }));

    const changeActive = () => {
        isActived.value = !isActived.value;
    }

</script>

<style lang="scss" scoped>

</style>