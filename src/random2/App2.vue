<script>
  export default {
    data(){
      return {
        name: "Wibu",
        status: 'pending',
        tasks: ['Task1', 'Task2', 'Task3'],
        links: 'https://www.google.com'
    }
  },
  methods: {
  toogleStatus() {
    if (this.status === 'active') {
      this.status = 'pending'
    }else if (this.status === 'pending') {
      this.status = 'done'
    }
     else {
      this.status = 'inactive'
    }
  }
}
  }
</script>

<template>
  
  <h1>{{name}}</h1>
  <p v-if="status === 'pending'"> User is {{status}}</p>
  <p v-else-if="status === 'done'"> User is {{status}}</p>
  <p v-else> User is {{status}}</p>

  <h3>Tasks: </h3>
  <ul>
    <li v-for="task in tasks">
      {{task}}
    </li>
  </ul>

  <a :href="links"> Click zo di</a>
  <button @click="toogleStatus"> Change button</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
