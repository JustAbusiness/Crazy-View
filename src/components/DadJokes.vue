<template>
    <div class="dad-jokes-container">
        <h2 class="dad-jokes-title">Dad Jokes</h2>
        <button @click="fetchJoke" class="get-joke-button">Get Dad Joke</button>
        <div v-if="dadJokes" class="dad-joke">
          {{ dadJokes }}
        </div>
      </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";

const dadJokes = ref([]);

const fetchJoke = async () => {
    try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        console.log(response.data);
        dadJokes.value = response.data.joke
    } catch (error) {
        console.error('Error fetching dad joke:', error);
    }
}

</script>

<style scoped>
.dad-jokes-container {
    max-width: 600px;
    margin: 50px auto;
  }
  
  .dad-jokes-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .get-joke-button {
    padding: 10px 15px;
    font-size: 16px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .get-joke-button:hover {
    background-color: #45a049;
  }
  
  .dad-joke {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    margin-top: 20px;
    background-color: #f9f9f9;
    color: #333;
  }
</style>