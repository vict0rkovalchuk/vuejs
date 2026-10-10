<template>
  <section class="container">
    <UserData :firstName="firstName" :lastName="lastName"/>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" ref="lastNameInput">
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

const firstName = ref('');
const lastName = ref('');
const age = ref(12);
const lastNameInput = ref(null);

watch([age], function(newValues, oldValues) {
  console.log(oldValues, newValues);
});

function setNewAge() {
  age.value += 1;
}

function setLastName() {
  lastName.value = lastNameInput.value.value;
}

provide('age', age);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>