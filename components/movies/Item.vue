<script setup>
const props = defineProps({
    movie:{
        type: Object,
        required: true
    }
})  
const imgUrl = computed(()=>{
    return movie.cover_image
})

const detailLink = computed(()=>{
    return '/movies/' + movie.id;
})

const date = computed(()=>{
    return Date().now()
})

</script>
<template>
    <div class="" >
        <div class="">
            <div class="movie-poster">
                <NuxtLink :to="detailLink"><img class="w-full max-h-80 md:max-h-max" :src="imgUrl" alt="Cover Image"></NuxtLink>
            </div>
            <div class="py-6 space-y-4">
                <div class=" flex justify-between">
                    <h5 class="title text-white font-bold"><NuxtLink :to="detailLink">Women's Day</NuxtLink></h5>
                    <span class=" text-yellow-bright">{{ date }}</span>
                </div>
                <div >
                    <ul class="flex justify-between">
                        <li><span class="border-4 px-2 border-solid border-white text-yellow-bright">hd</span></li>
                        <li>
                            <span class="text-primary5"><i class="far fa-clock"></i>{{ movie.duration }}</span>
                            <span class=" text-primary5"><i class="fas fa-thumbs-up"></i> {{movie.ratings}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
</template>

