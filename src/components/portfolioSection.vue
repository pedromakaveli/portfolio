<template>
    <!-- Inicia a div do portfolio -->
    <div class="bg-zinc-950 pt-5 pb-5 px-20 min-h-[100vh]">
        <div class="container mx-auto">
            <div class="grid justify-items-center items-center">
                <h1 id="portfolio" class="cursor-pointer font-montserrat text-sky-100 text-[1.5rem] md:text-[2rem] hover:text-cyan-400">
                    <span class="text-cyan-400 text-[2.2rem]">{</span> Meus projetos <span class="text-cyan-400 text-[2.2rem]">}</span>
                </h1>

                <div class="justify-self-end text-white flex gap-x-5 cursor-pointer">
                    <span class="bg-white text-gray-950 font-bold rounded-full px-7 py-2 text-center text-[.90rem] font-montserrat">// Front-end</span>
                    <span class="bg-slate-800 text-white rounded-full px-10 py-2 text-center text-[.90rem] font-montserrat">// Design UI</span>
                </div>
            </div>


            <div class="mt-10 grid grid-cols-2 max-[600px]:grid-cols-1 md:grid-cols-4 gap-10">
                <div v-for="(image, index) in images" :key="index" class="hover:scale-[105%] ease-in-out duration-150 bg-black rounded-lg">
                    <img :src="image" class="rounded-t-md h-auto max-w-full cursor-pointer" alt="">
                        
                    <div class="px-5 pt-5 pb-8 text-sky-100 flex gap-5 flex-wrap items-start cursor-pointer">
                        <h2 class="w-full text-xl">Alura</h2>
                        <span class="bg-cyan-bright text-slate-950 rounded-full px-5 py-2 text-center font-bold text-[0.70rem] font-montserrat">Front-end</span>
                        <span class="bg-pink text-white rounded-full px-5 py-2 text-center font-bold text-[0.70rem] font-montserrat">Front-end</span>
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
                'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
                'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
                'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
                'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
                'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
                'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
                'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
                'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
            ]
        };
    }
}
</script>