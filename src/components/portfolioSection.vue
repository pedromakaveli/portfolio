<template>
    <!-- Inicia a div do portfolio -->
    <div class=" md:pt-5 pb-5 px-20 min-h-[100vh]">
        <div class="container mx-auto">
            <div class="grid justify-items-center gap-10 items-center">
                <h1 id="portfolio" class="cursor-pointer font-montserrat text-sky-100 text-[1.4rem] sm:text-[1.5rem] md:text-[2rem] hover:text-cyan-400">
                    <span class="text-cyan-400 text-[2rem] sm:text-[2rem] md:text-[2.2rem]">{</span> Meus projetos <span class="text-cyan-400 text-[2rem] sm:text-[2rem] md:text-[2.2rem]">}</span>
                </h1>

                <!-- <div class="justify-self-center items-center xl:justify-self-end text-white flex gap-x-5 cursor-pointer">
                    <span class="bg-white text-gray-950 font-bold rounded-md px-7 py-2 text-center text-[.85rem] font-mono">// Front-end</span>
                    <span class="bg-slate-800 text-white rounded-md px-10 py-2 text-center text-[.85rem] font-mono">// Design UI</span>
                </div> -->
            </div>


            <div class="mt-10 gap-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div v-for="(image, index) in images" :key="index" class="hover:scale-[105%] ease-in-out duration-150 bg-secondary">
                    <img :src="image.img" class="rounded-t-xl sm:h-auto max-w-full cursor-pointer hover:brightness-120" alt="">
                        
                    <div class="px-5 pt-5 pb-8 text-sky-100 cursor-pointer">
                        <h2 class="w-full text-xl">{{image.title}}</h2>
                        <div class="grid gap-5 mt-5 min-[1320px]:grid-cols-2 items-center">
                            <span class="bg-cyan-bright text-slate-950 rounded-full px-5 py-2 text-center font-bold text-[0.70rem] font-montserrat">Front-end</span>
                            <span class="bg-pink text-white rounded-full px-5 py-2 text-center font-bold text-[0.70rem] font-montserrat">Front-end</span>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
<!-- Finaliza a div do portfolio -->
</template>

<script>
export default {
    data() {
        return {
            images: [
                {'img': 'https://camo.githubusercontent.com/4d0dfa1cbc3098007e0fe7dcfbe7420bc2a1d7639134c70683bd1cf1f3f1c1ff/68747470733a2f2f692e696d6775722e636f6d2f375563506d30422e706e67', 'title': 'Dev Space'},
                {'img': 'https://camo.githubusercontent.com/4d0dfa1cbc3098007e0fe7dcfbe7420bc2a1d7639134c70683bd1cf1f3f1c1ff/68747470733a2f2f692e696d6775722e636f6d2f375563506d30422e706e67', 'title': 'Origamid'},
                {'img': 'https://camo.githubusercontent.com/4d0dfa1cbc3098007e0fe7dcfbe7420bc2a1d7639134c70683bd1cf1f3f1c1ff/68747470733a2f2f692e696d6775722e636f6d2f375563506d30422e706e67', 'title': 'Rocket Seat'},
                {'img': 'https://camo.githubusercontent.com/4d0dfa1cbc3098007e0fe7dcfbe7420bc2a1d7639134c70683bd1cf1f3f1c1ff/68747470733a2f2f692e696d6775722e636f6d2f375563506d30422e706e67', 'title': 'Alura'},
                {'img': 'https://camo.githubusercontent.com/4d0dfa1cbc3098007e0fe7dcfbe7420bc2a1d7639134c70683bd1cf1f3f1c1ff/68747470733a2f2f692e696d6775722e636f6d2f375563506d30422e706e67', 'title': 'Dev Space'},
                {'img': 'https://camo.githubusercontent.com/4d0dfa1cbc3098007e0fe7dcfbe7420bc2a1d7639134c70683bd1cf1f3f1c1ff/68747470733a2f2f692e696d6775722e636f6d2f375563506d30422e706e67', 'title': 'Origamid'},
                {'img': 'https://camo.githubusercontent.com/4d0dfa1cbc3098007e0fe7dcfbe7420bc2a1d7639134c70683bd1cf1f3f1c1ff/68747470733a2f2f692e696d6775722e636f6d2f375563506d30422e706e67', 'title': 'Dev Space'},
                {'img': 'https://camo.githubusercontent.com/4d0dfa1cbc3098007e0fe7dcfbe7420bc2a1d7639134c70683bd1cf1f3f1c1ff/68747470733a2f2f692e696d6775722e636f6d2f375563506d30422e706e67', 'title': 'Origamid'},
        ]
        };
    }
}
</script>