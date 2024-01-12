<template>
    <header class="fixed justify-end md:fixed top-0 left-0 w-[100vw] px-5 py-[25px] z-[5]" :class="scrollPosition ? 'transition duration-500 ease-in-out bg-menu backdrop-blur-sm' : 'mt-0'">
        <nav class="flex justify-center">
            <ul class="hidden md:flex items-center content-center flex-wrap text-cyan-bright font-roboto-mono text-[1rem] gap-10">
                <li v-for="link, index in menuLinks" :key="index" class="px-[10px] py-[px]">
                    <a :href="link.link">{{ link.nome }}</a>
                </li>
            </ul>
        </nav>
        
            <div class="visible flex justify-end md:hidden">
                <h3>teste</h3>
            </div>
    </header>
</template>

<script>

export default {
    data() {
        return {
            scrollPosition: null,
            menuLinks: [
                {'nome': '// home', 'link': '#intro'},
                {'nome': '// portfolio', 'link': '#portfolio'},
                {'nome': '// formação', 'link': '#formation'},
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