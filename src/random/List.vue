<template>
  <div>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Nhap vao viec can lam ..." />
    <button @click="addTodo">Add Task</button>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
           {{ todo.text }} 
        </li>
    </ul>
 </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const newTodo = ref('');
const todos = reactive([
    {
        id: 1,
        text: 'Learn vuejs',
    }, 
    {
        id: 2,
        text: 'Build a todo application'   
    }, 
]);

const addTodo = () => {
    if (newTodo.value.trim() === '') return
    const todo = {
        id: todos.length + 1,
        text: newTodo.value
    }
    todos.push(todo);
    newTodo.value = "";
}



</script>

<style lang="scss" scoped></style>
