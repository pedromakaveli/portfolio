<template>
    <nav id="navtop" class="flex md:justify-center justify-end text-white">
        <ul class="z-10 px-10 hidden md:flex flex-wrap mt-10 items-center gap-2 font-mono text-md text-slate-50 fixed"
            :class="scrollPosition ? 'transition duration-500 ease-in-out bg-menu rounded-full backdrop-blur-sm' : 'transparent'">
            <li v-for="(link, index) in menuLinks" :key="index" class="grid hover:text-cyan-400 transition duration-150 cursor-pointer pt-5 px-5 pb-5 font-bold">
                <a :href="link.link">{{link.nome}}</a>
            </li>

        </ul>
        <div class="md:hidden flex flex-col p-5 justify-self-end">
            <div>
                <font-awesome-icon @click="activeMobile = ! activeMobile" :icon="activeMobile ? ['fas', 'fa-circle-xmark'] : ['fas', 'bars']" size="2xl" style="color: #ffffff;" />
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