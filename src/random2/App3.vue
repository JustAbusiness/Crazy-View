<script setup>
import { ref, onMounted } from 'vue';

  const name = ref('Wibu')
  let status = ref('pending')
  const tasks = ref(['Task1', 'Task2', 'Task3'])
  const newTask = ref('')

  const toogleStatus = () => {
    if (status.value === 'active') {
      status.value = 'pending'
    }else if (status.value === 'pending') {
      status.value = 'done'
    }
     else {
      status.value = 'inactive'
    }
  }

  const addTask = () => {
    if (newTask.value.trim() !== '') {
      tasks.value.push(newTask.value);
      newTask.value = '';
    }
  }

  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
  }

  onMounted(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      tasks.value = data.map((task) => task.title)
    } catch (error) {
      console.log(error)
    }
  });
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status === 'pending'"> User is {{status}}</p>
  <p v-else-if="status === 'done'"> User is {{status}}</p>
  <p v-else> User is {{status}}</p>

  <h3>Tasks: </h3>
  <ul>
    <li v-for="task in tasks">
      <span>
        {{task}}
      </span>
      <button @click="deleteTask(index)">Delete</button>
    </li>
  </ul>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask">
    <button type="submit">Add</button>
  </form>
  <button @click="toogleStatus"> Change button</button>

</template>

<style scoped>
</style>
