<script setup>
import { ref , reactive} from "vue";
definePageMeta({
  layout: "adminpanel",
});

// Get the selected data for actorss, generes and director of the movie
let generes = ref()
let actors = ref()
let director = ref()
let images = ref([])
let cover_image = ref({})

// provide function to get data from child components

provide('setGeneres', (newGeneres)=>{
    generes.value = newGeneres
})
provide('setActors', (newActors)=>{
    actors.value = newActors
})
provide('setDirector', (newDirector)=>{
    director.value = newDirector
})
provide('setImages', (newImages)=>{
    images.value = newImages
})

provide('setCoverImage', (index)=>{
    cover_image.value.image = images.value[index]
    cover_image.value.index = index;
})

// add movie
// set data 
const movie = reactive({
    title: '',
    duration: null,
    discrption: '',
});

// add movie
const handleAddMovie = ()=>{
    // execute upload image mutation
    // set variable
    // execute add movie muation
   
}

</script>
<template>
    <div class=" w-full max-w-5xl px-6 mx-auto bg-white shadow-md rounded-sm py-10">
        <form @submit.prevent="handleAddMovie" action=""> 
            <h1 class="text-center text-3xl font-bold text-primary9 py-10 uppercase">Add Movie</h1>
            <div class=" flex items-start justify-center space-x-10">
                <div class=" flex flex-col space-y-6">
                    <!-- title -->
                    <div class="flex flex-nowrap justify-between space-x-4">
                        <input v-model="movie.title" class=" text-primary9  py-1 " type="text" placeholder="Title" name="" id="">
                    </div>
                    <!-- duration -->
                    <div>
                        <input v-model="movie.duration" class="text-primary9 py-1" type="number" placeholder="Duration Min" name="" id="">
                    </div>
                    <!--  schedule time -->
                    <div class="flex flex-nowrap justify-between space-x-4">
                        <input v-model="movie.date"  type="datetime-local" name="" id="">
                    </div>
                    <!-- discrption -->
                    <div  class=" flex flex-col">
                        <label class=" text-primary9 px-2 " for="">discrption</label>
                        <textarea v-model="movie.discrption" class=" border border-gray-dark border-solid p-2 text-primary9" name="" id="" cols="27" rows="3"></textarea>
                    </div>
                     <GeneresSet></GeneresSet>
                </div>
                <div class=" flex flex-col space-y-6">
                    <!-- Set director to movie -->
                    <DirectorsSet></DirectorsSet>                    
                    <!-- Upload  movie Images -->
                    <ImagesMultiUpload/>
                     <!--Set  Actors to Movie -->
                    <ActorsSet></ActorsSet>   
                </div>
            </div>
            <button class=" font-bold text-white bg-yellow-bright  w-80 my-10 mx-auto block rounded-full p-2">Submit</button>
        </form>
    </div>
</template>

<style scoped>
input[type="text"] ,input[type="number"]{
  padding: 10px;
  font-size: 16px;
  transition: border-color 0.3s;
  border-bottom: 1px solid rgb(220, 214, 214);
  /* border: none; */
}

input[type="text"]:focus ,input[type="number"]:focus {
  border-bottom: 3px solid #E4D804;
}

input[type="text"]:focus::placeholder ,input[type="number"]:focus::placeholder {
  transform: translate(-5px, -15px);
  transition: transform 0.3s ease-in-out;
}



input[type="datetime-local"]{
    color:#546e7a;
    padding: 0.5rem;
    border-bottom: 1px solid rgb(213, 207, 207);

}

#search-input{
    border:1px solid rgb(225, 218, 218)
}

  /* Hide the default radio button */
  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* border-radius: 50%; */
    width: 20px;
    height: 20px;
    border: 1px solid #E4D804;
  }
  
  /* Show a custom radio button */
  input[type="radio"]:before {
    content: "";

    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 3.6px;
    background-color: white;
  }

  
  
  /* Show the custom radio button when it's selected */
  input[type="radio"]:checked:before {
    background-color: #546e7a;
  }

  .actors-enter-from{
    opacity: 0;
    transform: translateY(-10px);
}
.actors-enter-active{
    transition: all 0.3s ease-in;   
}

.actors-enter-to, .actors-leave-from{
    opacity: 1;
    transform: translateY(0px);
}
.actors-leave-to{
    opacity: 0;
    position: absolute;
    transform: translateY(30px);
}
.actors-leave-active{
    transition: all 0.3s ease-in;   
}
.actors-move{
    transition: transform 0.8s ease-in;
}
</style>