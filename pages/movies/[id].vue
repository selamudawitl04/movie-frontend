<script setup>

</script>

<template>
    <div class="app">
        <LayoutHeader></LayoutHeader>
        <main>
            <!-- Section 1 Movie Detail -->
            <section v-if="true" id="detail-header-container"  class=" mt-20 pt-20 pb-40 bg-no-repeat bg-right  md:bg-center  bg-cover" >
                <div class="container p-4 mx-auto">
                    <div class="flex flex-col lg:flex-row lg:space-x-12 justify-center  ">
                        <!-- The left Side -->
                        <div class="">
                            <div class="w-80 mx-auto">
                                <img class="w-full h-auto" src="../../assets/img/ucm_poster04.jpg" alt="">
                                <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video"><img src="img/images/play_icon.png" alt=""></a>
                            </div>
                        </div>
                        <!-- The right Side -->
                        <div class=" my-6">
                            <div class="">
                                <h5 class=" text-yellow-bright font-bold text-2xl mb-4">New Movie</h5>
                                <h2 class=" text-white text-6xl font-bold">The Easy <span class=" text-yellow-bright">Reach</span></h2>
                                <div class="banner-meta">
                                    <ul class=" my-6 flex flex-wrap items-stretch ">
                                        <span class=" bg-white mr-4 font-semibold text-primary3 p-0.5 align-baseline uppercase">Pg 18</span>
                                        <span class="border-4 border-white border-solid  px-2 text-white uppercase">hd</span>
                                        <p class=" text-white mx-2 py-1">
                                            <a href="#">Romance,</a>
                                            <a href="#">Drama</a>
                                        </p>
                                        <span class=" text-white mx-2 pt-1"><i class="far fa-calendar-alt"></i>7 May 6:00 pm</span>
                                        <span class=" text-white pt-1"><i class="far fa-clock"></i> 128 min</span>

                                    </ul>
                                </div>
                                <p class=" text-primary5">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many
                                    variations of passages of lorem
                                    Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                                <div class=" bg-primary6 w-full mt-8 max-w-lg p-8">
                                    <ul class="flex flex-wrap justify-between items-center text-primary5">
                                        <li class=""><a href="#"><i class="fas fa-share-alt"></i> BookMark</a></li>
                                        <li class="streaming">
                                            <h6>Rate It</h6>
                                        </li>
                                        <router-link class="text-white   font-bold rounded-full border-4 border-solid border-yellow-bright py-2 px-6  md:px-10 text-center hover:bg-yellow-bright hover:text-gray-dark  "  to="/auth/login">Buy ticket</router-link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <!-- Section -2  Directirs And Castors-->
            <section id="second-section" class="director-casts bg-cover bg-primary3 pt-20 pb-20">
                <div class=" container mx-auto p-4">
                    <h3 class=" text-white text-2xl text-center my-6 font-bold">Directors and Casts</h3>
                    <div class=" justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="row mx-3">
                            <!-- Image Section -->
                            <img class="w-full  md:w-72 h-72 object-cover" src="../../assets/img/director.jpg" alt="Director Image">
                            <!-- card footer -->
                            <div class=" flex justify-between my-4">
                                <p class=" text-white font-bold">Selamu Dawit</p>
                                <p class=" text-yellow-bright font-bold">Director</p>
                            </div>
                        </div>
                        <!-- ACtor 1 -->
                        <div class="row mx-3">
                            <!-- Image Section -->
                            <img class="w-full  md:w-72 h-72 object-cover" src="../../assets/img/actor1.jpg" alt="Director Image">
                            <!-- card footer -->
                            <div class=" flex justify-between my-4">
                                <p class=" text-white font-bold">Selina Jakob</p>
                                <p class=" text-yellow-bright font-bold">Actor</p>
                            </div>
                        </div>

                        <!-- Actor 2 -->
                        <div class="row mx-3">
                            <!-- Image Section -->
                            <img class="w-full  md:w-72 h-72 object-cover" src="../../assets/img/actor4.jpg" alt="Director Image">
                            <!-- card footer -->
                            <div class=" flex justify-between my-4">
                                <p class=" text-white font-bold">Emanuel John</p>
                                <p class=" text-yellow-bright font-bold">Actor</p>
                            </div>
                        </div>
                        <!-- ACtor 3 -->
                        <div class="row mx-3">
                            <!-- Image Section -->
                            <img class="w-full  md:w-72 h-72 object-cover" src="../../assets/img/actor5.jpg" alt="Director Image">
                            <!-- card footer -->
                            <div class=" flex justify-between my-4">
                                <p class=" text-white font-bold">Robert Knipper</p>
                                <p class=" text-yellow-bright font-bold">Actor</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
             <!-- Section 3 The News Later -->
            <section class="newsletter" >
                <div class="container mx-auto py-8">
                    <div class=" ">
                        <div class=" flex flex-col lg:flex-row items-center justify-between mx-auto">
                            <div class="px-4">
                                <div class="newsletter-content">
                                    <h4 class=" text-2xl text-primary1 font-bold uppercase">Trial Start First 30 Days.</h4>
                                    <p class="   text-primary1">Enter your email to create or restart your membership.</p>
                                </div>
                            </div>
                            <div class=" px-4">
                                <form action="#" class="">
                                    <input class=" py-4  rounded-sm pr-32 pl-4 border-2 border-solid border-white" type="email" required="" placeholder="Enter your email">
                                    <button class="py-4 rounded-sm px-8 border-2 border-solid border-white uppercase font-bold  bg-primary1 text-yellow-bright ">get started</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
       <LayoutFooter></LayoutFooter>
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