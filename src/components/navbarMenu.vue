<template>
    <nav id="navtop" class="flex justify-end md:justify-center text-white">
        <ul class="z-10 px-10 hidden md:flex flex-wrap mt-10 items-center gap-2 font-mono text-md text-slate-50 fixed"
            :class="scrollPosition ? 'transition duration-500 ease-in-out bg-menu rounded-full backdrop-blur-sm' : 'transparent'">
            <li v-for="(link, index) in menuLinks" :key="index" class="grid hover:text-cyan-400 transition duration-150 cursor-pointer pt-5 px-5 pb-5 font-bold">
                <a :href="link.link">{{link.nome}}</a>
            </li>

        </ul>
        <div class="md:hidden fixed p-5 z-[100]" :class="activeMobile ? 'p-10 bg-menu backdrop-blur-sm min-w-full' : 'p-10 transparent' ">
            <div class="mx-5">
                <font-awesome-icon class="p-5 absolute top-0 right-0 cursor-pointer" @click="activeMobile = ! activeMobile" :icon="activeMobile ? ['fas', 'fa-circle-xmark'] : ['fas', 'bars']" size="2xl" style="color: #ffffff;" />
                <ul v-if="activeMobile" class="flex flex-col items-center gap-10">
                    <li class="text-xl" v-for="(link, index) in menuLinks" :key="index">
                        <a href="/">{{link.nome}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            scrollPosition: null,
            menuLinks: [
                {'nome': '// home', 'link': '#intro'},
                {'nome': '// portfolio', 'link': '#portfolio'},
                {'nome': '// formação', 'link': '/'},
                {'nome': '// contato', 'link': '/'},
            ],
            activeMobile: false,
        };
    },

    methods: {
        onScroll() {
            this.scrollPosition = window.scrollY
            console.log(this.scrollPosition)
        }
        ,
    },

    mounted() {
        window.addEventListener('scroll', this.onScroll);
    }
}
</script>