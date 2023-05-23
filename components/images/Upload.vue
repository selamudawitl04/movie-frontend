<script setup>

import { ref , reactive} from "vue";

const selecteImage = ()=>{
    const input = document.getElementById('image-input')
    input.click()
}

const uploadImage = (event)=>{
    const imagePreview = document.getElementById('image-preview');
    const input = document.getElementById('image-input')
    const file = event.target.files[0];
    console.log(file)
    const imageUrl = URL.createObjectURL(file);
    imagePreview.src = imageUrl;
}
</script>
<template>
    <div>        <!-- Left Side -->
        <label @click="selecteImage" for="image" class=" cursor-pointer my-0">
            <img id="image-preview" class=" w-40  border-4 hover:border-yellow-bright border-primary9" src="../../assets/img/default-avatar.png" alt="">
        </label>
        <input id="image-input" @change="uploadImage" class=" opacity-0 h-0 p-0 m-0" type="file" name="image" >
        <h2 @click="selecteImage" class="ml-5 my-0 cursor-pointer uppercase text-primary9 font-semibold">Choose Image</h2>
    </div>
</template>