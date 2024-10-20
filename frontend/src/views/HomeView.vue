<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import { initFlowbite } from 'flowbite';

const targetDate = new Date('2025-10-19T00:00:00'); // Data alvo
const sec = ref(0);
const min = ref(0);
const hour = ref(0);
const days = ref(0);
const fraseAtual = ref(''); // Frase atual

const frases = [
  "Juntos, criamos uma trilha de risadas que transforma qualquer lugar em nosso próprio refúgio.",
  "Entre as horas que passam, trocamos olhares que dizem mais do que mil palavras.",
  "É na leveza de um domingo preguiçoso que descobrimos a beleza do estar presente.",
  "Em cada gesto simples, como preparar um jantar juntos, revelamos a cumplicidade que nos une.",
  "Nossos melhores momentos acontecem quando nos perdemos nas nossas conversas.",
  "O que mais aprecio é a forma como fazemos do cotidiano uma leveza.",
  "O sol brilha diferente quando rimos juntos.",
  "Nas pequenas coisas, como um café compartilhado, encontramos companhia.",
  "Cada minuto ao seu lado é um convite a redescobrir o que é viver com leveza e autenticidade."
];

let timer;
let fraseTimer;

// Função para calcular a diferença de tempo
const updateTime = () => {
  const now = new Date();
  const difference = targetDate - now; // Diferença em milissegundos

  if (difference <= 0) {
    clearInterval(timer);
    return; // O tempo já passou
  }

  // Calcula os valores em segundos, minutos, horas e dias
  sec.value = Math.floor((difference / 1000) % 60);
  min.value = Math.floor((difference / (1000 * 60)) % 60);
  hour.value = Math.floor((difference / (1000 * 60 * 60)) % 24);
  days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
};

// Inicializa o cronômetro
const startTimer = () => {
  updateTime(); // Atualiza imediatamente
  timer = setInterval(updateTime, 1000); // Atualiza a cada segundo
};

// Atualiza a frase a cada 5 segundos
const atualizarFrase = () => {
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  fraseAtual.value = frases[indiceAleatorio];
};

// Inicializar Flowbite, o cronômetro e as frases ao montar o componente
onMounted(() => {
  initFlowbite();
  startTimer();
  atualizarFrase(); // Atualiza imediatamente a primeira frase
  fraseTimer = setInterval(atualizarFrase, 5000); // Atualiza a frase a cada 5 segundos
});

onUnmounted(() => {
  clearInterval(timer);
  clearInterval(fraseTimer);
});
</script>

<template>
<section class="bg-center bg-no-repeat bg-[url('https://www.10wallpaper.com/wallpaper/1920x1200/1710/Sunset_Mountains_Calm_High_Quality_Wallpaper_1920x1200.jpg')] bg-gray-500 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            19/10/2025
        </h1>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {{ days }}d {{ hour }}h {{ min }}m <span class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#ff7393] md:text-5xl lg:text-6xl">{{ sec }}s</span>
        </h1>
        <p id="frase" class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            {{ fraseAtual }}
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <RouterLink to="/roleta">
                <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#ff7393] hover:bg-[#ff5b83] focus:ring-4 focus:ring-purple-300 dark:focus:ring-blue-900">
                    Ir para a roleta
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </RouterLink>
            <RouterLink to="/random">
                <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Ir para random
                </a>  
            </RouterLink>
        </div>
    </div>
</section>

<ol class="flex flex-col items-center sm:flex-row sm:justify-center px-4 py-2">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-[#ff7393] dark:text-[#ff7393]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Pedido não oficial</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">19 outubro 2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">A nossa história é oficializada! [...] Por um acordo? Enfim, que belo acordo!</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-[#ff7393] dark:text-[#ff7393]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Pedido na praia</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">27 novembro 2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Protagonisamos o ápice do romantismo pós moderno no Brasil.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-[#ff7393] dark:text-[#ff7393]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nossos dois anos</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">19 outubro 2024</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Vivendo mais um dia,com você, sem se preocupar com o próximo.</p>
        </div>
    </li>
</ol>

</template>
