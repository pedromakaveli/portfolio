<template>
    <!-- Inicia a div do portfolio -->
    <div class="md:pt-5 pb-5 px-20 min-h-[100vh]">
        <div class="container mx-auto">
            <div class="grid justify-items-center gap-10 items-center">
                <h1 id="portfolio" class="cursor-pointer font-montserrat text-sky-100 text-[1.4rem] sm:text-[1.5rem] md:text-[2rem] hover:text-cyan-400">
                    <span class="text-cyan-400 text-[2rem] sm:text-[2rem] md:text-[2.2rem]">{</span> Meus projetos <span class="text-cyan-400 text-[2rem] sm:text-[2rem] md:text-[2.2rem]">}</span>
                </h1>
            </div>

            <div class="flex content-center justify-center">
                <!-- Modal -->
                <div v-if="activeModal" class="modal fixed inset-0 z-[100000] flex items-center justify-center bg-black bg-opacity-50">
                    <div class="w-[70vw] text-white modal-content bg-slate-950 p-8 rounded-lg">
                        <h1 class="text-[1.5rem] mb-10">{{ selectedImage.title }}</h1>

                        <img :src="selectedImage.img" alt="">

                        <!-- Adicione outras informações da imagem aqui, se necessário -->
                        <button @click="activeModal = false" class="absolute top-2 right-2 text-white hover:text-gray-800 focus:outline-none">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-10 gap-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div @click="showModal(image)" v-for="(image, index) in images" :key="index" class="hover:scale-[105%] ease-in-out duration-150 bg-secondary">
                    <img :src="image.img" class="rounded-t-xl sm:h-auto max-w-full cursor-pointer hover:brightness-120" alt="">
                    <div class="px-5 pt-5 pb-8 text-sky-100 cursor-pointer">
                        <h2 class="w-full text-xl">{{ image.title }}</h2>
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
                {'img': 'https://camo.githubusercontent.com/4d0dfa1cbc3098007e0fe7dcfbe7420bc2a1d7639134c70683bd1cf1f3f1c1ff/68747470733a2f2f692e696d6775722e636f6d2f375563506d30422e706e67', 'title': 'Orkut'},
                {'img': 'https://camo.githubusercontent.com/0181dc55280e60efa92c593eef883d9a25d95334cd45a225e8c33b566e4eab71/68747470733a2f2f692e6962622e636f2f34546344487a482f53637265656e73686f742d32303233303733312d3131313732352e706e67', 'title': 'Kenai'},
                {'img': 'https://camo.githubusercontent.com/e75e57ce61208f7dbc9edb05025f59350c00ce756eb168415c70488be72840ee/68747470733a2f2f692e696d6775722e636f6d2f5265756e7967572e706e67', 'title': 'Twitch'},
                {'img': 'https://camo.githubusercontent.com/ff1250f6e76f62ba8587b9273a1b7a197f7dceb57d329ee0b2433d2620e703cd/68747470733a2f2f692e696d6775722e636f6d2f4c6a4d32494c342e706e67', 'title': 'Viagem de Chihiro'},
                {'img': 'https://camo.githubusercontent.com/96f349df0dbbef379e0e4b58f67025491c28145f71a9a3b3bd2843ff592a3a20/68747470733a2f2f692e696d6775722e636f6d2f35535a5650426f2e706e67', 'title': 'Loki'},
                {'img': 'https://camo.githubusercontent.com/f99b414062b9542f3aef80ebf5d1c5a60d79b2603d7c4c7be4ac92b3c71008be/68747470733a2f2f692e696d6775722e636f6d2f693931396967432e706e67', 'title': 'Discord Login'},
            ],
            activeModal: false,
            selectedImage: {}
        };
    },
    methods: {
        showModal(image) {
            this.selectedImage = image;
            this.activeModal = true;
        }
    }
}
</script>
