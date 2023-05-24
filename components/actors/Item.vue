<script setup>

// template for actors and directors of the movie
const props  = defineProps({
    actor:{
        type: Object,
        required: true
    }
})

const fullName = computed(()=>{
    return props.actor.first_name + ' ' + props.actor.last_name
})

</script>

<template>
    <div class="row mx-3">
        <!-- Image Section -->
        <img class="w-full  md:w-72 h-72 object-cover" src="../../assets/img/actor5.jpg" alt="Director Image">
        <!-- card footer -->
        <div class=" flex justify-between my-4">
            <p class=" text-white font-bold">{{ fullName }}</p>
            <p class=" text-yellow-bright font-bold">Actor</p>
        </div>
    </div>
</template>