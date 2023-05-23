<script setup>
import { ref } from "vue";
definePageMeta({
  layout: "adminpanel",
//   middleware:['building-store']

});


const name = ref()
name.value =[1,2,3,4,5,6,7,8]
</script>

<template>
    <div class="">
        <layout-sub-header name="Movies"></layout-sub-header>
        <table class=" bg-white">
           <tr>
                <th class=" uppercase text-primary8">Title</th>
                <th class=" uppercase text-primary8">Director</th>
                <th class=" uppercase text-primary8">Duration</th>
                <th class=" uppercase text-primary8">Schedule</th>
                <th class=" uppercase text-primary8 ">Actions</th>
           </tr>
           <tr v-for="val in name" :key="val">
                <td class=" text-gray-dark font-bold">
                    <img class="w-8  rounded-md h-8 inline" src="../../assets/img/ucm_poster01.jpg" alt="afsgdh">
                    The Eye Women
                </td>
                <td class=" text-primary9 font-bold">Tony James</td>
                <td class=" text-yellow-bright font-bold">140 min</td>
                <td class=" text-primary9 font-bold">4 may 6:00 pm</td>
                <td class=" text-right" >
                    <router-link to="/admin/movies/12/editMovie" class=" ml-2.5 text-white font-bold bg-yellow-bright rounded-md px-3">Edit</router-link>
                    <!-- <button>Delete</button> -->
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