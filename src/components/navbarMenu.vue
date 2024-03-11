<template>
    <header class="md:fixed md:justify-end md:fixed md:top-0 md:left-0 md:w-[100vw] md:px-5 md:py-[25px] md:z-[5]" :class="scrollPosition ? 'transition duration-500 ease-in-out bg-menu md:backdrop-blur-sm' : 'mt-0'">
        <nav class="flex justify-center">
            <ul class="hidden md:flex items-center content-center flex-wrap text-cyan-bright font-roboto-mono text-[1rem] gap-10">
                <li v-for="link, index in menuLinks" :key="index" class="px-[10px] py-[px]">
                    <a :href="link.link">{{ link.nome }}</a>
                </li>
            </ul>
        </nav>

            <div :class="activeMobile ? 'z-[50000] bg-slate-950 h-[100%]' : ''" class="p-5 fixed top-0 left-0 w-[100%] md:hidden">
                <div class="w-[100%] flex justify-end flex-wrap">
                    <font-awesome-icon v-if="activeMobile == false" v-on:click="activeMobile =! activeMobile" :icon="['fas', 'bars']" size="2xl" style="color: #ffffff;" />
                    <font-awesome-icon v-if="activeMobile == true" v-on:click="activeMobile =! activeMobile" :icon="['fas', 'circle-xmark']" size="2xl" style="color: #ffffff;" />
                </div>

                <div v-if="activeMobile" class="text-cyan-bright font-roboto-mono items-center text-[1.3rem] w-full h-full flex justify-center">
                    <ul>
                        <li v-for="(link, index) in menuLinks" :key="index" class="my-20 py-2">
                            <a :href="link.link">{{ link.nome }}</a>
                        </li>
                    </ul>
                </div>

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