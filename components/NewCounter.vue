<template>
    <h1>{{ counterStore.getCounter }}</h1>
    <button @click="counterStore.increment">Add Counter</button>
</template>
<script setup>

const counterStore = useCounterStore();
</script>