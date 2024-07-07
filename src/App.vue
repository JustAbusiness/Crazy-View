<script setup>
import Computed from './Computed.vue';
import Condition from './Condition.vue';
import Event from './Event.vue';
import FormInput from './FormInput.vue';
import List from './List.vue';
import Ref from './Ref.vue';
import Style from './Style.vue';
import TemplateRef from './TemplateRef.vue';
import Watchers from './Watchers.vue';

const message = "Hello Vue 3!";
const buttonId = 'button-id2';
const isButtonDisabled = false;
const objectOfAttr = {
  id: 'container',
  class: 'wapper',
  style: 'color: red',
};


const number = 0;
const listString = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o';
const covertToId = (data) => data.split(',').revserse().join('-');
const attributeName = "href";
const url = 'https://www.google.com';

</script>

<template>
  
  <h1>Syntax</h1>
  <span>Messages: {{ message }} </span>

  <button :id="buttonId" :disabled="isButtonDisabled">Click Here</button>
  <button v-bind="objectOfAttr" :id="listString.split(',').join('-')">Number: {{number}}</button>

  <!-- <button v-bind="objectOfAttr" :id="covertToId(listString)">Number: {{number}}</button> -->

  <!-- <a v-bind:[attributeName]="url"> New URL</a>

  <!-- <Ref /> -->
  <!-- <Computed /> -->
  <!-- <Style /> -->
  <!-- <Condition /> -->
  <!-- <List /> -->
  <!-- <Event /> -->
  <!-- <FormInput /> -->
  <!-- <Watchers /> -->
  <!-- <TemplateRef /> -->
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
