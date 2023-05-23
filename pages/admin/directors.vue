<script setup>
import { ref } from "vue";
import SubHeader from "../../components/layout/SubHeader.vue";


const name = ref()
name.value =[1,2,3,4,5,6,7,8]
</script>

<template>
    <div class="">
        <sub-header name="Directors"></sub-header>

        <table class=" bg-white">
           <tr>
                <th class=" uppercase text-primary8">First Name</th>
                <th class=" uppercase text-primary8">Last Name</th>
                <th class=" uppercase text-primary8">Number of Movie</th>
                <th class=" uppercase text-primary8 ">Actions 1</th>
                <th class=" uppercase text-primary8 ">Actions 2</th>

           </tr>
           <tr v-for="val in name" :key="val">
                <td class=" text-gray-dark font-bold">
                    <img class="w-8  rounded-md h-8 inline" src="../../assets/img/ucm_poster01.jpg" alt="afsgdh">
                    Shweutinger
                </td>
                <td class=" text-primary9 font-bold">James</td>
                <td class=" text-yellow-bright font-bold">12</td>
                <td class=" text-right" >
                    <!-- <button class=" ml-2.5 text-white font-bold bg-yellow-bright rounded-md px-3">Edit</button> -->
                    <router-link to="/admin/directors/12/editDirector" class=" py-1 ml-2.5 text-white font-bold bg-yellow-bright rounded-md px-3">Edit</router-link>
                </td>
                <td class=" text-right" >

                    <button class=" ml-2.5 text-white font-bold bg-yellow-bright rounded-md px-3">Delete</button>
                </td>
            </tr>

        </table>
    </div>

</template>

<style scoped>
table{
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    width: 100%;
}
th{
    margin-bottom: 2rem;
}
th, td{
    padding: 1.5rem;
    text-align: left;
    border-bottom: 0.1px solid rgb(236, 234, 234);
}
</style>