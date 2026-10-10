<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup>
import { computed, defineProps, inject } from 'vue';

const props = defineProps(['firstName', 'lastName']);
// const emit = defineEmits(['save-data']);

const age = inject('age');

const userName = computed(function () {
  return `${props.firstName} ${props.lastName}`;
});

// console.log(context);
</script>