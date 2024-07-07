<template>
    <div>
        <h4>FullName : {{fullName}} </h4>
        <h4>FirstName: {{firstName}} </h4>
        <h4>LastName: {{lastName}} </h4>
        <button @click="changeFullName">Change Full Name</button>
        <br>
        <p> Book name: {{book.name}}</p>
        <p> Đã xuất bản : {{ isPublished}}</p>
        <button @click="addChapter">Add Chapter</button>
    </div>
</template>

<script setup>
    import { ref, reactive, computed } from 'vue';

    const firstName = ref("Pham Ngoc");
    const lastName = ref("Huy");

    const book = reactive({
        name: "Book1",
        chapter: []
    })

    const addChapter = () => {
        book.chapter.push("Chapter 1");
    }

    const isPublished = computed(() => {
        return book.chapter.length > 0 ? "Yes" : "No";
    })

    const fullName = computed({
        get() {
            return `${firstName.value} ${lastName.value}`;
        },
        set(newValue) {
            [firstName.value, lastName.value] = newValue.split(',');
        }
    });

    const changeFullName = () => {
        fullName.value = "Robert Pham, Santi"
    }

</script>

<style lang="scss" scoped>

</style>