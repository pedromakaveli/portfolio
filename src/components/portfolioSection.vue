<template>
    <!-- Inicia a div do portfolio -->
    <div class="bg-slate-900 pt-5 pb-5 px-20">
        <div class="container mx-auto flex flex-col">
            <h1 id="portfolio"  class="cursor-pointer text-center font-montserrat text-sky-100 text-[2rem] font- hover:text-cyan-400"><span
                    class="text-cyan-400 text-[2.2rem]">{</span> Meus projetos <span
                    class="text-cyan-400 text-[2.2rem]">}</span>
            </h1>

            <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div v-for="(image, index) in images" :key="index" class="grid gap-4">
                        <img :src="image" class="rounded-lg h-auto max-w-full cursor-pointer" alt="">
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