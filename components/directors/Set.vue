<script setup>
import { useDirectorStore } from "~/stores/modules/directors";
const directorStore = useDirectorStore()
//1. load actors, geners and directors
directorStore.loadDirectors
//fetch directors, actors and generes date 
const directors = directorStore.getDirectors
const director = ref('')
const setDirector = ()=>{

}
</script>

<template>
    <div class="flex justify-between w-96">
        <label class=" text-primary9" for="director"> Director</label>
        <select @change="setDirector" v-model="director"  name="director" id="director" class=" uppercase text-primary9 border p-1">
            <option name="director" class=" hover:bg-yellow-bright" v-for=" director in directors" :key="director.id" :value="director.id">
                {{ director.first_name + ' ' + director.last_name }}
            </option>
        </select>
    </div>
</template>