<script setup>

definePageMeta({
  layout: "adminpanel",
});

import { ref , reactive} from "vue";

</script>
<!--  -->


<template>
    <div class=" w-4/6 mx-auto bg-white shadow-md rounded-sm py-10">
        <form action=""> 
            <h1 class="text-center text-3xl font-bold text-primary9 py-10 uppercase">Add Director</h1>
            <div class=" flex items-center justify-center">
                <ImagesUpload/>
                <div class=" flex flex-col space-y-6">
                    <div>
                        <input class="  py-1 " type="text" placeholder="First Name" name="" id="">
                    </div>
                    <div>
                        <input class=" py-1" type="text" placeholder="Last Name" name="" id="">
                    </div>
                    <button class=" font-bold text-white rounded-sm bg-yellow-bright w-full p-2">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
input[type="text"] {
  padding: 10px;
  font-size: 16px;
  transition: border-color 0.3s;
  border-bottom: 1px solid rgb(220, 214, 214);
  /* border: none; */
}

input[type="text"]:focus {
  border-bottom: 3px solid #E4D804;
}

input[type="text"]:focus::placeholder {
  transform: translate(-5px, -15px);
  transition: transform 0.3s ease-in-out;
}
</style>