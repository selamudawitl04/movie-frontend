<script setup>
definePageMeta({
  layout: "movies",
});
const id = useRoute().params.id;

// load movie by calling loadMovie action
import {useMovieStore} from '../../stores/modules/movies'
const movieStore = useMovieStore()
// movieStore.loadMovie(id)

// get movie detail from store
const movie = movieStore.getMovie
console.log(movie.actors)
</script>

<template>
    <div class="app">
        <main>
            <!-- Section 1 Movie Detail -->
           <MoviesDetailsDetail :movie="movie"></MoviesDetailsDetail>
            <!-- Directors and Actors Container -->
            <section id="second-section" class="director-casts bg-cover bg-primary3 pt-20 pb-20">
                <div class=" container mx-auto p-4">
                    <h3 class=" text-white text-2xl text-center my-6 font-bold">Directors and Casts</h3>
                    <div class=" justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <DirectorsItem :director="movie.director"></DirectorsItem>
                        <ActorsItem v-for="actor in movie.actors " :key="actor.id" :actor="actor"/>
                    </div>
                </div>
            </section>
            <!-- New Container -->
            <MoviesDetailsRegister></MoviesDetailsRegister>
        </main>
    </div>
  </template>

<style scoped>
  #detail-header-container{
      background-image: url(../../assets/img/movie_details_bg.jpg);
  }
  #body-container{
      background-image: url(../../assets/img/ucm_bg.jpg);
  }
    .director-casts{
        background-image: url(../../assets/img/ucm_bg_shape.png);
    }
    .newsletter{
        background-image: url(../../assets/img/newsletter_bg.jpg);
    }

</style>