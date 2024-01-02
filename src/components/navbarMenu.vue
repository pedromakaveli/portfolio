<template>
    <nav id="navtop" class="white flex md:justify-center justify-end text-white">
        <ul class="z-10 px-10 hidden md:flex flex-wrap mt-10 items-center gap-2 font-mono text-md text-slate-50 fixed"
            :class="scrollPosition ? 'transition duration-500 ease-in-out bg-menu rounded-full backdrop-blur-md' : 'transparent'">
            <li v-for="(link, index) in menuLinks" :key="index" class="grid hover:text-cyan-400 transition duration-150 cursor-pointer p-4 font-bold">
                <a :href="link.link">{{link.nome}}</a>
            </li>

        </ul>
        <div class="md:hidden flex flex-col p-5">
            <div>
                <img src="../assets/imgs/burguer.svg"/>
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
            ]
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