<template>
    <nav id="navtop" class="white flex justify-center">
        <ul class="z-10 px-10 flex flex-wrap mt-10 items-center gap-2 font-mono text-md text-slate-50 fixed"
            :class="scrollPosition ? 'transition duration-500 ease-in-out bg-menu rounded-full backdrop-blur-md' : 'transparent'">
            <li class="grid hover:text-cyan-400 transition duration-150 cursor-pointer p-4 font-bold">
                <a href="#navtop">// home</a>
            </li>

            <li class="hover:text-cyan-400 transition duration-150 cursor-pointer p-4 font-bold">
                <a href="#portfolio">// portfólio</a>
            </li>

            <li class="hover:text-cyan-400 transition duration-150 cursor-pointer p-4 font-bold">// formação</li>
            <li class="hover:text-cyan-400 transition duration-150 cursor-pointer p-4 font-bold">// contato</li>
        </ul>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            scrollPosition: null
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