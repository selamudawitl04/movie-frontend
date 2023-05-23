<script setup>

definePageMeta({
  layout: "movies",
});
</script>
<template>
    <div class="app">
      <section v-if="true" id="header-container" style="" class=" py-60 md:py-80 bg-no-repeat bg-center  bg-cover lg:bg-right  bg-" >
           <div class="">
               <div class="">
                   <div class="flex">
                       <div class=" lg:flex-1/2 lg:w-1/2 pl-6 h-auto">
                           <h6 class="  text-yellow-bright text-2xl" >SDflix</h6>
                           <h2 class="text-white text-6xl font-bold leading-tight"  >Unlimited <span class=" text-yellow-bright">Movie</span>, &amp; More.</h2>
                           <div class="">
                               <ul class="flex space-x-4 text-white">
                                   <li class="">
                                       <span>Pg 18</span>
                                       <span>hd</span>
                                   </li>
                                   <li class="">
                                       <a href="#">Romance,</a>
                                       <a href="#">Drama</a>
                                   </li>
                                   <li class="">
                                       <span><i class=""></i> 2021</span>
                                       <span><i class=""></i> 128 min</span>
                                   </li>
                               </ul>
                           </div>
                           <div  class="py-10">    
                                <router-link class="text-white  bg-primary2 font-bold rounded-full border-4 border-solid border-yellow-bright py-4  px-8 text-center hover:bg-yellow-bright hover:text-gray-dark  "  to="/auth/signup">Register Now</router-link>
                            </div>
                           <!-- <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="banner-btn btn popup-video wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1.8s" style="visibility: visible; animation-duration: 1.8s; animation-delay: 0.8s; animation-name: fadeInUp;"><i class="fas fa-play"></i> Watch Now</a> -->
                       </div>
                   </div>
               </div>
           </div>
       </section>
       <section v-if="true" id="body-container"  class=" z-10  relative  py-40   bg-no-repeat bg-center  bg-cover ">
                <div  id="inner-bg" class=" z-20 opacity-95  bg-primary3 absolute top-0 left-0 right-0 bg-no-repeat bg-center  bg-cover  h-full  w-full" ></div>

                <div class=" px-4 flex flex-col justify-center items-center z-50  lg:flex-row lg:justify-between relative container mx-auto">
                    <div>
                        <h3 class="text-4xl font-bold text-white py-8">This Week Movies</h3>
                    </div>
                    <div class=" pb-8">
                        <input placeholder="search by director" class="py-3 px-12  border-4 border-solid border-yellow-bright   bg-gray-dark focus:bg-white    rounded-full">
                    </div>
                </div>
                <div class="container mx-auto z-50 px-4  relative">
                   <div class=" grid grid-cols-1 justify-center md:grid gap-6   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="col-span-1" >
                        <div class="w-full">
                            <div class="movie-poster">
                                <router-link to="movies/12"><img class="w-full max-h-80 md:max-h-max" src="../../assets/img/ucm_poster01.jpg" alt=""></router-link>
                            </div>
                            <div class="py-6 space-y-4">
                                <div class=" flex justify-between">
                                    <h5 class="title text-white font-bold"><a href="movie-details.html">Women's Day</a></h5>
                                    <span class=" text-yellow-bright">May 7 6:00pm</span>
                                </div>
                                <div >
                                    <ul class="flex justify-between">
                                        <li><span class="border-4 px-2 border-solid border-white text-yellow-bright">hd</span></li>
                                        <li>
                                            <span class="text-primary5"><i class="far fa-clock"></i> 128 min</span>
                                            <span class=" text-primary5"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2nd item  -->
                    <div class="" >
                        <div class="">
                            <div class="movie-poster">
                                <a href="movie-details.html"><img class="w-full max-h-80 md:max-h-max" src="../../assets/img/ucm_poster02.jpg" alt=""></a>
                            </div>
                            <div class="py-6 space-y-4">
                                <div class=" flex justify-between">
                                    <h5 class="title text-white font-bold"><a href="movie-details.html">Women's Day</a></h5>
                                    <span class=" text-yellow-bright">May 7 6:00pm</span>
                                </div>
                                <div >
                                    <ul class="flex justify-between">
                                        <li><span class="border-4 px-2 border-solid border-white text-yellow-bright">hd</span></li>
                                        <li>
                                            <span class="text-primary5"><i class="far fa-clock"></i> 128 min</span>
                                            <span class=" text-primary5"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="" >
                        <div class="">
                            <div class="movie-poster">
                                <a href="movie-details.html"><img class="w-full max-h-80 md:max-h-max" src="../../assets/img/ucm_poster03.jpg" alt=""></a>
                            </div>
                            <div class="py-6 space-y-4">
                                <div class=" flex justify-between">
                                    <h5 class="title text-white font-bold"><a href="movie-details.html">Women's Day</a></h5>
                                    <span class=" text-yellow-bright">May 7 6:00pm</span>
                                </div>
                                <div >
                                    <ul class="flex justify-between">
                                        <li><span class="border-4 px-2 border-solid border-white text-yellow-bright">hd</span></li>
                                        <li>
                                            <span class="text-primary5"><i class="far fa-clock"></i> 128 min</span>
                                            <span class=" text-primary5"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- The third item -->
                    <div class="" >
                        <div class="">
                            <div class="movie-poster">
                                <a href="movie-details.html"><img class="w-full max-h-80 md:max-h-max" src="../../assets/img/ucm_poster04.jpg" alt=""></a>
                            </div>
                            <div class="py-6 space-y-4">
                                <div class=" flex justify-between">
                                    <h5 class="title text-white font-bold"><a href="movie-details.html">Women's Day</a></h5>
                                    <span class=" text-yellow-bright">May 7 6:00pm</span>
                                </div>
                                <div >
                                    <ul class="flex justify-between">
                                        <li><span class="border-4 px-2 border-solid border-white text-yellow-bright">hd</span></li>
                                        <li>
                                            <span class="text-primary5"><i class="far fa-clock"></i> 128 min</span>
                                            <span class=" text-primary5"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </div>
        
                </div>
                    <div class="container mx-auto z-50 px-4  relative">
                   <div class=" grid grid-cols-1 justify-center md:grid gap-6   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> -->
                    <div class="col-span-1" >
                        <div class="w-full">
                            <div class="movie-poster">
                                <a href="movie-details.html"><img class="w-full max-h-80 md:max-h-max" src="../../assets/img/ucm_poster01.jpg" alt=""></a>
                            </div>
                            <div class="py-6 space-y-4">
                                <div class=" flex justify-between">
                                    <h5 class="title text-white font-bold"><a href="movie-details.html">Women's Day</a></h5>
                                    <span class=" text-yellow-bright">May 7 6:00pm</span>
                                </div>
                                <div >
                                    <ul class="flex justify-between">
                                        <li><span class="border-4 px-2 border-solid border-white text-yellow-bright">hd</span></li>
                                        <li>
                                            <span class="text-primary5"><i class="far fa-clock"></i> 128 min</span>
                                            <span class=" text-primary5"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2nd item  -->
                    <div class="" >
                        <div class="">
                            <div class="movie-poster">
                                <a href="movie-details.html"><img class="w-full max-h-80 md:max-h-max" src="../../assets/img/ucm_poster02.jpg" alt=""></a>
                            </div>
                            <div class="py-6 space-y-4">
                                <div class=" flex justify-between">
                                    <h5 class="title text-white font-bold"><a href="movie-details.html">Women's Day</a></h5>
                                    <span class=" text-yellow-bright">May 7 6:00pm</span>
                                </div>
                                <div >
                                    <ul class="flex justify-between">
                                        <li><span class="border-4 px-2 border-solid border-white text-yellow-bright">hd</span></li>
                                        <li>
                                            <span class="text-primary5"><i class="far fa-clock"></i> 128 min</span>
                                            <span class=" text-primary5"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="" >
                        <div class="">
                            <div class="movie-poster">
                                <a href="movie-details.html"><img class="w-full max-h-80 md:max-h-max" src="../../assets/img/ucm_poster03.jpg" alt=""></a>
                            </div>
                            <div class="py-6 space-y-4">
                                <div class=" flex justify-between">
                                    <h5 class="title text-white font-bold"><a href="movie-details.html">Women's Day</a></h5>
                                    <span class=" text-yellow-bright">May 7 6:00pm</span>
                                </div>
                                <div >
                                    <ul class="flex justify-between">
                                        <li><span class="border-4 px-2 border-solid border-white text-yellow-bright">hd</span></li>
                                        <li>
                                            <span class="text-primary5"><i class="far fa-clock"></i> 128 min</span>
                                            <span class=" text-primary5"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- The third item -->
                    <div class="" >
                        <div class="">
                            <div class="movie-poster">
                                <a href="movie-details.html"><img class="w-full max-h-80 md:max-h-max" src="../../assets/img/ucm_poster04.jpg" alt=""></a>
                            </div>
                            <div class="py-6 space-y-4">
                                <div class=" flex justify-between">
                                    <h5 class="title text-white font-bold"><a href="movie-details.html">Women's Day</a></h5>
                                    <span class=" text-yellow-bright">May 7 6:00pm</span>
                                </div>
                                <div >
                                    <ul class="flex justify-between">
                                        <li><span class="border-4 px-2 border-solid border-white text-yellow-bright">hd</span></li>
                                        <li>
                                            <span class="text-primary5"><i class="far fa-clock"></i> 128 min</span>
                                            <span class=" text-primary5"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                </div> 
            </section>
       </div>
  </template>

  <style scoped>
  
  #header-container{
      background-image: url(../../assets/img/header-bg.jpg);
  }
  #body-container{
      background-image: url(../../assets/img/ucm_bg.jpg);
  }

  #inner-bg{
    background-image: url(../../assets/img/ucm_bg_shape.png);

  }
  </style>