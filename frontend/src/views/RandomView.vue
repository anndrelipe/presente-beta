<template>
    <section class="flex flex-col items-center justify-start h-screen pt-10">
        <span class="text-xl mb-2 text-[#ff7393]">Seja bem-vinda a sua <span class="font-bold"> Maquina do Tempo!</span></span>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
            <a href="#">
                <img class="rounded-t-lg" :src="imageUrl" alt="" />
            </a>
            <div class="p-5 flex flex-col items-center">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#301954] dark:text-white text-center">{{ title }}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{{ description }}</p>
            <button @click="getRandomImage" type="button" class="mt-6 text-white bg-[#ff7393] hover:bg-[#ff5b83] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mb-2">
                Gerar outra
            </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios';


const title = ref('');
const description = ref('');
const imageUrl = ref('');


// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

const getRandomIndex = async (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomImage = async () => {
    let index = await getRandomIndex(9);

    while (!index) {
        index = await getRandomIndex(9);
    }
    
    const dataRef = await axios.get(`https://presente-beta.onrender.com/get-imageData/card/${index}`);
    const urlFrom = await axios.get(`https://presente-beta.onrender.com/${dataRef.data.data.id}.jpeg`);

    console.log(urlFrom.data.content)

    imageUrl.value = urlFrom.data.content;
    description.value = dataRef.data.data.description;
    title.value = dataRef.data.data.title;

}

</script>
