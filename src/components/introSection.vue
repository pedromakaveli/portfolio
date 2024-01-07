<template>
    <!-- Inicia a div de apresentação -->
    <div class="md:mt-[80px] grid place-content-center place-items-center min-h-[100vh]">
        <h1
            class="text-center font-vancouver font-normal text-[2.50rem] lg:text-[6rem] sm:text-[3.5rem] text-slate-50 uppercase tracking-[.10em] font-bold">
            Pedro Lacerda
        </h1>
        <h2
            class="auto-input text-center font-roboto-mono font-bold text-cyan-bright text-[.80rem] lg:text-[1.25rem] sm:text-[.95rem] uppercase tracking-[.20em]">
            Desenvolvedor
            Front-end</h2>

        <div class="mt-10 flex flex-wrap justify-center p-5 md:justify-start gap-5 text-sm">
            <x-button class="bg-cyan-bright text-gray-800 text-[0.90rem] md:text-[1rem]">Currículo</x-button>
            <x-button class="bg-pink text-white text-[0.95rem]">Linkedin</x-button>
        </div>


        <div
            class="z-0 relative top-[90px] cursor-pointer animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-bright" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </div>
<!-- Finaliza a div de apresentação  -->
</template>

<script>
    import myButton from './myButton.vue';
    export default {
        components:{
            'x-button': myButton
        },
        data () {
            return {

            };
        },

        methods: {
            typeWriter (elemento) {
                const texto = elemento.innerHTML.split("");
                elemento.innerHTML = '';
                texto.forEach((item, index) => {
                    console.log(item, index)
                    setTimeout(function () {
                        elemento.innerHTML += item
                    }, 75 * index)
                })
            }
        },

        mounted() {
            const titulo = document.querySelector('.auto-input');
            this.typeWriter(titulo);
        }
    }
</script>