<template>

    <section class="flex flex-col items-center justify-start h-screen pt-10">
    <span class="text-xl mb-2 text-[#ff7393]">Seja bem-vinda a sua <span class="font-bold"> Roleta de rolês!</span></span>
        <img src="../assets/Wavy_Bus-07_Single-10.jpg" class="w-3/4 max-w-lg" alt="Imagem da galeria"/>
        <h2 class="mt-4 text-center text-lg font-bold text-[#301954]">Estamos preparando algo incrível!</h2>
        <p class="mt-2 text-center text-gray-600 font-semibold">
            Lamentamos, essa funcionalidade ainda está sendo desenvolvida, aguarde atualizações :)
        </p>
    
        <RouterLink to="/">
            <button type="button" class="mt-6 text-white bg-[#ff7393] hover:bg-[#ff5b83] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">
                Voltar para o início
            </button>
        </RouterLink>
    </section>
    
    
    
    
    </template>
    
    <script setup>
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'
    import { RouterLink } from 'vue-router';
    
    // initialize components based on data attribute selectors
    onMounted(() => {
        initFlowbite();
    })
    </script>