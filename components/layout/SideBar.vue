
<script setup>
import { ref } from "vue";
const selectedLink = ref('')




</script>

<template>
    <aside class="bg-gradient-to-br from-gray-dark  to-gray-dark -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-80 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div class="relative border-b border-white/20">
            <router-link class="flex items-center gap-4 py-6  px-8" to="/">
                <img src="../../assets/img/logo.png" class="inline-block relative object-cover object-center  rounded-md">
                <span class=" text-xl tracking-normal font-sans  font-semibold leading-relaxed text-white"> Admin Panel</span>
            </router-link>
        </div>
        <div class="m-4">
            <ul class="mb-4 flex flex-col gap-1  text-white font-bold">
                <li class=" p-4 rounded-md hover:bg-primary7">
                    <router-link to="/admin/movies" >
                        <img class="w-5 mr-2.5 inline" src="../../assets/img/home-svgrepo-com1.svg" alt="Home Image">
                        Dashboard
                    </router-link>
                </li>
                <li class=" p-4 rounded-md bg-yellow-bright hover:bg-primary7 ">
                    <router-link to="/admin/movies">
                        <img class="w-5 mr-2.5 inline" src="../../assets/img/home-svgrepo-com1.svg" alt="Home Image">
                        
                        Movies List</router-link>
                </li>
                <li class=" p-4 rounded-md hover:bg-primary7 visted:bg-yellow-bright">
                    <router-link to="/admin/actors">
                        <img class="w-5 mr-2.5 inline" src="../../assets/img/home-svgrepo-com1.svg" alt="Home Image">
                        Actors List</router-link>
                </li>
                <li class=" p-4 rounded-md hover:bg-primary7 active:bg-yellow-bright">
                    <router-link to="/admin/directors">
                        <img class="w-5 mr-2.5 inline" src="../../assets/img/home-svgrepo-com1.svg" alt="Home Image">
                        Directors List</router-link>
                </li>

                <h3 class=" text-primary5 font-bold p-4">ADD PAGES</h3>

                <li class=" p-4 rounded-md hover:bg-primary7 active:bg-yellow-bright ">
                    <router-link to="/admin/addMovie">
                        <img class="w-5 mr-2.5 inline" src="../../assets/img/home-svgrepo-com1.svg" alt="Home Image">
                        Add Movie</router-link>
                </li>
                <li class=" p-4 rounded-md hover:bg-primary7 active:bg-yellow-bright ">
                    <router-link to="/admin/addDirector">
                        <img class="w-5 mr-2.5 inline" src="../../assets/img/home-svgrepo-com1.svg" alt="Home Image">
                        Add Director</router-link>
                </li>
                <li class=" p-4 rounded-md hover:bg-primary7 active:bg-yellow-bright ">
                    <router-link to="/admin/addActor">
                        <img class="w-5 mr-2.5 inline" src="../../assets/img/home-svgrepo-com1.svg" alt="Home Image">
                        Add Actor</router-link>
                </li>
                <!-- <li class=" p-4 rounded-md hover:bg-primary7 ">
                    <router-link to="/admin/movies">
                        Logout</router-link>
                </li> -->
            </ul>
          
        </div>
    </aside>
       
</template>
<style scoped>

</style>