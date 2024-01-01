<template>
  <div class="bg-slate-900 min-h-screen" id="app">
    <!-- Inicia o o menu de navegação -->
    <nav id="navtop" class="white flex justify-center ">
      <ul class="z-10 px-10 flex flex-wrap mt-10 justify-center gap-2 font-mono text-md text-slate-50 fixed" :class="scrollPosition ? 'transition duration-500 ease-in-out bg-menu rounded-full backdrop-blur-md' : 'transparent'">
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

    <!-- finaliza o menu de navegação -->

    <introduction id="intro"></introduction>

<<<<<<< HEAD
    <my-portfolio></my-portfolio>
=======
        <div class="mt-[45px] flex justify-start gap-5 mb-[100px] text-sm">
          <a class="bg-cyan-bright pt-4 pb-4 px-10 uppercase font-roboto-mono hover:rounded-tr-xl" href="#">Currículo</a>
          <a class="bg-pink text-white pt-4 pb-4 px-10 uppercase font-roboto-mono" href="#">Linkedin</a>
        </div>

        <div class="relative top-[90px] cursor-pointer animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-cyan-bright" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
    </div>
    <!-- Finaliza a div de apresentação  -->

    <my-portfolio>
    </my-portfolio>
>>>>>>> 2944002f40350ca20b24d17efcdd48d087938207

  </div>
</template>

<script>
import portfolioSection from './components/portfolioSection';
import introSection from './components/introSection.vue';

export default {

  name: 'App',
  components: {
    'my-portfolio': portfolioSection,
    'introduction': introSection
  },
  data() {
    return {
      scrollPosition: null
    };
  },

  methods: {
    onScroll () {
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